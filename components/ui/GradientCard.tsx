"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type ColorVariant = 'primary' | 'blue' | 'red' | 'neutral';

type GradientCardProps = {
  children: React.ReactNode;
  className?: string;
  color?: ColorVariant;
  rounded?: 'xl' | '4xl';
  withOverlay?: boolean;
  highlight?: boolean;
};

const baseByColor: Record<ColorVariant, string> = {
  primary: 'from-primary-main/20 to-purple-500/20 border-primary-main/30',
  blue: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20',
  red: 'from-red-500/10 to-orange-500/10 border-red-500/20',
  neutral: 'from-neutral-800/60 to-neutral-700/40 border-white/10',
};

export default function GradientCard({
  children,
  className = '',
  color = 'primary',
  rounded = '4xl',
  withOverlay = false,
  highlight = false,
}: GradientCardProps) {
  return (
    <motion.div
      className={cn(
        'bg-gradient-to-br backdrop-blur border p-6 relative',
        baseByColor[color],
        rounded === '4xl' ? 'rounded-4xl' : 'rounded-xl',
        highlight && 'overflow-hidden',
        className,
      )}
      whileHover={{ scale: highlight ? 1.08 : 1.02, y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {withOverlay && <div className="absolute inset-0 bg-gradient-to-r from-primary-main/5 to-purple-500/5" />}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}


