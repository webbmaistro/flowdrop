"use client";
import React from 'react';
import { cn } from '@/lib/utils';

type PillVariant = 'neutral' | 'primary' | 'blue' | 'purple' | 'green' | 'orange';

type PillProps = {
  children: React.ReactNode;
  className?: string;
  variant?: PillVariant;
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  align?: 'start' | 'center';
};

const variantClass: Record<PillVariant, string> = {
  neutral: 'bg-neutral-800/60 border-white/10 text-gray-300 hover:bg-neutral-700/60 hover:border-white/20',
  primary: 'bg-primary-main/10 border-primary-main/20 text-primary-main hover:border-primary-main/30',
  blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400 hover:border-blue-500/30',
  purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400 hover:border-purple-500/30',
  green: 'bg-green-500/10 border-green-500/20 text-green-400 hover:border-green-500/30',
  orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400 hover:border-orange-500/30',
};

const sizeClass = {
  sm: 'px-3 py-1 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-lg',
};

export default function Pill({ children, className = '', variant = 'neutral', size = 'md', fullWidth = false, align = 'center' }: PillProps) {
  return (
    <span
      className={cn(
        fullWidth ? 'flex w-full' : 'inline-flex',
        'items-center rounded-full border backdrop-blur transition-all duration-300 cursor-pointer',
        align === 'start' ? 'justify-start' : 'justify-center',
        'hover:shadow-lg hover:shadow-primary-main/10',
        variantClass[variant],
        sizeClass[size],
        className
      )}
    >
      {children}
    </span>
  );
}


