"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, SectionHeader, Section } from '@/components/ui';
import Pill from '@/components/ui/Pill';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { audiences, painPoints } from '@/content/landing.config';

export default function AudienceSection() {
  return (
    <Section>
      <AnimatedSection className="max-w-5xl mx-auto">
          <SectionHeader title="Who's Already Cranking With Flowdrop" align="center" level="h2" />

          <ul className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto text-xl font-semibold mb-12">
            {audiences.map((a, i) => (
              <motion.li
                key={i}
                className="text-left"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <Pill fullWidth align="start" variant="neutral" size="lg">{a.label}</Pill>
              </motion.li>
            ))}
          </ul>

          <div className="space-y-4 mb-10 max-w-3xl mx-auto">
            {painPoints.map((p, i) => (
              <motion.div
                key={i}
                className="text-center"
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                {i === 0 && (
                  <Pill fullWidth size="lg" variant="primary">Mapping workflows takes too long</Pill>
                )}
                {i === 1 && (
                  <Pill fullWidth size="lg" variant="primary">I’m tired of copying between tools</Pill>
                )}
                {i === 2 && (
                  <Pill fullWidth size="lg" variant="primary">API keys and setup are endless</Pill>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <span className="inline-flex items-center gap-2 bg-primary-main/10 text-primary-main font-semibold px-6 py-3 rounded-full text-lg shadow-sm">
              <span role="img" aria-label="lightbulb">💡</span> Flowdrop fixes that.
            </span>
          </div>
      </AnimatedSection>
    </Section>
  );
}


