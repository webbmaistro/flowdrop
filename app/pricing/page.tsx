"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Hobby',
    price: '$0',
    period: '/mo',
    description: 'Perfect for getting started',
    priceId: 'price_1RXx3jFzNR6a9wq2grkZXFY3',
    highlight: false,
    features: [
      '1,000 workflow executions',
      '1 n8n instance',
      'Community support',
      'Basic integrations',
      'Email support'
    ],
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/mo',
    description: 'For power users and teams',
    priceId: 'price_1RXx4EFzNR6a9wq2JQlwLFqm',
    highlight: true,
    features: [
      'Unlimited executions',
      'Multiple instances',
      'Priority support',
      'Advanced integrations',
      'Team collaboration',
      'Custom domains',
      'API access'
    ],
  },
  {
    name: 'Business',
    price: '$99',
    period: '/mo',
    description: 'Advanced features for growing teams',
    priceId: 'price_1RXx4zFzNR6a9wq2WBJlo1sI',
    highlight: false,
    features: [
      'Everything in Pro',
      'Advanced analytics',
      'Custom workflows',
      'Dedicated support',
      'SLA guarantees',
      'Onboarding assistance',
      'Custom integrations'
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Tailored solutions for large organizations',
    priceId: null,
    contactOnly: true,
    features: [
      'Everything in Business',
      'Custom pricing',
      'Dedicated account manager',
      'Custom SLA',
      'On-premise options',
      'Training & workshops',
      '24/7 phone support'
    ],
  },
];

export default function PricingPage() {
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const startCheckout = async (priceId: string) => {
    setLoadingId(priceId);
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        body: JSON.stringify({ priceId, userId: 'demo-user' }), // Replace with real user ID
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setLoadingId(null);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-main/20 via-transparent to-primary-dark/20" />
        <div className="relative container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex justify-center mb-6">
              <div className="p-4 bg-primary-main/20 rounded-2xl">
                <Star className="w-8 h-8 text-primary-main" />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className={cn(typography.h1, "mb-6 text-balance")}
            >
              Simple, usage-based pricing
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className={cn(typography.bodyLarge, "mb-12 max-w-2xl mx-auto text-balance")}
            >
              Choose the perfect plan for your workflow automation needs. 
              Start free and scale as you grow.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                variants={itemVariants}
                className={cn(
                  'relative',
                  plan.highlight && 'lg:scale-105'
                )}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-main text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <Card 
                  variant={plan.highlight ? "glass" : "default"} 
                  hover 
                  className={cn(
                    'h-full',
                    plan.highlight && 'border-primary-main/30 bg-primary-main/5'
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-text-muted ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-success-500 mt-0.5 flex-shrink-0" />
                          <span className={typography.bodySmall}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="pt-4">
                      {plan.contactOnly ? (
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full"
                          onClick={() => window.location.href = '/contact'}
                        >
                          Contact Sales
                        </Button>
                      ) : (
                        <Button
                          variant={plan.highlight ? "primary" : "secondary"}
                          size="lg"
                          className="w-full"
                          onClick={() => startCheckout(plan.priceId!)}
                          loading={loadingId === plan.priceId}
                          disabled={!plan.priceId || loadingId === plan.priceId}
                        >
                          {loadingId === plan.priceId ? 'Redirecting...' : 'Get Started'}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-12")}>
              Frequently Asked Questions
            </motion.h2>
            
            <motion.div variants={itemVariants} className="grid gap-8 md:grid-cols-2">
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Can I change plans anytime?</h3>
                  <p className={typography.body}>
                    Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">What happens after my trial?</h3>
                  <p className={typography.body}>
                    After your trial ends, you'll automatically be moved to the Hobby plan. No credit card required.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Is there a setup fee?</h3>
                  <p className={typography.body}>
                    No setup fees! All plans include instant setup and deployment at no additional cost.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">Do you offer refunds?</h3>
                  <p className={typography.body}>
                    We offer a 30-day money-back guarantee. If you're not satisfied, we'll refund your payment.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 