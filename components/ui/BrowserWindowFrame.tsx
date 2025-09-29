"use client";

import React from 'react';
import { cn } from '@/lib/utils';

type BrowserWindowFrameProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
  headerVariant?: 'default' | 'compact';
  headerClassName?: string;
  urlClassName?: string;
};

export default function BrowserWindowFrame({
  url,
  children,
  className = "",
  headerVariant = 'default',
  headerClassName = "",
  urlClassName = "",
}: BrowserWindowFrameProps) {
  const isCompact = headerVariant === 'compact';

  return (
    <div className={cn(
      'bg-neutral-900/90 backdrop-blur-sm border border-white/20 shadow-2xl overflow-hidden',
      className
    )}>
      <div
        className={cn(
          'bg-neutral-800/50 border-b border-white/10 flex items-center',
          isCompact ? 'px-3 py-2 gap-2' : 'px-4 py-3 gap-3',
          headerClassName
        )}
      >
        <div className={cn('flex', isCompact ? 'gap-1' : 'gap-2')}>
          <div className={cn(isCompact ? 'w-2 h-2' : 'w-3 h-3', 'bg-red-500 rounded-full')}></div>
          <div className={cn(isCompact ? 'w-2 h-2' : 'w-3 h-3', 'bg-yellow-500 rounded-full')}></div>
          <div className={cn(isCompact ? 'w-2 h-2' : 'w-3 h-3', 'bg-green-500 rounded-full')}></div>
        </div>
        <div
          className={cn(
            'flex-1 bg-neutral-700/50 text-gray-400 text-center',
            isCompact ? 'rounded px-2 py-1 text-xs' : 'rounded-lg px-3 py-1 text-sm',
            urlClassName
          )}
        >
          {url}
        </div>
      </div>
      <div className="relative">
        {children}
      </div>
    </div>
  );
}



