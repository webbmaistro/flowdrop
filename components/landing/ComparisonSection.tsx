"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, SectionHeader, Section, GradientCard, CtaWithArrow } from '@/components/ui';
import { comparisonItems } from '@/content/landing.config';

export default function ComparisonSection() {
  return (
    <Section borderedTop>
      <AnimatedSection className="max-w-4xl mx-auto">
          <SectionHeader
            title="See Why Flowdrop Beats the Competition"
            subtitle="While others make you fight their tools, Flowdrop works with you. See the difference that matters."
            align="center"
            level="h2"
            className="max-w-4xl mx-auto"
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12 px-4 md:px-0">
            {comparisonItems.map((item, idx) => {
              const colorBase = item.color === 'red' ? 'red' : item.color === 'blue' ? 'blue' : 'primary';
              return (
                <GradientCard
                  key={idx}
                  color={colorBase as any}
                  rounded="4xl"
                  withOverlay={item.highlight}
                  highlight={item.highlight}
                  className="text-center"
                >
                  <div className={`w-12 ${item.highlight ? 'w-14 h-14' : 'h-12'} ${colorBase === 'red' ? 'bg-red-500/20' : colorBase === 'blue' ? 'bg-blue-500/20' : 'bg-primary-main/20'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className={item.highlight ? 'text-3xl' : 'text-2xl'}>{item.emoji}</span>
                  </div>
                  <h3 className={`text-xl md:text-2xl font-semibold ${colorBase === 'red' ? 'text-red-400' : colorBase === 'blue' ? 'text-blue-400' : 'text-primary-main'} mb-2`}>{item.title}</h3>
                  <div className={`space-y-2 text-sm md:text-base ${colorBase === 'red' || colorBase === 'blue' ? 'text-gray-400' : 'text-primary-main/85'}`}>
                    {item.bullets.map((b, i) => (
                      <div key={i}>• {b}</div>
                    ))}
                  </div>
                  {item.highlight && <div className="h-12"></div>}
                </GradientCard>
              );
            })}
          </div>

          <div className="text-center">
            <CtaWithArrow onClick={() => (window.location.href = '/docs/workflow-editor-comparison')}>Compare Workflow Editors</CtaWithArrow>
            <p className="text-sm text-gray-500 mt-4">See the full comparison with real examples</p>
          </div>
        </AnimatedSection>
    </Section>
  );
}


