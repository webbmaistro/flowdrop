"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { CTAButton } from '@/components/ui';
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

  return (
    <section className="py-16 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6">
        <div className="max-w-lg mx-auto">
          <div className="bg-white/5 backdrop-blur rounded-xl p-6 flex flex-col items-center gap-4 border border-white/10">
            <div className="text-center mb-2">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">{title}</h3>
              <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14.5A6.5 6.5 0 1110 3.5a6.5 6.5 0 010 13z" fill="#a78bfa"/></svg>
                {subtitle}
              </p>
            </div>
            <CTAButton
              onClick={() => {
                track.buttonClick(eventName, eventContext);
                window.location.href = ctaHref;
              }}
              className="text-lg font-semibold"
            >
              {ctaText}
            </CTAButton>
            <p className="text-gray-400 text-sm mt-3">Start for free. No credit card required.</p>
          </div>
        </div>
      </div>
    </section>
  );
}


