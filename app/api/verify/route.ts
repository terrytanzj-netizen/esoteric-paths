import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const paymentId = searchParams.get('payment_id');

  if (!paymentId) {
    return NextResponse.json({ valid: false, error: 'Missing payment_id' }, { status: 400 });
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
    const res = await fetch(`https://api.dodopayments.com/payments/${paymentId}`, {
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

    if (normalizedStatus === 'succeeded' || normalizedStatus === 'paid' || normalizedStatus === 'requires_action') {
      return NextResponse.json({ valid: true, paymentId, status: data.status });
    }

    return NextResponse.json(
      { valid: false, status: data.status, error: `Payment status is ${data.status}` },
      { status: 403 }
    );
  } catch (err: any) {
    console.error('[verify] exception:', err);
    return NextResponse.json(
      { valid: false, error: err.message || 'Verification request failed' },
      { status: 500 }
    );
  }
}
