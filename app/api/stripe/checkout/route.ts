import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15',
});

export async function POST(req: Request) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const body = await req.json();
    console.log('Received body:', body);

    const priceId = body.priceId;
    if (!priceId || typeof priceId !== 'string') {
      return new Response('Missing or invalid priceId', { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      customer_email: 'test@flowdrop.xyz', // ✅ hardcoded email that Stripe accepts
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
    });
  } catch (err: any) {
    console.error('Stripe checkout error:', err.message);
    return new Response('Internal Server Error', { status: 500 });
  }
}
