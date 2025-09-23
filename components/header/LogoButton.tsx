"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface LogoButtonProps {
  className?: string;
  isHeroVersion?: boolean;
}

export default function LogoButton({ className = "", isHeroVersion = false }: LogoButtonProps) {
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{
        x: [0, -0.5, 0.5, -0.3, 0.3, 0],
        y: [0, -0.3, 0.3, -0.2, 0.2, 0]
      }}
      transition={{
        duration: 0.6,
        ease: "easeInOut"
      }}
    >
      <Link href="/" className="group relative">
        <motion.div
          className="flex items-center justify-center space-x-3 px-5 py-3 bg-primary-main/20 backdrop-blur-sm rounded-full shadow-lg group-hover:shadow-primary-main/25 group-hover:shadow-xl transition-all duration-300 relative"
          variants={{
            default: { scale: 1 },
            hover: { scale: 1.05 }
          }}
          initial="default"
          whileHover="hover"
          animate="default"
          transition={{ duration: 0.2 }}
          onHoverStart={() => setIsButtonHovered(true)}
          onHoverEnd={() => setIsButtonHovered(false)}
        >
          <motion.div
            animate={isButtonHovered ? {
              scale: [1, 1.2, 0.9, 1.1, 1],
              rotate: [0, -5, 5, -2, 0],
              filter: [
                "brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0))",
                "brightness(1.3) drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))",
                "brightness(1.1) drop-shadow(0 0 4px rgba(139, 92, 246, 0.6))",
                "brightness(1.2) drop-shadow(0 0 6px rgba(139, 92, 246, 0.7))",
                "brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0))"
              ]
            } : isHeroVersion ? {
              y: [0, -2, 0],
              rotate: [0, 2, -2, 0],
            } : {
              scale: 1,
              rotate: 0,
              filter: "brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0))"
            }}
            transition={isButtonHovered ? {
              scale: {
                duration: 1.2,
                ease: "easeInOut"
              },
              rotate: {
                duration: 1.2,
                ease: "easeInOut"
              },
              filter: {
                duration: 1.2,
                ease: "easeInOut"
              }
            } : isHeroVersion ? {
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotate: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }
            } : {
              duration: 0.3,
              ease: "easeInOut"
            }}
          >
            {/* Glow Effect Layer */}
            <div className="absolute inset-0 scale-[2] opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute inset-0 bg-primary-main/20 blur-xl transform scale-y-[0.8]" />
              <div className="absolute inset-0 bg-primary-main/10 blur-2xl" />
            </div>
            
            {/* Icon */}
            <div className="relative">
            <Image 
              src="/flowdrop-logo-3.png" 
              alt="Flowdrop Logo" 
              width={23} 
              height={23} 
              className="w-6 h-6"
            />
            </div>
          </motion.div>
          <span className="text-2xl font-bold text-text-primary group-hover:text-primary-light relative">
            Flowdrop
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-[2px] text-primary-main -z-10 -translate-y-[2px] transition-all duration-300" aria-hidden="true">Flowdrop</div>
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}
