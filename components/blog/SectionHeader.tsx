'use client';

import { blogStyles } from './blog-styles';

interface SectionHeaderProps {
  text: string;
}

/**
 * Large brand-colored section header to break up blog content
 * Draws attention to key section beginnings
 * Uses consistent spacing with prose content (mt-8 mb-3 like h2)
 */
export function SectionHeader({ text }: SectionHeaderProps) {
  return (
    <h2 
      className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-8 mb-3 bg-gradient-to-r from-purple-400 via-purple-300 to-purple-400 bg-clip-text text-transparent font-[family-name:var(--font-geist-sans)]"
    >
      {text}
    </h2>
  );
}

