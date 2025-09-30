"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { CTAButton, Button } from '@/components/ui';
import { useAnalytics } from '@/lib/usePostHog';

interface FinalCTASectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  eventName?: string;
  eventContext?: string;
}

export default function FinalCTASection({
  title = 'Ready to get started?',
  subtitle = "We're live. Build and ship automations in minutes.",
  ctaText = 'Start Building',
  ctaHref = 'https://app.flowdrop.xyz/',
  eventName = 'Get Started',
  eventContext = 'email-section'
}: FinalCTASectionProps) {
  const { track } = useAnalytics();
  const [isCompareHovered, setIsCompareHovered] = useState(false);
  const [isStartHovered, setIsStartHovered] = useState(false);

  return (
    <section className="py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 flex flex-col items-center gap-4 border border-white/10">
            <div className="text-center mb-2">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{title}</h3>
              <p className="text-sm text-gray-400 text-center">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-col gap-3 w-full max-w-sm">
              <motion.button
                onClick={() => {
                  track.buttonClick('Compare Plans', eventContext);
                  window.location.href = '/pricing';
                }}
                className="h-[56px] w-full px-8 text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden btn-liquid"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onHoverStart={() => setIsCompareHovered(true)}
                onHoverEnd={() => setIsCompareHovered(false)}
              >
                <div className="relative flex items-center justify-center w-full">
                  <motion.div
                    className="flex items-center gap-2"
                    variants={{
                      default: { x: 0 },
                      hover: { x: -10 }
                    }}
                    initial="default"
                    animate={isCompareHovered ? "hover" : "default"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <span>Compare Plans</span>
                    <motion.div
                      className="absolute flex items-center"
                      variants={{
                        default: { opacity: 0, x: -10 },
                        hover: { opacity: 1, x: 0 }
                      }}
                      animate={isCompareHovered ? "hover" : "default"}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ left: "100%", marginLeft: "0.5rem" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.button>
              <motion.button
                onClick={() => {
                  track.buttonClick(eventName, eventContext);
                  window.location.href = ctaHref;
                }}
                className="h-[56px] w-full px-8 text-gray-300 hover:text-white font-semibold rounded-full border border-white/20 group relative overflow-hidden btn-liquid-hover transition-all duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onHoverStart={() => setIsStartHovered(true)}
                onHoverEnd={() => setIsStartHovered(false)}
              >
                <div className="relative flex items-center justify-center w-full">
                  <motion.div
                    className="flex items-center gap-2"
                    variants={{
                      default: { x: 0 },
                      hover: { x: -10 }
                    }}
                    initial="default"
                    animate={isStartHovered ? "hover" : "default"}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <span>{ctaText}</span>
                    <motion.div
                      className="absolute flex items-center"
                      variants={{
                        default: { opacity: 0, x: -10 },
                        hover: { opacity: 1, x: 0 }
                      }}
                      animate={isStartHovered ? "hover" : "default"}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      style={{ left: "100%", marginLeft: "0.5rem" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                </div>
              </motion.button>
            </div>
            <p className="text-gray-400 text-sm mt-3">Start for free. No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


