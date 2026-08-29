import { NextRequest, NextResponse } from 'next/server';

// Optional product guard. When set, only payments containing this product_id
// unlock the blueprint. Discount/free codes preserve the product_id, so they
// still pass. Leave empty to skip the product check (amount check is relaxed).
const PRODUCT_ID = process.env.DODO_PRODUCT_ID || '';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const paymentId = searchParams.get('payment_id');

  if (!paymentId) {
    return NextResponse.json({ valid: false, error: 'Missing payment_id' }, { status: 400 });
  }

  // Basic shape check — Dodo payment IDs look like pay_xxx.
  // Rejects obvious junk before hitting the upstream API.
  if (!/^pay_[A-Za-z0-9]+$/.test(paymentId)) {
    return NextResponse.json({ valid: false, error: 'Malformed payment_id' }, { status: 400 });
  }

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;

  if (!apiKey) {
    console.error('[verify] DODO_PAYMENTS_API_KEY is not configured');
    return NextResponse.json(
      { valid: false, error: 'Server payment verification is not configured. Ask the site owner to set DODO_PAYMENTS_API_KEY in Vercel.' },
      { status: 503 }
    );
  }

  try {
    const baseUrl = apiKey.startsWith('sk_test') || apiKey.startsWith('test_')
      ? 'https://test.dodopayments.com'
      : 'https://live.dodopayments.com';
    const res = await fetch(`${baseUrl}/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.error(`[verify] Dodo API returned ${res.status} for ${paymentId}: ${body}`);
      return NextResponse.json(
        { valid: false, error: `Payment record not found (${res.status})` },
        { status: 400 }
      );
    }

    const data = await res.json();
    const normalizedStatus = typeof data.status === 'string' ? data.status.toLowerCase() : '';

    // Only a truly captured payment unlocks. A payment that still requires a
    // 3DS action (requires_action), is pending, or failed must NOT unlock —
    // otherwise we ship the product before the money clears.
    if (normalizedStatus !== 'succeeded' && normalizedStatus !== 'paid') {
      return NextResponse.json(
        { valid: false, status: data.status, error: `Payment status is ${data.status}` },
        { status: 403 }
      );
    }

    // Refund guard — never unlock a refunded (or partially refunded) order.
    const refunded =
      data.refunded === true ||
      data.refund_status === 'refunded' ||
      data.refund_status === 'partially_refunded';
    if (refunded) {
      console.warn(`[verify] payment ${paymentId} is refunded; refusing unlock`);
      return NextResponse.json(
        { valid: false, status: data.status, error: 'This payment has been refunded.' },
        { status: 403 }
      );
    }

    // Optional product guard (enable via DODO_PRODUCT_ID in Vercel). Discount
    // and free codes keep the same product_id, so they still unlock. Without it,
    // any succeeded / non-refunded USD payment on this Dodo account is accepted.
    if (PRODUCT_ID) {
      const items = Array.isArray(data.products) ? (data.products as any[]) : [];
      const hasProduct = items.some((p) => p && p.product_id === PRODUCT_ID);
      if (!hasProduct) {
        console.warn(`[verify] payment ${paymentId} missing product ${PRODUCT_ID}`);
        return NextResponse.json(
          { valid: false, status: data.status, error: 'Payment product mismatch.' },
          { status: 403 }
        );
      }
    }
    // NOTE: amount is intentionally NOT floored at $19 — discount/free codes
    // legitimately yield lower amounts, and a real succeeded/non-refunded payment
    // on this account is a valid purchase.

    return NextResponse.json({ valid: true, paymentId, status: data.status });
  } catch (err: any) {
    console.error('[verify] exception:', err);
    return NextResponse.json(
      { valid: false, error: err.message || 'Verification request failed' },
      { status: 500 }
    );
  }
}
