"use client"

import React from 'react';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/styles';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  level?: 'h2' | 'h3';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  align = 'center',
  level = 'h2',
  className,
  titleClassName,
  subtitleClassName
}: SectionHeaderProps) {
  const isCenter = align === 'center';
  const TitleTag = level;
  const titleStyle = level === 'h2' ? typography.h2 : typography.h3;

  return (
    <div className={cn(isCenter ? 'text-center' : 'text-left', 'mb-12', className)}>
      <TitleTag className={cn(titleStyle, isCenter ? 'mb-6' : 'mb-4', titleClassName)}>{title}</TitleTag>
      {subtitle && (
        <p className={cn('text-lg text-gray-400', isCenter ? 'max-w-3xl mx-auto' : '', subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
}


