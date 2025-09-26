"use client"

import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cloud, Cpu, ArrowRight, Check, Users, Rocket, Crown, Star, Play, MessageSquare, Shield, Mouse, Clock, Activity, Code, Bell, FileText, Zap } from 'lucide-react';
import { Button, Input, Card, CardHeader, CardTitle, CardDescription, CardContent, SocialLinks, SlidingBanner } from '@/components/ui';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import GoogleSignIn from './components/GoogleSignIn';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/lib/usePostHog';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Lazy load the heavy rain component
const SubtleRain = dynamic(() => import('@/components/SubtleRain'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-background" />
});

// Scroll-triggered animation component
type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
};

function AnimatedSection({ children, className = "", delay = 0, direction }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });

  let initial, animate;
  if (direction === 'left') {
    initial = { opacity: 0, x: -60 };
    animate = isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 };
  } else if (direction === 'right') {
    initial = { opacity: 0, x: 60 };
    animate = isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 };
  } else {
    initial = { opacity: 0, y: 40 };
    animate = isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 };
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}

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

  // Track scroll progress for scroll-driven animations
  const galleryRef = useRef<HTMLElement>(null);
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  // Track scroll progress for scroll-driven animations
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        const sectionHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (sectionHeight - rect.top) / sectionHeight));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.7
      }
    }
  };

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.9
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen h-full overflow-hidden bg-background text-text-primary" style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
      {/* Subtle Interactive Rain Background - Full Page */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <SubtleRain />
      </div>
      
      {/* Hero Section */}
      <section className="relative isolate flex flex-col items-center justify-center text-center gap-6 min-h-screen px-4 pt-6 pb-8 md:pt-10 md:pb-8 z-10 snap-start">
        
        {/* Background Layers */}
        <div className="absolute inset-0 w-full h-full">
          {/* Subtle backdrop for content readability */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
          
          {/* Centered focus glow */}
          <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
        </div>

        {/* Main Content - z-20 */}
        <div className="relative z-20 w-full max-w-4xl mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center gap-8 md:gap-16 w-full"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            
            {/* Main Content */}
            <div className="flex flex-col items-center text-center gap-6 md:gap-8 w-full max-w-3xl mx-auto">
              <motion.h1 
                variants={itemVariants}
                className={cn(typography.h1, "text-balance text-center")}
              >
                <AnimatedHeadline text="Automation shouldn't feel like another job." />
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-2xl text-text-secondary text-balance text-center"
              >
                What if it felt... <em className="text-primary-main font-medium">effortless?</em>
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
                <div className="flex flex-col items-center gap-4 w-full">
                  <div className="relative w-full max-w-[400px]">
                    {!submitted ? (
                      <div className="flex flex-col w-full gap-3">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            variant="glass"
                            className="flex-1"
                          />
                        </motion.div>
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.2 }}
                        >
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
                              <span>Gain Early Access</span>
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
                        </motion.div>
                      </div>
                    ) : (
                      <p className="text-success-500 text-sm">Thanks! We'll keep you updated.</p>
                    )}
                    {error && <p className="text-error-500 text-sm mt-2">{error}</p>}
                  </div>
                  <p className="text-text-secondary text-sm">Drop your email to get early access and launch updates—don't miss out!</p>
                </div>
              </motion.div>

              {/* Sliding Banner */}
              <motion.div 
                variants={itemVariants}
                className="w-screen mt-8 -mx-4 md:-mx-6 lg:-mx-8"
              >
                <SlidingBanner 
                  speed={15}
                  direction="left"
                  pauseOnHover={true}
                  className="py-4"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Flowdrop Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={cn(typography.h2, "mb-6")}>Why Flowdrop?</h2>
            </div>

            <div className="mb-12">
              <Card variant="glass" hover className="px-8 py-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden max-w-2xl mx-auto group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <div className="text-center relative z-10">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-main group-hover:text-primary-light transition-colors duration-300">So simple you'll actually enjoy automating.</h3>
                </div>
              </Card>
            </div>

            <div className="mb-12">
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <FileText className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                    <CardTitle className="mb-4 text-center">Document Magic</CardTitle>
                    <p className={cn(typography.body, "text-center")}>Transform PDFs, Sheets, Docs, and Drive—the whole Google Suite at your fingertips.</p>
                </CardContent>
              </Card>

                <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <MessageSquare className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                    <CardTitle className="mb-4 text-center">Chat to Build</CardTitle>
                    <p className={cn(typography.body, "text-center")}>Create workflows from scratch or upgrade existing ones as simple as talking with a friend.</p>
                </CardContent>
              </Card>

                <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                      <Zap className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                    <CardTitle className="mb-4 text-center">Content Factory</CardTitle>
                    <p className={cn(typography.body, "text-center")}>Social media posts that slap on demand. Audience on autopilot.</p>
                </CardContent>
              </Card>
              </div>
            </div>

            <div className="text-center max-w-4xl mx-auto">
              <Card variant="glass" className="p-8 border-primary-main/30 bg-gradient-to-r from-primary-main/10 to-purple-700/10 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
                <div className="relative z-10">
                  <p className={cn(typography.bodyLarge, "font-semibold text-primary-light group-hover:text-primary-main transition-colors duration-300")}>Bottom line: Flowdrop turns "someday we'll automate that" into "done before lunch."</p>
                </div>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Your Edge With Flowdrop - Clean Real Screenshots Section */}
      <section 
        ref={galleryRef} 
        className="py-12 lg:py-20 relative z-10 overflow-hidden" 
      >
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className={cn(typography.h2, "mb-6")}>
              Your Edge With Flowdrop
            </h2>
            <p className={cn(typography.bodyLarge, "text-text-secondary max-w-3xl mx-auto")}>
              Build faster, ship sooner, and focus on what matters most.
            </p>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Column - Main Workflow Editor */}
              <motion.div
                initial={{ x: -400, rotateY: -15 }}
                animate={{ 
                  x: scrollProgress > 0.1 ? 0 : -400, 
                  rotateY: scrollProgress > 0.1 ? 0 : -15 
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Browser Window */}
                <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-neutral-800/50 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-neutral-700/50 rounded-lg px-3 py-1 text-sm text-gray-400 text-center">
                      flowdrop.xyz/builder
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  <div className="relative">
                    <Image 
                      src="/screenshots/webfloweditor.png" 
                      alt="Flowdrop Visual Workflow Builder - Drag and drop interface for creating AI-powered automation workflows"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-b-xl"
                      priority
                    />
                    {/* Feature Badge */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-main/20 backdrop-blur-sm border border-primary-main/30 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary-main rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-primary-main">Visual Builder</span>
                      </div>
                    </div>
                  </div>
                </div>
                

              </motion.div>

              {/* Right Column - AI Generation Screen */}
              <motion.div
                initial={{ x: 400, rotateY: 15 }}
                animate={{ 
                  x: scrollProgress > 0.2 ? 0 : 400, 
                  rotateY: scrollProgress > 0.2 ? 0 : 15 
                }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative"
              >
                {/* Browser Window */}
                <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl overflow-hidden">
                  {/* Browser Header */}
                  <div className="bg-neutral-800/50 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-neutral-700/50 rounded-lg px-3 py-1 text-sm text-gray-400 text-center">
                      flowdrop.xyz/ai-generator
                    </div>
                  </div>
                  
                  {/* Screenshot */}
                  <div className="relative">
                    <Image 
                      src="/screenshots/generatewebflowscreen.png" 
                      alt="Flowdrop AI Workflow Generation - AI-powered interface for creating workflows through natural language descriptions"
                      width={800}
                      height={600}
                      className="w-full h-auto rounded-b-xl"
                      priority
                    />
                    {/* Feature Badge */}
                    <div className="absolute top-6 left-6 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-sm font-semibold text-purple-400">AI Workflow Generation</span>
                      </div>
                    </div>
                  </div>
                </div>
                

              </motion.div>
            </div>
          </div>
              
          {/* Strategic Floating Components */}
          
          {/* Performance Monitor */}
          <motion.div
            initial={{ x: 200, y: 200, scale: 0.8, opacity: 0 }}
            animate={{ 
              x: scrollProgress > 0.6 ? 0 : 200, 
              y: scrollProgress > 0.6 ? 0 : 200, 
              scale: scrollProgress > 0.6 ? 1 : 0.8, 
              opacity: scrollProgress > 0.6 ? 1 : 0 
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-32 left-1/2 transform -translate-x-1/2 translate-y-[100px] translate-x-[50px] z-30 hidden lg:block"
          >
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-4 shadow-2xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-green-400">Live Dashboard</div>
                  <div className="text-xs text-gray-400">Monitor Execution Numbers</div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Total Executions</span>
                  <span className="text-green-400">1.2M</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Active Workflows</span>
                  <span className="text-green-400">847</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Node Editor Card */}
          <motion.div
            initial={{ x: 200, y: 200, scale: 0.8, opacity: 0 }}
            animate={{ 
              x: scrollProgress > 0.7 ? 0 : 200, 
              y: scrollProgress > 0.7 ? 0 : 200, 
              scale: scrollProgress > 0.7 ? 1 : 0.8, 
              opacity: scrollProgress > 0.7 ? 1 : 0 
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute bottom-32 right-8 z-30 hidden lg:block"
          >
            <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-neutral-800/50 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-neutral-700/50 rounded-lg px-3 py-1 text-sm text-gray-400 text-center">
                  flowdrop.xyz/node-editor
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/screenshots/nodeeditor.png" 
                  alt="Flowdrop Node Editor"
                  width={300}
                  height={128}
                  className="w-full h-32 object-cover rounded-b-lg"
                />
                <div className="absolute bottom-2 left-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg px-2 py-1">
                  <span className="text-xs font-semibold text-orange-400">AI node editing</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Team Collaboration */}
          <motion.div
            initial={{ x: -300, y: -50, scale: 0.8, opacity: 0 }}
            animate={{ 
              x: scrollProgress > 0.8 ? 0 : -300, 
              y: scrollProgress > 0.8 ? 0 : -50, 
              scale: scrollProgress > 0.8 ? 1 : 0.8, 
              opacity: scrollProgress > 0.8 ? 1 : 0 
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-1/2 left-8 transform -translate-y-1/2 translate-y-[-200px] z-30 hidden lg:block"
          >
            <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl overflow-hidden">
              <div className="bg-neutral-800/50 border-b border-white/10 px-3 py-2 flex items-center gap-2">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex-1 bg-neutral-700/50 rounded px-2 py-1 text-xs text-gray-400 text-center">
                  flowdrop.xyz/build-with-chat
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/screenshots/buildwithchatfeature.png" 
                  alt="Flowdrop Build with Chat"
                  width={250}
                  height={300}
                  className="w-full h-auto object-contain"
                />
                <div className="absolute bottom-2 left-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg px-2 py-1">
                  <span className="text-xs font-semibold text-purple-400">build with chat</span>
                </div>
              </div>
            </div>
          </motion.div>



          {/* Advanced Editor Card */}
          <motion.div
            initial={{ x: 200, y: -200, scale: 0.8, opacity: 0 }}
            animate={{ 
              x: scrollProgress > 0.5 ? 0 : 200, 
              y: scrollProgress > 0.5 ? 0 : -200, 
              scale: scrollProgress > 0.5 ? 1 : 0.8, 
              opacity: scrollProgress > 0.5 ? 1 : 0 
            }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute top-16 right-16 z-30 hidden lg:block"
          >
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-4 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <Code className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-blue-400">Advanced AI-powered nodes</div>
                </div>
              </div>
              <div className="relative">
                <Image 
                  src="/screenshots/webfloweditor2.png" 
                  alt="Flowdrop Advanced Editor"
                  width={200}
                  height={80}
                  className="w-full h-20 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent rounded-lg"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Mobile Layout - Story-Driven Experience */}
      <section className="lg:hidden py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="space-y-16">
            
            {/* Mobile Story 1: Visual Builder */}
            <AnimatedSection className="text-center" direction="left">
              <div className="mb-8">
                <h3 className={cn(typography.h3, "mb-4")}>Visual Workflow Builder</h3>
                <p className={cn(typography.body, "text-text-secondary")}>
                  Drag, drop, and connect. Build complex workflows with intuitive visual tools.
                </p>
              </div>
              <motion.div 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: true, margin: "-100px" }}
                className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto"
              >
                <div className="bg-neutral-800/50 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-neutral-700/50 rounded-lg px-3 py-1 text-sm text-gray-400 text-center">
                    flowdrop.xyz/builder
                  </div>
                </div>
                <div className="relative">
                  <Image 
                    src="/screenshots/webfloweditor.png" 
                    alt="Flowdrop Visual Workflow Builder"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-b-xl"
                    priority
                  />
                  <div className="absolute top-4 left-4 bg-primary-main/20 backdrop-blur-sm border border-primary-main/30 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary-main rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-primary-main">Visual Builder</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Mobile Story 2: AI Workflow Generation */}
            <AnimatedSection className="text-center" direction="right">
              <div className="mb-8">
                <h3 className={cn(typography.h3, "mb-4")}>AI-Powered Generation</h3>
                <p className={cn(typography.body, "text-text-secondary")}>
                  Describe your workflow in plain English. Watch AI create it instantly.
                </p>
              </div>
              <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-xl shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="bg-neutral-800/50 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-neutral-700/50 rounded-lg px-3 py-1 text-sm text-gray-400 text-center">
                    flowdrop.xyz/ai-generator
                  </div>
                </div>
                <div className="relative">
                  <Image 
                    src="/screenshots/generatewebflowscreen.png" 
                    alt="Flowdrop AI Workflow Generation"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-b-xl"
                    priority
                  />
                  <div className="absolute top-6 left-6 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-purple-400">AI Workflow Generation</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Story 3: Build with Chat */}
            <AnimatedSection className="text-center" direction="left">
              <div className="mb-8">
                <h3 className={cn(typography.h3, "mb-4")}>Build with Chat</h3>
                <p className={cn(typography.body, "text-text-secondary")}>
                  Natural conversations that create powerful workflows. Like Cursor, but for automation.
                </p>
              </div>
              <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="bg-neutral-800/50 border-b border-white/10 px-3 py-2 flex items-center gap-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-neutral-700/50 rounded px-2 py-1 text-xs text-gray-400 text-center">
                    flowdrop.xyz/build-with-chat
                  </div>
                </div>
                <div className="relative">
                  <Image 
                    src="/screenshots/buildwithchatfeature.png" 
                    alt="Flowdrop Build with Chat"
                    width={250}
                    height={300}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-2 left-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 rounded-lg px-2 py-1">
                    <span className="text-xs font-semibold text-purple-400">build with chat</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Story 4: Node Editor */}
            <AnimatedSection className="text-center" direction="right">
              <div className="mb-8">
                <h3 className={cn(typography.h3, "mb-4")}>Advanced AI Node Editing</h3>
                <p className={cn(typography.body, "text-text-secondary")}>
                  Fine-tune AI nodes with precision. Custom logic for complex workflows.
                </p>
              </div>
              <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl overflow-hidden max-w-md mx-auto">
                <div className="bg-neutral-800/50 border-b border-white/10 px-4 py-3 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-neutral-700/50 rounded-lg px-3 py-1 text-sm text-gray-400 text-center">
                    flowdrop.xyz/node-editor
                  </div>
                </div>
                <div className="relative">
                  <Image 
                    src="/screenshots/nodeeditor.png" 
                    alt="Flowdrop Node Editor"
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-b-lg"
                  />
                  <div className="absolute bottom-2 left-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-lg px-2 py-1">
                    <span className="text-xs font-semibold text-orange-400">AI node editing</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Mobile Story 5: Live Dashboard */}
            <AnimatedSection className="text-center" direction="left">
              <div className="mb-8">
                <h3 className={cn(typography.h3, "mb-4")}>Real-Time Execution Monitoring</h3>
                <p className={cn(typography.body, "text-text-secondary")}>
                  Track performance, monitor workflows, and scale with confidence.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6 shadow-2xl max-w-md mx-auto">
                <div className="flex items-center gap-3 mb-4 justify-center">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <Activity className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-green-400">Live Dashboard</div>
                    <div className="text-sm text-gray-400">Monitor Execution Numbers</div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                    <span className="text-sm text-gray-300">Total Executions</span>
                    <span className="text-lg font-semibold text-green-400">1.2M</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                    <span className="text-sm text-gray-300">Active Workflows</span>
                    <span className="text-lg font-semibold text-green-400">847</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>


      {/* Built For Section */}
      <section className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className={cn(typography.h2, "mb-8 text-center")}>Who's Already Cranking With Flowdrop</h2>
            <ul className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto text-lg font-medium mb-10">
              <motion.li 
                className="px-6 py-3 rounded-full bg-neutral-800/60 backdrop-blur border border-white/5 cursor-pointer transition-all duration-300 hover:bg-neutral-700/60 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10 text-left"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                ⚡ <strong>Side‑Hustlers</strong>
              </motion.li>
              <motion.li 
                className="px-6 py-3 rounded-full bg-neutral-800/60 backdrop-blur border border-white/5 cursor-pointer transition-all duration-300 hover:bg-neutral-700/60 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10 text-left"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                🚀 <strong>Indie SaaS teams</strong>
              </motion.li>
              <motion.li 
                className="px-6 py-3 rounded-full bg-neutral-800/60 backdrop-blur border border-white/5 cursor-pointer transition-all duration-300 hover:bg-neutral-700/60 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10 text-left"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                📈 <strong>Sales & Marketing teams</strong>
              </motion.li>
              <motion.li 
                className="px-6 py-3 rounded-full bg-neutral-800/60 backdrop-blur border border-white/5 cursor-pointer transition-all duration-300 hover:bg-neutral-700/60 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10 text-left"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                🛠️ <strong>Automation agencies</strong>
              </motion.li>
            </ul>
            
            <div className="space-y-3 mb-8">
              <motion.div 
                className="px-6 py-3 rounded-full bg-neutral-800/60 backdrop-blur border border-white/5 cursor-pointer transition-all duration-300 hover:bg-neutral-700/60 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10 text-center"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <strong className="text-primary-main">Mapping</strong> nodes takes forever
              </motion.div>
              <motion.div 
                className="px-6 py-3 rounded-full bg-neutral-800/60 backdrop-blur border border-white/5 cursor-pointer transition-all duration-300 hover:bg-neutral-700/60 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10 text-center"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                Im <strong className="text-primary-main">tired</strong> of <span className="text-primary-main">copying</span> between tools
              </motion.div>
              <motion.div 
                className="px-6 py-3 rounded-full bg-neutral-800/60 backdrop-blur border border-white/5 cursor-pointer transition-all duration-300 hover:bg-neutral-700/60 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10 text-center"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <span className="text-primary-main">API keys</span> are <strong>endless</strong>
              </motion.div>
            </div>
            
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 bg-primary-main/10 text-primary-main font-semibold px-6 py-3 rounded-full text-lg shadow-sm">
                <span role="img" aria-label="lightbulb">💡</span> Flowdrop fixes that.
              </span>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Compare Workflow Editors Section */}
      <section className="py-20 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={cn(typography.h2, "mb-6")}>See Why Flowdrop Beats the Competition</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                While others make you fight their tools, Flowdrop works with you. See the difference that matters.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12 px-4 md:px-0">
              <motion.div 
                className="bg-gradient-to-br from-red-500/10 to-orange-500/10 backdrop-blur border border-red-500/20 rounded-4xl p-6 text-center"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">😤</span>
                </div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">Zapier</h3>
                <p className="text-sm text-gray-400 mb-3">Complex mapping, limited actions, expensive pricing</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>• 5,000+ apps but limited depth</div>
                  <div>• $20/month for basic features</div>
                  <div>• Complex node mapping</div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-primary-main/20 to-purple-500/20 backdrop-blur border border-primary-main/30 rounded-4xl p-6 text-center relative overflow-hidden scale-105"
                whileHover={{ scale: 1.08, y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-main/5 to-purple-500/5 animate-pulse"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-primary-main/20 rounded-full flex items-center justify-center mx-auto mb-5">
                    <span className="text-3xl">⚡</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-main mb-3">Flowdrop</h3>
                  <p className="text-base text-gray-400 mb-4">Simple, powerful, and actually enjoyable to use</p>
                  <div className="space-y-2 text-sm text-primary-main/80">
                    <div>• AI-powered workflow builder</div>
                    <div>• Starts at $9/month for everything</div>
                    <div>• Zero learning curve</div>
                  </div>
                  <div className="h-12"></div>
                </div>
              </motion.div>
              
              <motion.div 
                className="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 backdrop-blur border border-blue-500/20 rounded-4xl p-6 text-center"
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤔</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-400 mb-2">n8n</h3>
                <p className="text-sm text-gray-400 mb-3">Open-source power but requires technical expertise</p>
                <div className="space-y-1 text-xs text-gray-500">
                  <div>• Self-hosted or $24/month cloud</div>
                  <div>• 500+ integrations with JS/Python nodes</div>
                  <div>• Steep learning curve for non-developers</div>
                </div>
              </motion.div>
            </div>
            
            <div className="text-center">
              <motion.div
                className="inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <Button
                  variant="primary"
                  className="h-[56px] px-10 btn-liquid text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden text-lg"
                  onClick={() => window.location.href = '/docs/workflow-editor-comparison'}
                  whileHover={{ scale: 1.06 }}
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
                >
                  <div className="flex items-center gap-3">
                    <span>Compare Workflow Editors</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </div>
                </Button>
              </motion.div>
              <p className="text-sm text-gray-500 mt-4">See the full comparison with real examples</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={cn(typography.h2, "mb-4")}>What Our Users Say</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Real feedback from builders who are already cranking with Flowdrop
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* Testimonial 1 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-700/40 backdrop-blur-sm border border-white/10 rounded-4xl p-6 relative overflow-hidden group hover:border-primary-main/30 hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-primary-main to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        HT
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">Hugh Tang</div>
                        <div className="text-xs text-gray-400">SaaS Founder</div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-300 leading-relaxed">
                      "Love the minimalist design."
                    </blockquote>
                  </div>
                </div>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2,
                  ease: "easeOut"
                }}
              >
                <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-700/40 backdrop-blur-sm border border-white/10 rounded-4xl p-6 relative overflow-hidden group hover:border-primary-main/30 hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500">
                  {/* Background glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                        W
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">Will</div>
                        <div className="text-xs text-gray-400">Agency Founder</div>
                      </div>
                    </div>
                    
                    <blockquote className="text-gray-300 leading-relaxed">
                      "Saw your LinkedIn post and thought it looked great."
                    </blockquote>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Premium Company Background Section */}
      <section className="py-20 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={cn(typography.h2, "mb-6")}>Built by Industry Veterans</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Our team brings decades of experience from the world's most respected companies
              </p>
            </div>
            
            {/* Company Logos Grid */}
            <div className="grid grid-cols-3 gap-10 mb-12 max-w-3xl mx-auto">
              {/* Apple */}
              <motion.div
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1,
                  ease: "easeOut"
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 via-white/15 to-white/25 backdrop-blur-sm border border-white/20 rounded-full p-5 flex items-center justify-center group-hover:border-white/30 group-hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.15)] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all duration-500 mb-4">
                  <Image 
                    src="/logos/apple.svg" 
                    alt="Apple" 
                    width={40} 
                    height={40}
                    className="text-white group-hover:text-gray-200 transition-colors duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Apple</span>
              </motion.div>

              {/* Meta */}
              <motion.div
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2,
                  ease: "easeOut"
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 via-white/15 to-white/25 backdrop-blur-sm border border-white/20 rounded-full p-5 flex items-center justify-center group-hover:border-white/30 group-hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.15)] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all duration-500 mb-4">
                  <Image 
                    src="/logos/meta.svg" 
                    alt="Meta" 
                    width={40} 
                    height={40}
                    className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Meta</span>
              </motion.div>

              {/* Capital One */}
              <motion.div
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  ease: "easeOut"
                }}
              >
                <div className="w-20 h-20 bg-gradient-to-br from-white/20 via-white/15 to-white/25 backdrop-blur-sm border border-white/20 rounded-full p-5 flex items-center justify-center group-hover:border-white/30 group-hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.15)] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all duration-500 mb-4">
                  <Image 
                    src="/logos/capital-one.svg" 
                    alt="Capital One" 
                    width={40} 
                    height={40}
                    className="text-red-400 group-hover:text-red-300 transition-colors duration-300"
                  />
                </div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">Capital One</span>
              </motion.div>
            </div>


          </AnimatedSection>
        </div>
      </section>

      {/* Email Capture Section (now Get Started button) */}
      <section className="py-16 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <AnimatedSection className="max-w-lg mx-auto">
            <div className="bg-white/5 backdrop-blur rounded-xl p-6 flex flex-col items-center gap-4 border border-white/10">
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
            </div>
          </AnimatedSection>
        </div>
      </section>




    </div>
  );
}