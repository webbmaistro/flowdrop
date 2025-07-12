"use client";

import React from 'react';
import { usePerformanceSettings } from '@/lib/performance';
import { cn } from '@/lib/utils';

interface PerformanceWrapperProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
  liquidButton?: boolean;
}

export default function PerformanceWrapper({ 
  children, 
  className = '',
  glassEffect = false,
  liquidButton = false
}: PerformanceWrapperProps) {
  const performanceSettings = usePerformanceSettings();

  // Determine appropriate classes based on performance settings
  const getPerformanceClasses = () => {
    const classes: string[] = [];
    
    if (glassEffect) {
      switch (performanceSettings.animationLevel) {
        case 'minimal':
          classes.push('glass-minimal');
          break;
        case 'reduced':
          classes.push('glass-reduced');
          break;
        case 'full':
          classes.push('glass');
          break;
      }
    }
    
    if (liquidButton) {
      switch (performanceSettings.animationLevel) {
        case 'minimal':
          classes.push('btn-liquid-minimal');
          break;
        case 'reduced':
          classes.push('btn-liquid-reduced');
          break;
        case 'full':
          classes.push('btn-liquid');
          break;
      }
    }
    
    return classes.join(' ');
  };

  return (
    <div className={cn(getPerformanceClasses(), className)}>
      {children}
    </div>
  );
} 