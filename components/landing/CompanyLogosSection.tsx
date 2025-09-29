"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimatedSection, SectionHeader, Section } from '@/components/ui';
import { hoverTransforms } from '@/lib/motion';
import { companyLogos } from '@/content/landing.config';

export default function CompanyLogosSection() {
  return (
    <Section borderedTop>
      <AnimatedSection className="max-w-5xl mx-auto">
          <SectionHeader
            title="Built by Industry Veterans"
            subtitle="Our team brings decades of experience from the world's most respected companies"
            align="center"
            level="h2"
            className="max-w-4xl mx-auto mb-16"
          />

          <div className="grid grid-cols-3 gap-10 mb-12 max-w-3xl mx-auto">
            {companyLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center group"
                whileHover={hoverTransforms.tile.whileHover}
                transition={hoverTransforms.tile.transition}
              >
                <motion.div className="w-20 h-20 bg-gradient-to-br from-white/20 via-white/15 to-white/25 backdrop-blur-sm border border-white/20 rounded-full p-5 flex items-center justify-center group-hover:border-white/30 group-hover:shadow-[0_12px_40px_0_rgba(255,255,255,0.15)] group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.3)] transition-all duration-500 mb-4"
                  whileHover={hoverTransforms.icon.whileHover}
                  transition={hoverTransforms.icon.transition}
                >
                  <Image src={logo.src} alt={logo.alt} width={40} height={40} />
                </motion.div>
                <span className="text-sm font-medium text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{logo.alt}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
    </Section>
  );
}


