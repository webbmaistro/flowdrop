import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NodeIconProps {
  icon: LucideIcon;
  color?: 'primary' | 'purple' | 'green' | 'red' | 'orange' | 'pink' | 'indigo' | 'blue' | 'yellow';
  className?: string;
}

const colorVariants = {
  primary: {
    bg: 'bg-primary-main/20',
    border: 'border-primary-main/30',
    text: 'text-white'
  },
  purple: {
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/30',
    text: 'text-white'
  },
  green: {
    bg: 'bg-green-500/20',
    border: 'border-green-500/30',
    text: 'text-white'
  },
  red: {
    bg: 'bg-red-500/20',
    border: 'border-red-500/30',
    text: 'text-white'
  },
  orange: {
    bg: 'bg-orange-500/20',
    border: 'border-orange-500/30',
    text: 'text-white'
  },
  pink: {
    bg: 'bg-pink-500/20',
    border: 'border-pink-500/30',
    text: 'text-white'
  },
  indigo: {
    bg: 'bg-indigo-500/20',
    border: 'border-indigo-500/30',
    text: 'text-white'
  },
  blue: {
    bg: 'bg-blue-500/20',
    border: 'border-blue-500/30',
    text: 'text-white'
  },
  yellow: {
    bg: 'bg-yellow-500/20',
    border: 'border-yellow-500/30',
    text: 'text-white'
  }
};

export default function NodeIcon({ 
  icon: Icon, 
  color = 'primary', 
  className 
}: NodeIconProps) {
  const variant = colorVariants[color];
  
  return (
    <div className={cn(
      'p-2 rounded-lg border',
      variant.bg,
      variant.border,
      className
    )}>
      <Icon className={cn('w-6 h-6', variant.text)} />
    </div>
  );
}
