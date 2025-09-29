"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '@/lib/motion';
import { CTAButton, SlidingBanner } from '@/components/ui';
import AnimatedHeadline from '@/components/AnimatedHeadline';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/lib/usePostHog';
import { hero as heroContent } from '@/content/landing.config';

export default function HeroSection() {
  const { track } = useAnalytics();

  return (
    <section className="relative isolate flex flex-col items-center justify-center text-center gap-6 min-h-screen px-4 pt-6 pb-8 md:pt-10 md:pb-8 z-10 snap-start">
      {/* Background Layers */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/20 via-black/10 to-transparent" />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.08)_0%,transparent_70%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4">
        <motion.div className="flex flex-col items-center justify-center gap-8 md:gap-16 w-full" initial="hidden" animate="visible" variants={containerVariants}>
          <div className="flex flex-col items-center text-center gap-6 md:gap-8 w-full max-w-3xl mx-auto">
            <motion.h1 variants={itemVariants} className={cn(typography.h1, 'text-balance text-center')}>
              <AnimatedHeadline text={heroContent.headline} />
            </motion.h1>
            <motion.p variants={itemVariants} className="text-lg md:text-2xl text-text-secondary text-balance text-center" dangerouslySetInnerHTML={{ __html: heroContent.subcopy }} />
            <motion.p variants={itemVariants} className={cn(typography.body, 'text-balance text-text-secondary max-w-2xl mx-auto sr-only')}>
              Flowdrop is a no-code, AI-powered workflow builder that deploys production automations in under five minutes.
            </motion.p>
            <motion.div variants={itemVariants}>
              <div className="flex flex-col items-center gap-4 w-full">
                <div className="relative w-full max-w-[400px]">
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <CTAButton
                      onClick={() => {
                        track.buttonClick(heroContent.ctaText, 'hero-section');
                        window.location.href = heroContent.ctaHref;
                      }}
                    >
                      {heroContent.ctaText}
                    </CTAButton>
                  </motion.div>
                </div>
                <p className="text-text-secondary text-sm">Try free — no credit card required</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="w-screen mt-8 -mx-4 md:-mx-6 lg:-mx-8">
              <SlidingBanner duration={15} direction="left" repeat={4} className="py-4" />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background is handled by page-level wrapper */}
    </section>
  );
}


