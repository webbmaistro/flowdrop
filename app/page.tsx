"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cloud, Cpu, ArrowRight, Check, Users, Rocket, Crown, Star } from 'lucide-react';
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, SocialLinks } from '@/components/ui';
import GoogleSignIn from './components/GoogleSignIn';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/lib/usePostHog';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { track } = useAnalytics();

  const handleSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    // Track email subscription attempt
    track.emailSubscribe('hero');

    setError('');
    try {
      const response = await fetch(`${window.location.origin}/api/subscriberList`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitted(true);
        setEmail('');
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setError('Failed to subscribe. Please try again.');
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
              <div className="p-4 bg-background-glass backdrop-blur-lg rounded-2xl border border-white/10">
                <Zap className="w-8 h-8 text-primary-main" />
              </div>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className={cn(typography.h1, "mb-6 text-balance")}
            >
              Deploy n8n workflows in seconds
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className={cn(typography.bodyLarge, "mb-12 max-w-2xl mx-auto text-balance")}
            >
              AI-powered workflow builder with instant cloud deployment. 
              Build, deploy, and scale your n8n automations without the complexity.
            </motion.p>

            <motion.div variants={itemVariants} className="max-w-md mx-auto mb-12">
              <div className="flex flex-col gap-4">
                {/* Google Sign In as Feature Card */}
                <Card variant="glass" hover className="p-0">
                  <CardContent className="p-0">
                    <GoogleSignIn />
                  </CardContent>
                </Card>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-border-primary"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-text-muted">or</span>
                  </div>
                </div>
                <Button
                  onClick={() => {
                    track.buttonClick('Start Free Trial', 'hero');
                    window.location.href = '/signin';
                  }}
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                >
                  Start Free Trial
                </Button>
              </div>

              {/* Optimized Email Subscribe Section */}
              <div className="bg-white/5 backdrop-blur rounded-xl p-4 mt-8 flex flex-col items-center gap-3 border border-white/10">
                <span className="text-sm text-white/70 flex items-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" fill="#a78bfa"/></svg>
                  Stay in the loop! Get early access and updates.
                </span>
                {!submitted ? (
                  <div className="flex w-full gap-2">
                    <Input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      variant="glass"
                      className="flex-1"
                    />
                    <Button
                      onClick={handleSubmit}
                      variant="primary"
                      icon={<ArrowRight className="w-4 h-4" />}
                    >
                      Notify Me
                    </Button>
                  </div>
                ) : (
                  <p className="text-success-500 text-xs">Thanks! We'll keep you updated.</p>
                )}
                {error && <p className="text-error-500 text-xs">{error}</p>}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card variant="glass" hover className="text-center">
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-2xl">
                      <Cloud className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4">Instant Deployment</CardTitle>
                  <p className={typography.body}>
                    One-click n8n instances with automatic scaling and backups
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card variant="glass" hover className="text-center">
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-2xl">
                      <Zap className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4">AI Workflow Builder</CardTitle>
                  <p className={typography.body}>
                    Describe what you want to automate and let AI build it
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card variant="glass" hover className="text-center">
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-2xl">
                      <Cpu className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4">Managed Infrastructure</CardTitle>
                  <p className={typography.body}>
                    We handle the servers, updates, and security patches
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-12")}>
              Simple, credit-based pricing
            </motion.h2>
            
            <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="glass" hover>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-primary-main" />
                    <span>Spark</span>
                  </CardTitle>
                  <CardDescription>Test-drive Flowdrop</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-6">$0<span className="text-lg font-normal text-text-muted">/mo</span></p>
                  <ul className="text-left text-text-muted space-y-3 mb-6">
                    <li>• 1,000 credits</li>
                    <li>• 1 seat</li>
                    <li>• Basic Webby AI Copilot</li>
                    <li>• Community support</li>
                  </ul>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => window.location.href = '/signin'}
                  >
                    Start Free
                  </Button>
                </CardContent>
              </Card>
              
              <Card variant="glass" hover>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="w-5 h-5 text-primary-main" />
                    <span>Solo</span>
                  </CardTitle>
                  <CardDescription>Side-hustle builders</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-6">$19<span className="text-lg font-normal text-text-muted">/mo</span></p>
                  <ul className="text-left text-text-muted space-y-3 mb-6">
                    <li>• 10,000 credits</li>
                    <li>• 1 seat</li>
                    <li>• Enhanced Webby AI Copilot</li>
                    <li>• Priority support</li>
                  </ul>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => window.location.href = '/signin'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card variant="glass" hover className="border-primary-main/30 bg-primary-main/5 relative">
                <CardHeader>
                  <motion.span
                    role="status"
                    aria-label="Most popular plan"
                    className="absolute -top-6 left-1/2 -translate-x-1/2 z-10"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
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
                  <CardTitle className="flex items-center space-x-2">
                    <Rocket className="w-5 h-5 text-primary-main" />
                    <span>Builder</span>
                  </CardTitle>
                  <CardDescription>Indie SaaS teams</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-3xl font-bold mb-6">$49<span className="text-lg font-normal text-text-muted">/mo</span></p>
                  <ul className="text-left text-text-muted space-y-3 mb-6">
                    <li>• 25,000 credits</li>
                    <li>• 3 seats included</li>
                    <li>• Unlimited Webby AI Copilot</li>
                    <li>• Dedicated support</li>
                  </ul>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => window.location.href = '/signin'}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>

              <Card variant="glass" hover>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Crown className="w-5 h-5 text-primary-main" />
                    <span>Growth</span>
                  </CardTitle>
                  <CardDescription>Agencies & high-volume ops</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold mb-6">Custom</p>
                  <ul className="text-left text-text-muted space-y-3 mb-6">
                    <li>• Unlimited credits</li>
                    <li>• Unlimited seats</li>
                    <li>• Unlimited Webby AI Copilot</li>
                    <li>• White-glove onboarding</li>
                  </ul>
                  <Button 
                    variant="primary" 
                    className="w-full"
                    onClick={() => window.location.href = '/signin'}
                  >
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 p-6 bg-background-card/30 rounded-2xl border border-border-primary">
              <h3 className="text-lg font-semibold mb-4">Need more credits?</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="text-center p-4 bg-background-glass rounded-xl">
                  <p className="text-2xl font-bold">$25</p>
                  <p className="text-sm text-text-muted">10,000 credits</p>
                  <p className="text-xs text-text-muted">One-time purchase</p>
                </div>
                <div className="text-center p-4 bg-primary-main/10 rounded-xl border border-primary-main/20">
                  <span className="bg-primary-main text-white px-2 py-1 rounded text-xs font-medium mb-2 inline-block">Best Value</span>
                  <p className="text-2xl font-bold">$10</p>
                  <p className="text-sm text-text-muted">3,000 credits</p>
                  <p className="text-xs text-text-muted">One-time purchase</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Join Our Community</h3>
              <p className="text-sm text-gray-400">
                Connect with builders, get support, and stay updated on the latest features
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <SocialLinks size="md" className="justify-center" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}