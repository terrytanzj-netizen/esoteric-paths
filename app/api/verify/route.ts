import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const paymentId = searchParams.get('payment_id');

  if (!paymentId) {
    return NextResponse.json({ valid: false, error: 'Missing payment_id' }, { status: 400 });
  }

  const apiKey = process.env.DODO_PAYMENTS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ valid: true, warning: 'API key not configured on server' });
  }

  try {
    const res = await fetch(`https://api.dodopayments.com/payments/${paymentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ valid: false, error: 'Payment record not found' }, { status: 400 });
    }

    const data = await res.json();

    if (data.status === 'succeeded' || data.status === 'paid') {
      return NextResponse.json({ valid: true, paymentId, status: data.status });
    }

    return NextResponse.json({ valid: false, status: data.status }, { status: 403 });
  } catch (err: any) {
    return NextResponse.json({ valid: false, error: err.message }, { status: 500 });
  }
}
