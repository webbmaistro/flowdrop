import Stripe from 'stripe'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const config = { api: { bodyParser: false } }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-04-10',
})
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)

async function readRawBody(readable) {
  const reader = readable.getReader()
  const chunks = []
  while (true) {
    const { done, value } = await reader.read()
    if (done) break
    chunks.push(value)
  }
  return Buffer.concat(chunks)
}

export async function POST(req) {
  const sig = req.headers.get('stripe-signature')
  const rawBody = await readRawBody(req.body)

  let event

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err)
    return new NextResponse('Webhook Error', { status: 400 })
  }

  const session = event.data.object

  switch (event.type) {
    case 'checkout.session.completed':
    case 'customer.subscription.updated':
    case 'customer.subscription.deleted':
      const subscription = await stripe.subscriptions.retrieve(session.subscription)

      await supabase
        .from('user_subscriptions')
        .upsert({
          user_id: session.metadata.userId,
          stripe_customer_id: session.customer,
          stripe_subscription_id: subscription.id,
          subscription_status: subscription.status,
          current_plan: subscription.items.data[0].price.nickname || 'unknown',
          current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
        })

      break
    default:
      console.log(`Unhandled event type: ${event.type}`)
  }

  return new NextResponse('Success', { status: 200 })
} 