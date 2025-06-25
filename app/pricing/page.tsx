"use client"

import { useState } from 'react'
import { Check, ArrowRight, Star } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 'Free',
    description: 'Perfect for getting started',
    priceId: 'price_1RXx3jFzNR6a9wq2grkZXFY3',
    highlight: false,
    features: [
      '1,000 workflow executions',
      '1 n8n instance',
      'Community support',
      'Basic templates',
      'Email notifications'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For growing teams and projects',
    priceId: 'price_1RXx4EFzNR6a9wq2JQlwLFqm',
    highlight: true,
    features: [
      'Unlimited executions',
      'Multiple instances',
      'Priority support',
      'Advanced templates',
      'Custom integrations',
      'Team collaboration',
      'Analytics dashboard'
    ]
  },
  {
    name: 'Business',
    price: '$99',
    period: '/month',
    description: 'For enterprise workflows',
    priceId: 'price_1RXx4zFzNR6a9wq2WBJlo1sI',
    highlight: false,
    features: [
      'Everything in Pro',
      'Advanced security',
      'Custom domains',
      'API access',
      'Dedicated support',
      'SLA guarantees',
      'Custom branding'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'Tailored for large organizations',
    priceId: null,
    contactOnly: true,
    features: [
      'Everything in Business',
      'Custom pricing',
      'Dedicated infrastructure',
      'On-premise options',
      'Custom integrations',
      '24/7 phone support',
      'Account manager'
    ]
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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-6 py-32">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-gray-300">Simple Pricing</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                Choose Your
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Perfect Plan
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Start free and scale as you grow. No hidden fees, no surprises. 
              Cancel anytime.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid gap-8 max-w-7xl mx-auto lg:grid-cols-4 md:grid-cols-2">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`group relative p-8 rounded-3xl transition-all duration-500 transform hover:scale-[1.02] ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 hover:from-purple-500/20 hover:to-blue-500/20' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-sm font-semibold shadow-xl">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-semibold mb-2 text-white">{plan.name}</h2>
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-white">{plan.price}</span>
                    {plan.period && (
                      <span className="text-xl text-gray-400 ml-1">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.contactOnly ? (
                  <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl font-semibold transition-all duration-300 group-hover:scale-[1.02]">
                    Contact Sales
                  </button>
                ) : (
                  <button
                    className={`w-full py-4 rounded-2xl font-semibold transition-all duration-300 group-hover:scale-[1.02] ${
                      plan.highlight
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-xl shadow-purple-500/25'
                        : 'bg-white/10 hover:bg-white/20 border border-white/20'
                    }`}
                    onClick={() => startCheckout(plan.priceId!)}
                    disabled={!plan.priceId || loadingId === plan.priceId}
                  >
                    {loadingId === plan.priceId ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Redirecting...
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        Get Started
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="mt-32 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-left p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3 text-white">Can I cancel anytime?</h3>
                <p className="text-gray-400">Yes, you can cancel your subscription at any time. No long-term contracts or hidden fees.</p>
              </div>
              
              <div className="text-left p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3 text-white">What happens after my trial?</h3>
                <p className="text-gray-400">After your free trial, you can choose any plan that fits your needs. Your workflows will continue running seamlessly.</p>
              </div>
              
              <div className="text-left p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3 text-white">Do you offer refunds?</h3>
                <p className="text-gray-400">We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.</p>
              </div>
              
              <div className="text-left p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
                <h3 className="text-lg font-semibold mb-3 text-white">Is my data secure?</h3>
                <p className="text-gray-400">Absolutely. We use enterprise-grade security with encryption at rest and in transit. Your data is always protected.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <div className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/20 rounded-3xl">
              <h2 className="text-3xl font-bold mb-4 text-white">Ready to get started?</h2>
              <p className="text-gray-400 mb-8">Join thousands of developers who trust FlowDrop for their workflow automation needs.</p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-xl shadow-purple-500/25">
                Start Your Free Trial
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 