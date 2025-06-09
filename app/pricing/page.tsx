"use client"

import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Basic access to tools',
    priceId: 'price_1RXx3jFzNR6a9wq2grkZXFY3',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29/mo',
    description: 'For growing projects',
    priceId: 'price_1RXx4EFzNR6a9wq2JQlwLFqm',
    highlight: true,
  },
  {
    name: 'Business',
    price: '$99/mo',
    description: 'Advanced features',
    priceId: 'price_1RXx4zFzNR6a9wq2WBJlo1sI',
    highlight: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored solutions',
    priceId: null,
    contactOnly: true,
  },
]

export default function PricingPage() {
  const [loadingId, setLoadingId] = useState<string | null>(null)

  const startCheckout = async (priceId: string) => {
    setLoadingId(priceId)
    const res = await fetch('/api/stripe/checkout', {
      method: 'POST',
      body: JSON.stringify({ priceId, userId: 'demo-user' }), // Replace with real user ID
    })
    const data = await res.json()
    if (data.url) {
      window.location.href = data.url
    }
  }

  return (
    <div className="bg-black text-white min-h-screen px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Choose Your Plan</h1>
      <div className="grid gap-6 max-w-4xl mx-auto md:grid-cols-4">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl p-6 border ${
              plan.highlight ? 'border-purple-500 shadow-xl' : 'border-gray-700'
            }`}
          >
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-2xl font-bold mb-4">{plan.price}</p>
            <p className="mb-6">{plan.description}</p>
            {plan.contactOnly ? (
              <button className="bg-purple-700 text-white py-2 px-4 rounded">Contact Us</button>
            ) : (
              <button
                className="bg-purple-600 hover:bg-purple-700 transition text-white py-2 px-4 rounded"
                onClick={() => startCheckout(plan.priceId!)}
                disabled={!plan.priceId || loadingId === plan.priceId}
              >
                {loadingId === plan.priceId ? 'Redirecting...' : 'Get Started'}
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 