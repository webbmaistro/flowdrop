"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScreenshotProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  showBrowserFrame?: boolean;
  showShadow?: boolean;
  animateOnScroll?: boolean;
  delay?: number;
  onClick?: () => void;
  caption?: string;
}

export default function Screenshot({
  src,
  alt,
  width = 800,
  height = 600,
  className,
  priority = false,
  showBrowserFrame = true,
  showShadow = true,
  animateOnScroll = true,
  delay = 0,
  onClick,
  caption
}: ScreenshotProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const imageComponent = (
    <div className={cn("relative", className)}>
      {showBrowserFrame && (
        <div className="bg-neutral-900/90 backdrop-blur-sm border border-white/20 rounded-lg shadow-2xl overflow-hidden">
          {/* Browser Header */}
          <div className="bg-neutral-800/50 border-b border-white/10 px-4 py-3 flex items-center gap-3">
            <div className="flex gap-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <div className="flex-1 bg-neutral-700/50 rounded px-3 py-1 text-sm text-gray-400 text-center">
              flowdrop.xyz
            </div>
          </div>
          
          {/* Image Container */}
          <div className="relative">
            <Image
              src={src}
              alt={alt}
              width={width}
              height={height}
              priority={priority}
              className={cn(
                "w-full h-auto transition-opacity duration-500",
                isLoaded ? "opacity-100" : "opacity-0"
              )}
              onLoad={() => setIsLoaded(true)}
              onError={() => setHasError(true)}
            />
            
            {/* Loading State */}
            {!isLoaded && !hasError && (
              <div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-main"></div>
              </div>
            )}
            
            {/* Error State */}
            {hasError && (
              <div className="absolute inset-0 bg-neutral-800/50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-2xl mb-2">📸</div>
                  <div className="text-sm">Screenshot unavailable</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      
      {!showBrowserFrame && (
        <div className="relative">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className={cn(
              "w-full h-auto rounded-lg transition-opacity duration-500",
              showShadow && "shadow-2xl",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
          
          {/* Loading State */}
          {!isLoaded && !hasError && (
            <div className="absolute inset-0 bg-neutral-800/50 rounded-lg flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-main"></div>
            </div>
          )}
          
          {/* Error State */}
          {hasError && (
            <div className="absolute inset-0 bg-neutral-800/50 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-400">
                <div className="text-2xl mb-2">📸</div>
                <div className="text-sm">Screenshot unavailable</div>
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Caption */}
      {caption && (
        <div className="mt-3 text-center">
          <p className="text-sm text-gray-400">{caption}</p>
        </div>
      )}
    </div>
  );

  if (animateOnScroll) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ 
          duration: 0.7, 
          delay: delay,
          ease: "easeOut"
        }}
        whileHover={onClick ? { scale: 1.02, y: -2 } : {}}
        onClick={onClick}
        className={onClick ? "cursor-pointer" : ""}
      >
        {imageComponent}
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={onClick ? { scale: 1.02, y: -2 } : {}}
      onClick={onClick}
      className={onClick ? "cursor-pointer" : ""}
    >
      {imageComponent}
    </motion.div>
  );
} 