"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Users, Rocket, Crown } from 'lucide-react';
import { Button, Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const [loadingId, setLoadingId] = useState<string | null>(null);
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [firstHover, setFirstHover] = useState<string | null>(null);
  const [hoveredCredit, setHoveredCredit] = useState<string | null>(null);

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

  const plans = [
    {
      name: 'Spark',
      price: '$0',
      period: '/mo',
      description: 'Test-drive Flowdrop',
      priceId: null,
      highlight: false,
      icon: Zap,
      features: [
        '1,000 credits',
        '1 seat',
        'Basic Webby AI Copilot',
        'Community support',
        'Core AI tools',
        'Email support'
      ],
      cta: 'Start Free',
      ctaAction: () => window.location.href = '/signin'
    },
    {
      name: 'Solo',
      price: '$19',
      period: '/mo',
      description: 'Side-hustle builders',
      priceId: 'price_solo_monthly',
      highlight: false,
      icon: Users,
      features: [
        '10,000 credits',
        '1 seat',
        'Enhanced Webby AI Copilot',
        'Core AI tools',
        'Priority support',
        'Advanced integrations',
        'API access'
      ],
      cta: 'Get Started',
      ctaAction: () => window.location.href = '/signin'
    },
    {
      name: 'Builder',
      price: '$49',
      period: '/mo',
      description: 'Indie SaaS teams',
      priceId: 'price_builder_monthly',
      highlight: true,
      icon: Rocket,
      features: [
        '25,000 credits',
        '3 seats included',
        'Unlimited Webby AI Copilot',
        'Advanced AI tools',
        'Team collaboration',
        'Custom domains',
        'Dedicated support',
        '$9 per additional seat'
      ],
      cta: 'Get Started',
      ctaAction: () => window.location.href = '/signin'
    },
    {
      name: 'Growth',
      price: 'Custom',
      period: '',
      description: 'Agencies & high-volume ops',
      priceId: null,
      contactOnly: true,
      icon: Crown,
      features: [
        'Unlimited credits',
        'Unlimited seats',
        'Unlimited Webby AI Copilot',
        'White-glove onboarding',
        'Rev-share option',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 priority support'
      ],
      cta: 'Contact Sales',
      ctaAction: () => window.location.href = '/contact'
    },
  ];

  // Additional usage credits
  const additionalCredits = [
    {
      name: '10K Credits',
      price: '$25',
      description: 'One-time purchase',
      credits: '10,000',
      popular: false
    },
    {
      name: '3K Credits',
      price: '$10',
      description: 'One-time purchase',
      credits: '3,000',
      popular: true
    }
  ];

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
              Simple, credit-based pricing
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className={cn(typography.bodyLarge, "mb-12 max-w-2xl mx-auto text-balance")}
            >
              Choose the perfect plan for your workflow automation needs. 
              Start free and scale as you grow with flexible credit-based pricing.
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
            {plans.map((plan, index) => {
              const IconComponent = plan.icon;
              return (
                <motion.div
                  key={plan.name}
                  variants={itemVariants}
                  className={cn(
                    'relative transition-all duration-500 ease-out',
                    plan.highlight && 'lg:scale-105',
                    hoveredPlan === plan.name && 'scale-[1.02] -translate-y-1'
                  )}
                  animate={firstHover === plan.name ? {
                    scale: [1, 1.03, 1],
                  } : {}}
                  transition={firstHover === plan.name ? {
                    duration: 0.6,
                    ease: [0.4, 0, 0.2, 1],
                    times: [0, 0.3, 1]
                  } : {}}
                  onAnimationComplete={() => {
                    if (firstHover === plan.name) {
                      setFirstHover(null);
                    }
                  }}
                  onMouseEnter={() => {
                    setHoveredPlan(plan.name);
                    if (!firstHover) setFirstHover(plan.name);
                  }}
                  onMouseLeave={() => setHoveredPlan(null)}
                >
                  <Card 
                    variant={plan.highlight ? "glass" : "default"} 
                    hover={true}
                    className={cn(
                      'h-full relative transition-all duration-500 ease-out overflow-visible',
                      plan.highlight && 'border-primary-main/30 bg-gradient-to-br from-primary-main/10 via-primary-main/5 to-purple-700/10 shadow-2xl shadow-primary-main/20',
                      hoveredPlan === plan.name && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-2xl shadow-primary-main/30'
                    )}
                  >
                    {plan.highlight && (
                      <motion.span
                        role="status"
                        aria-label="Most popular plan"
                        className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          scale: hoveredPlan === plan.name ? 1.05 : 1
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="bg-purple-700/20 backdrop-blur-sm border border-purple-600/40 rounded-full px-4 py-2 shadow-sm shadow-purple-500/10">
                          <div className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-purple-300" />
                            <span className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                              Most Popular
                            </span>
                          </div>
                        </div>
                      </motion.span>
                    )}
                    
                    <CardHeader>
                      <div className="flex items-center space-x-3 mb-2">
                        <IconComponent className="w-6 h-6 text-primary-main" />
                        <CardTitle className="text-2xl">{plan.name}</CardTitle>
                      </div>
                      <CardDescription>{plan.description}</CardDescription>
                      {index > 0 && (
                        <p className="text-sm text-text-muted mt-1">Includes all features from {plans[index-1].name}</p>
                      )}
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
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Button
                            variant="primary"
                            size="lg"
                            className={cn(
                              "w-full text-white font-semibold btn-hover-ready rounded-full",
                              hoveredPlan === plan.name && "btn-liquid ring-white-glow"
                            )}
                            onClick={() => plan.ctaAction()}
                            loading={plan.priceId ? loadingId === plan.priceId : false}
                            disabled={plan.priceId ? loadingId === plan.priceId : false}
                          >
                            {plan.priceId && loadingId === plan.priceId ? 'Redirecting...' : plan.cta}
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Additional Credits Section */}
      <section className="py-20 bg-background-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-6")}>
              Need more credits?
            </motion.h2>
            <motion.p variants={itemVariants} className={cn(typography.bodyLarge, "mb-12 text-text-muted")}>
              Purchase additional credits anytime. Perfect for high-volume workflows or one-off projects.
            </motion.p>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {additionalCredits.map((credit, index) => (
                <motion.div
                  key={credit.name}
                  className={cn(
                    'relative transition-all duration-500 ease-out',
                    hoveredCredit === credit.name && 'scale-[1.02] -translate-y-1'
                  )}
                  onMouseEnter={() => setHoveredCredit(credit.name)}
                  onMouseLeave={() => setHoveredCredit(null)}
                >
                  <Card 
                    variant="glass" 
                    hover={true}
                    className={cn(
                      'h-full relative transition-all duration-500 ease-out overflow-visible',
                      hoveredCredit === credit.name && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-2xl shadow-primary-main/30'
                    )}
                  >
                    {credit.popular && (
                      <motion.span
                        role="status"
                        aria-label="Best value credit package"
                        className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          scale: hoveredCredit === credit.name ? 1.05 : 1
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="bg-purple-700/20 backdrop-blur-sm border border-purple-600/40 rounded-full px-4 py-2 shadow-sm shadow-purple-500/10">
                          <div className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-purple-300" />
                            <span className="text-xs font-semibold uppercase tracking-wide text-purple-300">
                              Best Value
                            </span>
                          </div>
                        </div>
                      </motion.span>
                    )}
                    
                    <CardHeader>
                      <CardTitle className="text-center text-2xl">{credit.name}</CardTitle>
                      <CardDescription className="text-center">{credit.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white mb-2">{credit.price}</div>
                        <p className="text-text-muted text-lg">{credit.credits} credits</p>
                      </div>
                      
                      <div className="pt-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: 0.3 }}
                        >
                          <Button
                            variant="primary"
                            size="lg"
                            className={cn(
                              "w-full text-white font-semibold btn-hover-ready rounded-full",
                              hoveredCredit === credit.name && "btn-liquid ring-white-glow"
                            )}
                            onClick={() => {
                              // Add your credit purchase logic here
                              console.log(`Purchasing ${credit.name} for ${credit.price}`);
                              // Example: startCreditCheckout(credit.priceId);
                            }}
                          >
                            Purchase Credits
                          </Button>
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
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
                  <h3 className="text-lg font-semibold mb-3">How do credits work?</h3>
                  <p className={typography.body}>
                    Credits are consumed based on workflow complexity and execution frequency. Simple workflows use fewer credits than complex ones.
                  </p>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-3">What is Webby AI Copilot?</h3>
                  <p className={typography.body}>
                    Our AI assistant that helps you build, debug, and optimize workflows. Higher tiers get more advanced AI capabilities.
                  </p>
                </CardContent>
              </Card>
              
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
                  <h3 className="text-lg font-semibold mb-3">Do unused credits roll over?</h3>
                  <p className={typography.body}>
                    Monthly plan credits reset each month. Additional purchased credits never expire and roll over indefinitely.
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