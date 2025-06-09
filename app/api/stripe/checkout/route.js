import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10', // 🔥 This is critical
});

export async function POST(req) {
  try {
    const { priceId, userId } = await req.json();

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      metadata: { userId },
      success_url: `${process.env.NEXT_PUBLIC_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/pricing`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error('❌ Stripe checkout error:', err);
    return NextResponse.json({ error: 'Stripe checkout failed' }, { status: 500 });
  }
} 