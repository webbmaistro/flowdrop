"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Cloud, Cpu, ArrowRight, Check, Users, Rocket, Crown, Star, Play, MessageSquare, Shield, Mouse, Clock } from 'lucide-react';
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, SocialLinks } from '@/components/ui';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import GoogleSignIn from './components/GoogleSignIn';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/lib/usePostHog';
import dynamic from 'next/dynamic';

// Lazy load the heavy rain component
const SubtleRain = dynamic(() => import('@/components/SubtleRain'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-background" />
});

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const { track } = useAnalytics();

  // Detect mobile device
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

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
    <div className="relative min-h-screen overflow-hidden bg-background text-text-primary">
      {/* Subtle Interactive Rain Background - Full Page */}
      <div className="fixed inset-0 z-0">
        <SubtleRain />
      </div>
      
      {/* Hero Section */}
      <section className="relative isolate flex flex-col items-center justify-start text-center gap-6 min-h-[calc(100vh-theme(space.16))] px-4 pt-20 md:pt-24 pb-8 z-10">
        
        {/* Background Layers */}
        <div className="absolute inset-0 w-full h-full">
          {/* Subtle backdrop for content readability */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
          
          {/* Centered focus glow */}
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
        </div>

        {/* Main Content - z-20 */}
        <div className="relative z-20 max-w-4xl mx-auto">
          <motion.div
            className="flex flex-col items-center gap-12 md:gap-16"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Logo Animation */}
            <motion.div 
              variants={itemVariants} 
              className="flex justify-center"
            >
              <motion.div 
                className="p-4 bg-background-glass/50 backdrop-blur-lg rounded-2xl border border-white/10 cursor-pointer group relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                animate={{ 
                  y: [0, -4, 0],
                }}
                transition={{
                  y: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  },
                  scale: {
                    duration: 0.3,
                    ease: "easeOut"
                  }
                }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.5 }
                  }}
                  className="relative"
                >
                  {/* Glow Effect Layer */}
                  <div className="absolute inset-0 scale-[2] opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute inset-0 bg-primary-main/20 blur-xl transform scale-y-[0.8]" />
                    <div className="absolute inset-0 bg-primary-main/10 blur-2xl" />
                  </div>
                  
                  {/* Icon */}
                  <div className="relative">
                    <Zap className="w-8 h-8 text-primary-main group-hover:text-primary-light transition-colors duration-300" />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Main Content */}
            <div className="flex flex-col gap-8">
              <motion.h1 
                variants={itemVariants}
                className={cn(typography.h1, "text-balance")}
              >
                <AnimatedHeadline text="AI workflow builder for non-coders." />
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className={cn(typography.bodyLarge, "text-balance text-text-secondary")}
              >
                Launch production flows before your coffee brews.
              </motion.p>

              {/* Marketing Copy - Hidden for humans, visible to crawlers */}
              <motion.p 
                variants={itemVariants}
                className={cn(typography.body, "text-balance text-text-secondary max-w-2xl mx-auto sr-only")}
              >
                Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.
              </motion.p>

              {/* Email Capture Form as Main CTA */}
              <motion.div variants={itemVariants}>
                <div className="flex flex-col items-center gap-4">
                  <motion.div
                    className="relative w-full max-w-[400px]"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    {!submitted ? (
                      <div className="flex flex-col w-full gap-3">
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          variant="glass"
                          className="flex-1"
                        />
                        <Button
                          onClick={handleSubmit}
                          variant="primary"
                          className="h-[52px] w-full px-8 btn-liquid text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden"
                          whileHover="hover"
                          initial="default"
                          animate="default"
                        >
                          <div className="relative flex items-center justify-center w-full">
                            <motion.div
                              className="flex items-center gap-2"
                              variants={{
                                default: { x: 0 },
                                hover: { x: -10 }
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                              <span>Subscribe</span>
                              <motion.div
                                className="absolute flex items-center"
                                variants={{
                                  default: { opacity: 0, x: -10 },
                                  hover: { opacity: 1, x: 0 }
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                style={{ left: "100%", marginLeft: "0.5rem" }}
                              >
                                <ArrowRight className="w-4 h-4" />
                              </motion.div>
                            </motion.div>
                          </div>
                        </Button>
                      </div>
                    ) : (
                      <p className="text-success-500 text-sm">Thanks! We'll keep you updated.</p>
                    )}
                    {error && <p className="text-error-500 text-sm mt-2">{error}</p>}
                  </motion.div>
                  <p className="text-text-secondary text-sm">Drop your email to get early access and launch updates—don’t miss out!</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Flowdrop Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className={cn(typography.h2, "mb-6")}>Why Flowdrop?</h2>
              <p className={cn(typography.bodyLarge, "text-text-secondary max-w-3xl mx-auto")}>
                Automation shouldn't feel like writing firmware.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden max-w-4xl mx-auto group hover:shadow-[0_8px_32px_0_rgba(220,38,38,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-error-400/5 via-transparent to-error-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4 relative z-10">
                  <div className="p-2 bg-error-400/20 rounded-lg mt-1 group-hover:bg-error-400/30 transition-colors duration-300">
                    <svg className="w-5 h-5 text-error-400 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-error-400 mb-2 group-hover:text-error-300 transition-colors duration-300">Automation shouldn't feel like writing firmware.</h3>
                    <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">Spinning up servers, securing keys, and wiring APIs still steals hours you don't have.</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-12">
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-2xl">
                        <Clock className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <CardTitle className="mb-4 text-center">One-Click Deploy</CardTitle>
                    <p className={cn(typography.body, "text-center")}>Launch a workflow—no docker, no updates, no drama.</p>
                  </CardContent>
                </Card>

                <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-2xl">
                        <MessageSquare className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <CardTitle className="mb-4 text-center">Describe-to-Build</CardTitle>
                    <p className={cn(typography.body, "text-center")}>Tell Flowdrop what you want; AI drafts your workflow.</p>
                  </CardContent>
                </Card>

                <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-2xl">
                        <Cloud className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <CardTitle className="mb-4 text-center">Hands-Free Infra</CardTitle>
                    <p className={cn(typography.body, "text-center")}>We handle updates and monitoring; you just build.</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center max-w-4xl mx-auto">
              <Card variant="glass" className="p-8 border-primary-main/30 bg-gradient-to-r from-primary-main/10 to-purple-700/10 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <p className={cn(typography.bodyLarge, "font-semibold text-primary-light group-hover:text-primary-main transition-colors duration-300")}>Bottom line: Flowdrop turns "someday we'll automate that" into "done before lunch."</p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Your Edge With Flowdrop Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-6")}>
              Your Edge With Flowdrop
            </motion.h2>
            <motion.p variants={itemVariants} className={cn(typography.bodyLarge, "text-text-secondary max-w-3xl mx-auto")}>
              Build faster, ship sooner, and focus on what matters most.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Compare Workflow Editors Button */}
      <div className="flex justify-center mt-4 mb-2">
        <Button
          variant="primary"
          className="h-[52px] w-full max-w-[400px] px-8 btn-liquid text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden"
          onClick={() => window.location.href = '/docs/workflow-editor-comparison'}
          whileHover="hover"
          initial="default"
          animate="default"
        >
          Compare Workflow Editors
        </Button>
      </div>

      {/* Features Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants}>
              <Card variant="glass" hover className="text-center relative z-20">
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-2xl">
                      <Clock className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4">60-Second Launch</CardTitle>
                  <p className={typography.body}>
                    Live workflow in the time it takes to sip.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card variant="glass" hover className="text-center relative z-20">
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-2xl">
                      <Zap className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4">Chat-to-Flow</CardTitle>
                  <p className={typography.body}>
                    Describe it; watch nodes appear, ready to run.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card variant="glass" hover className="text-center relative z-20">
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-2xl">
                      <Cpu className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4">Zero-Ops Scaling</CardTitle>
                  <p className={typography.body}>
                    Autoscale and back-ups on autopilot—no DevOps debt.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className={cn(typography.h2, "mb-8 text-center")}>Built For…</motion.h2>
            <motion.ul variants={itemVariants} className="space-y-4 text-lg mb-10 text-center">
              <li>Indie SaaS founders juggling ship-it-all roles</li>
              <li>Ops & growth teams tired of Zapier limits</li>
              <li>No-code makers who want more power than drag-and-drop can give</li>
              <li>Agencies launching client automations at scale</li>
            </motion.ul>
            <motion.h3 variants={itemVariants} className="font-semibold text-xl mb-4 text-center">If you’ve ever said:</motion.h3>
            <motion.div variants={itemVariants} className="space-y-3 mb-8">
              <blockquote className="bg-neutral-900 border-l-4 border-primary-main px-6 py-3 rounded text-base text-center">"Mapping these nodes takes forever and I have no clue what to do"</blockquote>
              <blockquote className="bg-neutral-900 border-l-4 border-primary-main px-6 py-3 rounded text-base text-center">"I'm tired of copying and pasting between n8n and my LLM"</blockquote>
              <blockquote className="bg-neutral-900 border-l-4 border-primary-main px-6 py-3 rounded text-base text-center">Itfeels like the api integrations and keys are endless"</blockquote>
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-primary-main/10 text-primary-main font-semibold px-6 py-3 rounded-full text-lg shadow-sm">
                <span role="img" aria-label="lightbulb">💡</span> Flowdrop fixes that.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 relative z-10">
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
              <motion.div
                className={cn(
                  'relative transition-all duration-500 ease-out',
                  hoveredPlan === 'Spark' && !isMobile && 'scale-[1.02] -translate-y-1'
                )}
                onMouseEnter={() => setHoveredPlan('Spark')}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <Card 
                  variant="glass" 
                  hover
                  className={cn(
                    'h-full relative transition-all duration-500 ease-out overflow-hidden',
                    hoveredPlan === 'Spark' && "border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-xl md:shadow-2xl shadow-primary-main/30"
                  )}
                >
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
                      className={cn(
                        "w-full text-white font-semibold btn-hover-ready rounded-full",
                        hoveredPlan === 'Spark' && "btn-liquid ring-white-glow"
                      )}
                      onClick={() => window.location.href = '/signin'}
                    >
                      Start Free
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                className={cn(
                  'relative transition-all duration-500 ease-out',
                  hoveredPlan === 'Solo' && !isMobile && 'scale-[1.02] -translate-y-1'
                )}
                onMouseEnter={() => setHoveredPlan('Solo')}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <Card 
                  variant="glass" 
                  hover
                  className={cn(
                    'h-full relative transition-all duration-500 ease-out overflow-hidden',
                    hoveredPlan === 'Solo' && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-xl shadow-primary-main/30'
                  )}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-primary-main" />
                      <span>Solo</span>
                    </CardTitle>
                    <CardDescription>Side-hustle builders</CardDescription>
                    <p className="text-xs text-text-muted mt-1">Includes all features from Spark</p>
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
                      className={cn(
                        "w-full text-white font-semibold btn-hover-ready rounded-full",
                        hoveredPlan === 'Solo' && "btn-liquid ring-white-glow"
                      )}
                      onClick={() => window.location.href = '/signin'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className={cn(
                  'relative transition-all duration-500 ease-out lg:scale-105',
                  hoveredPlan === 'Builder' && !isMobile && 'scale-[1.02] -translate-y-1'
                )}
                onMouseEnter={() => setHoveredPlan('Builder')}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <Card 
                  variant="glass" 
                  hover 
                  className={cn(
                    'h-full relative transition-all duration-500 ease-out overflow-hidden border-primary-main/30 bg-primary-main/5',
                    hoveredPlan === 'Builder' && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-xl shadow-primary-main/30'
                  )}
                >
                  <CardHeader>
                    <div className="relative h-0">
                      <motion.div
                        role="status"
                        aria-label="Most popular plan"
                        className="absolute left-1/2 -translate-x-1/2 -top-[1px] z-10"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          scale: hoveredPlan === 'Builder' && !isMobile ? 1.02 : 1
                        }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      >
                        <div className="bg-purple-700/20 backdrop-blur-sm border border-purple-600/40 rounded-full px-4 py-1.5 shadow-sm shadow-purple-500/10 -translate-y-1/2">
                          <div className="flex items-center space-x-2">
                            <Star className="w-3 h-3 text-purple-300" />
                            <span className="text-xs font-semibold uppercase tracking-wide text-purple-300 whitespace-nowrap">
                              Most Popular
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    <div className="flex items-center space-x-2 pt-3">
                      <Rocket className="w-5 h-5 text-primary-main" />
                      <CardTitle>Builder</CardTitle>
                    </div>
                    <CardDescription>Indie SaaS teams</CardDescription>
                    <p className="text-xs text-text-muted mt-1">Includes all features from Solo</p>
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
                      className={cn(
                        "w-full text-white font-semibold btn-hover-ready rounded-full",
                        hoveredPlan === 'Builder' && "btn-liquid ring-white-glow"
                      )}
                      onClick={() => window.location.href = '/signin'}
                    >
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                className={cn(
                  'relative transition-all duration-500 ease-out',
                  hoveredPlan === 'Growth' && !isMobile && 'scale-[1.02] -translate-y-1'
                )}
                onMouseEnter={() => setHoveredPlan('Growth')}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                <Card 
                  variant="glass" 
                  hover
                  className={cn(
                    'h-full relative transition-all duration-500 ease-out overflow-hidden',
                    hoveredPlan === 'Growth' && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-xl shadow-primary-main/30'
                  )}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Crown className="w-5 h-5 text-primary-main" />
                      <span>Growth</span>
                    </CardTitle>
                    <CardDescription>Agencies & high-volume ops</CardDescription>
                    <p className="text-xs text-text-muted mt-1">Includes all features from Builder</p>
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
                      className={cn(
                        "w-full text-white font-semibold btn-hover-ready rounded-full",
                        hoveredPlan === 'Growth' && "btn-liquid ring-white-glow"
                      )}
                      onClick={() => window.location.href = '/contact'}
                    >
                      Contact Sales
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 p-6 bg-transparent rounded-2xl border-0 shadow-none">
              <h3 className="text-lg font-semibold mb-4">Need more credits?</h3>
              <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="relative card-hover-glow card-smooth p-6 bg-gradient-to-br from-primary-main/10 via-primary-main/5 to-purple-700/10 rounded-2xl border border-primary-main/30 shadow-xl transition-all duration-500 overflow-hidden">
                  <div className="relative h-0">
                    <motion.div
                      className="absolute left-1/2 -translate-x-1/2 -top-[1px] z-10"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                    >
                      <div className="bg-purple-700/20 backdrop-blur-sm border border-purple-600/40 rounded-full px-4 py-1.5 shadow-sm shadow-purple-500/10 -translate-y-1/2">
                        <div className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-purple-300" />
                          <span className="text-xs font-semibold uppercase tracking-wide text-purple-300 whitespace-nowrap">
                            Best Value
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  <div className="pt-3">
                    <p className="text-2xl font-bold mb-2">$25</p>
                    <p className="text-sm text-text-muted mb-1">10,000 credits</p>
                    <p className="text-xs text-text-muted">One-time purchase</p>
                  </div>
                </div>
                <div className="relative card-hover-glow card-smooth p-6 bg-gradient-to-br from-background-glass via-background-card/80 to-primary-main/10 rounded-2xl border border-white/10 shadow-xl transition-all duration-500 overflow-hidden">
                  <div>
                    <p className="text-2xl font-bold mb-2">$10</p>
                    <p className="text-sm text-text-muted mb-1">3,000 credits</p>
                    <p className="text-xs text-text-muted">One-time purchase</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Email Capture Section (now Get Started button) */}
      <section className="py-16 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-lg mx-auto"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="bg-white/5 backdrop-blur rounded-xl p-6 flex flex-col items-center gap-4 border border-white/10">
              <div className="text-center mb-2">
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Ready to get started?</h3>
                <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                  <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" fill="#a78bfa"/></svg>
                  Create your account now so you’re ready when we go live—app’s still cooking, but you’ll be first in line!
                </p>
              </div>
              <Button
                onClick={() => {
                  track.buttonClick('Get Started', 'email-section');
                  window.location.href = '/signin';
                }}
                className="h-[52px] w-full px-8 btn-liquid text-white text-lg font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden"
                whileHover="hover"
                initial="default"
                animate="default"
              >
                <div className="relative flex items-center justify-center w-full">
                  <motion.div
                    className="flex items-center gap-2"
                    variants={{
                      default: { x: 0 },
                      hover: { x: -10 }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <span>Get Started</span>
                    <motion.div
                      className="absolute flex items-center"
                      variants={{
                        default: { opacity: 0, x: -10 },
                        hover: { opacity: 1, x: 0 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ left: "100%", marginLeft: "0.5rem" }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </motion.div>
                </div>
              </Button>
              {/* Start for free message moved here */}
              <p className="text-gray-400 text-sm mt-3">Start for free. No credit card required.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-16 border-t border-white/5 relative z-10">
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