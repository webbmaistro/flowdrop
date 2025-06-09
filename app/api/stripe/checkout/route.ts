import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe with the secret key from environment variables
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil', // Use the latest API version
});

// Define the expected request body type
interface CheckoutRequest {
  priceId: string;
  userId: string;
}

export async function POST(req: Request) {
  try {
    // Parse the request body
    const body: CheckoutRequest = await req.json();
    const { priceId, userId } = body;

    // Validate required fields
    if (!priceId || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription', // Set to subscription mode for recurring payments
      payment_method_types: ['card'], // Accept card payments
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?success=true`, // Redirect on success
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard?canceled=true`, // Redirect on cancel
      metadata: {
        userId, // Store the user ID in the session metadata
      },
      customer_email: userId, // Use the user ID as the customer email
    });

    // Return the session URL
    return NextResponse.json({ url: session.url });
  } catch (error) {
    // Log the error for debugging
    console.error('Stripe checkout error:', error);

    // Return a user-friendly error message
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    );
  }
} 