"use client"

import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import BrowserWindowFrame from './BrowserWindowFrame';

interface LabelConfig {
  text: string;
  position?: 'center' | 'top-left';
  containerClassName?: string;
}

interface LabeledScreenshotProps {
  url: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  label?: LabelConfig;
  priority?: boolean;
}

const LabeledScreenshot: React.FC<LabeledScreenshotProps> = ({
  url,
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
  label,
  priority = false
}) => {
  const positionClass = label?.position === 'center'
    ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
    : 'top-6 left-6';

  return (
    <BrowserWindowFrame url={url} className={className}>
      <div className="relative">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={cn('w-full h-auto', imageClassName)}
          priority={priority}
        />
        {label && (
          <div className={cn('absolute rounded-lg px-3 py-2', positionClass, label.containerClassName)}>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse bg-current" />
              <span className="text-sm font-semibold">{label.text}</span>
            </div>
          </div>
        )}
      </div>
    </BrowserWindowFrame>
  );
};

export default LabeledScreenshot;


