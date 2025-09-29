"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, LabeledScreenshot } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { mobileStories } from '@/content/landing.config';

export default function MobileStoriesSection() {
  return (
    <section className="lg:hidden py-20 relative z-10">
      <div className="container mx-auto px-6">
        <div className="space-y-16">
          {mobileStories.map((story, idx) => (
            <AnimatedSection key={idx} className="text-center" direction={idx % 2 === 0 ? 'left' : 'right'}>
              <div className="mb-8">
                <h3 className={cn(typography.h3, 'mb-4')}>{story.title}</h3>
                <p className={cn(typography.body, 'text-text-secondary')}>{story.copy}</p>
              </div>
              <div className="max-w-md mx-auto">
                <LabeledScreenshot
                  url={story.screenshot.url}
                  src={story.screenshot.src}
                  alt={story.screenshot.alt}
                  width={story.screenshot.width}
                  height={story.screenshot.height}
                  className={story.screenshot.width === 250 ? 'rounded-lg' : 'rounded-xl'}
                  imageClassName={story.screenshot.width === 250 ? '' : 'rounded-b-xl'}
                  label={{ text: story.screenshot.label.text, position: 'top-left', containerClassName: story.screenshot.label.colorClass }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}


