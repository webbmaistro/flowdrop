"use client";

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface SlidingBannerProps {
  className?: string;
  duration?: number;
  direction?: 'left' | 'right';
  repeat?: number;
}

const integrations = [
  { name: 'Google Sheets', logo: '/logos/google-sheets.svg' },
  { name: 'Slack', logo: '/logos/slack.svg' },
  { name: 'Discord', logo: '/logos/discord.svg' },
  { name: 'Google Docs', logo: '/logos/google-docs.svg' },
  { name: 'Gmail', logo: '/logos/gmail.svg' },
  { name: 'GitHub', logo: '/logos/github.svg' },
  { name: 'Google Calendar', logo: '/logos/google-calendar.svg' },
  { name: 'Notion', logo: '/logos/notion.svg' },
  { name: 'Microsoft Outlook', logo: '/logos/microsoft-outlook.svg' },
  { name: 'Microsoft Excel', logo: '/logos/microsoft-excel.svg' },
  { name: 'Microsoft Word', logo: '/logos/microsoft-word.svg' },
];

export default function SlidingBanner({
  className,
  duration = 20,
  direction = 'left',
  repeat = 3,
}: SlidingBannerProps) {
  // Duplicate items to ensure seamless loop
  const items = Array.from({ length: Math.max(2, repeat) }).flatMap(() => integrations);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <div className="flex items-center whitespace-nowrap gap-6 md:gap-6">
        <div
          className={cn(
            "marquee-track flex items-center whitespace-nowrap gap-6 marquee-very-slow",
            direction === 'right' ? 'reverse' : ''
          )}
          style={{ 
            ['--marquee-duration' as any]: `${duration}s`,
            animationDuration: `${duration * 4}s`
          }}
        >
          {items.map((integration, index) => (
            <div
              key={`${integration.name}-${index}`}
              className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-3 rounded-full transition-all duration-300 group cursor-pointer relative overflow-hidden flex-shrink-0 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 hover:shadow-lg hover:shadow-primary-main/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-main/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <div className="relative w-6 h-6 group-hover:scale-110 transition-transform duration-300 z-10">
                <Image
                  src={integration.logo}
                  alt={`${integration.name} logo`}
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
              </div>
              <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300 relative z-10">
                {integration.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}