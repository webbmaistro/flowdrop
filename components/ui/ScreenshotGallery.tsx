"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import Screenshot from './Screenshot';
import { cn } from '@/lib/utils';

interface ScreenshotItem {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

interface ScreenshotGalleryProps {
  screenshots: ScreenshotItem[];
  className?: string;
  showThumbnails?: boolean;
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export default function ScreenshotGallery({
  screenshots,
  className,
  showThumbnails = true,
  autoPlay = false,
  autoPlayInterval = 5000
}: ScreenshotGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Auto-play functionality
  React.useEffect(() => {
    if (!autoPlay || isLightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, screenshots.length, isLightboxOpen]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const openLightbox = () => setIsLightboxOpen(true);
  const closeLightbox = () => setIsLightboxOpen(false);

  if (screenshots.length === 0) return null;

  return (
    <div className={cn("relative", className)}>
      {/* Main Screenshot Display */}
      <div className="relative group">
        <Screenshot
          src={screenshots[currentIndex].src}
          alt={screenshots[currentIndex].alt}
          width={screenshots[currentIndex].width}
          height={screenshots[currentIndex].height}
          caption={screenshots[currentIndex].caption}
          showBrowserFrame={true}
          animateOnScroll={false}
          onClick={openLightbox}
        />
        
        {/* Expand Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-all duration-200"
          onClick={openLightbox}
        >
          <Maximize2 className="w-4 h-4" />
        </motion.button>

        {/* Navigation Arrows */}
        {screenshots.length > 1 && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-all duration-200"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-black/70 transition-all duration-200"
              onClick={nextSlide}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {showThumbnails && screenshots.length > 1 && (
        <div className="flex gap-2 mt-4 justify-center">
          {screenshots.map((screenshot, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "relative w-16 h-12 rounded-lg overflow-hidden border-2 transition-all duration-200",
                currentIndex === index 
                  ? "border-primary-main scale-110" 
                  : "border-transparent hover:border-white/30"
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="w-full h-full object-cover"
              />
              {currentIndex === index && (
                <motion.div
                  layoutId="activeThumbnail"
                  className="absolute inset-0 bg-primary-main/20"
                />
              )}
            </motion.button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl max-h-full">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-200 z-10"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Image */}
              <div className="relative" onClick={(e) => e.stopPropagation()}>
                <Screenshot
                  src={screenshots[currentIndex].src}
                  alt={screenshots[currentIndex].alt}
                  width={screenshots[currentIndex].width}
                  height={screenshots[currentIndex].height}
                  showBrowserFrame={false}
                  animateOnScroll={false}
                  className="max-h-[80vh] object-contain"
                />
                
                {screenshots[currentIndex].caption && (
                  <div className="mt-4 text-center">
                    <p className="text-white text-lg">{screenshots[currentIndex].caption}</p>
                  </div>
                )}
              </div>

              {/* Lightbox Navigation */}
              {screenshots.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  
                  <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/50 backdrop-blur-sm rounded-lg text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Lightbox Thumbnails */}
              {showThumbnails && screenshots.length > 1 && (
                <div className="flex gap-2 mt-4 justify-center">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); goToSlide(index); }}
                      className={cn(
                        "relative w-20 h-15 rounded-lg overflow-hidden border-2 transition-all duration-200",
                        currentIndex === index 
                          ? "border-primary-main" 
                          : "border-transparent hover:border-white/30"
                      )}
                    >
                      <img
                        src={screenshot.src}
                        alt={screenshot.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 