"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Code } from 'lucide-react';
import { SlidingBanner, CTAButton, BrowserWindowFrame, LabeledScreenshot, SectionHeader } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import FinalCTASection from '@/components/landing/FinalCTASection';
import WhySection from '@/components/landing/WhySection';
import VideoSection from '@/components/landing/VideoSection';
const AudienceSection = dynamic(() => import('@/components/landing/AudienceSection'), { ssr: false });
const ComparisonSection = dynamic(() => import('@/components/landing/ComparisonSection'), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/landing/TestimonialsSection'), { ssr: false });
const CompanyLogosSection = dynamic(() => import('@/components/landing/CompanyLogosSection'), { ssr: false });
import HeroSection from '@/components/landing/HeroSection';
import MobileStoriesSection from '@/components/landing/MobileStoriesSection';

// Lazy load the heavy rain component
const SubtleRain = dynamic(() => import('@/components/SubtleRain'), {
  ssr: false,
  loading: () => <div className="fixed inset-0 z-0 bg-background" />
});

// AnimatedSection now imported from components/ui

export default function LandingPage() {

  return (
    <div className="relative min-h-screen h-full overflow-hidden bg-background text-text-primary" style={{ scrollSnapType: 'y mandatory', scrollBehavior: 'smooth' }}>
      {/* Subtle Interactive Rain Background - Full Page */}
      <div className="fixed inset-0 z-0 w-full h-full">
        <SubtleRain />
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Video Section */}
      <VideoSection 
        videoId="xB7Y4vgSXlo"
        title="See Flowdrop in Action"
        subtitle="Watch how easy it is to build powerful automations"
      />

      {/* Why Flowdrop Section */}
      <WhySection />

      {/* Your Edge With Flowdrop - Clean Real Screenshots Section */}
      <section className="py-12 lg:py-20 relative z-10 overflow-hidden">
        <div className="container mx-auto px-6">
          {/* Header */}
          <SectionHeader
            title="Your Edge With Flowdrop"
            subtitle="Build faster, ship sooner, and focus on what matters most."
            align="center"
            level="h2"
            className="max-w-4xl mx-auto"
            subtitleClassName={cn(typography.bodyLarge, 'text-text-secondary')}
          />

          {/* Desktop Layout */}
          <div className="hidden lg:block max-w-7xl mx-auto relative">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              
              {/* Left Column - Main Workflow Editor */}
              <motion.div 
                initial={{ x: -100, opacity: 0, rotateY: -15 }}
                whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <LabeledScreenshot
                  url="flowdrop.xyz/builder"
                  src="/screenshots/webfloweditor.png"
                  alt="Flowdrop Visual Workflow Builder - Drag and drop interface for creating AI-powered automation workflows"
                  width={800}
                  height={600}
                  className="rounded-xl"
                  imageClassName="rounded-b-xl"
                  label={{
                    text: 'Visual Builder',
                    position: 'center',
                    containerClassName: 'bg-primary-main/20 backdrop-blur-sm border border-primary-main/30 text-primary-main'
                  }}
                />
              </motion.div>

              {/* Right Column - AI Generation Screen */}
              <motion.div 
                initial={{ x: 100, opacity: 0, rotateY: 15 }}
                whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <LabeledScreenshot
                  url="flowdrop.xyz/ai-generator"
                  src="/screenshots/generatewebflowscreen.png"
                  alt="Flowdrop AI Workflow Generation - AI-powered interface for creating workflows through natural language descriptions"
                  width={800}
                  height={600}
                  className="rounded-xl"
                  imageClassName="rounded-b-xl"
                  label={{
                    text: 'AI Workflow Generation',
                    position: 'top-left',
                    containerClassName: 'bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 text-purple-400'
                  }}
                />
              </motion.div>
            </div>
          </div>
              
          {/* Strategic Floating Components */}
          
          {/* Performance Monitor */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true, margin: "-50px" }}
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute bottom-32 right-8 z-30 hidden lg:block"
          >
            <BrowserWindowFrame url="flowdrop.xyz/node-editor" className="rounded-lg">
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
            </BrowserWindowFrame>
          </motion.div>

          {/* Team Collaboration */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="absolute top-1/2 left-8 transform -translate-y-1/2 translate-y-[-200px] z-30 hidden lg:block"
          >
            <BrowserWindowFrame url="flowdrop.xyz/build-with-chat" className="rounded-lg" headerVariant="compact">
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
            </BrowserWindowFrame>
          </motion.div>

          {/* Advanced Editor Card */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            viewport={{ once: true, margin: "-50px" }}
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
      <MobileStoriesSection />


      <AudienceSection />

      <ComparisonSection />

      <TestimonialsSection />

      <CompanyLogosSection />

      <FinalCTASection />




    </div>
  );
}