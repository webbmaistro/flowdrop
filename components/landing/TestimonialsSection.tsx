"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, SectionHeader, Section } from '@/components/ui';
import { testimonials } from '@/content/landing.config';

export default function TestimonialsSection() {
  return (
    <Section borderedTop>
      <AnimatedSection className="max-w-4xl mx-auto">
          <SectionHeader
            title="What Our Users Say"
            subtitle="Real feedback from builders who are already cranking with Flowdrop"
            align="center"
            level="h2"
            className="max-w-4xl mx-auto"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.6, delay: 0.1 * (idx + 1), ease: 'easeOut' }}
              >
                <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-700/40 backdrop-blur-sm border border-white/10 rounded-4xl p-6 relative group hover:border-primary-main/30 hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500">
                  <div className="relative z-10">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-sm btn-liquid">
                        {t.initials}
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-white mb-1">{t.name}</div>
                        <div className="text-xs text-gray-400">{t.role}</div>
                      </div>
                    </div>
                    <blockquote className="text-gray-300 leading-relaxed">“{t.quote}”</blockquote>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
    </Section>
  );
}


