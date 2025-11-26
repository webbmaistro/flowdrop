'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface BlogCTAProps {
  title?: string;
  description?: string;
}

export function BlogCTA({ 
  title = 'Ready to Build AI Workflows?',
  description = 'Start automating in minutes. No coding required.'
}: BlogCTAProps) {
  const [isGetStartedHovered, setIsGetStartedHovered] = useState(false);
  const [isDocsHovered, setIsDocsHovered] = useState(false);

  return (
    <div className="bg-white/5 backdrop-blur rounded-xl py-8 px-6 flex flex-col items-center gap-6 border border-white/10 mt-12 max-w-3xl mx-auto">
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{title}</h2>
        <p className="text-base text-neutral-400">
          {description}
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        {/* Get Started Button - Primary */}
        <motion.button
          onClick={() => {
            window.location.href = 'https://app.flowdrop.xyz/';
          }}
          className="h-[56px] w-full px-8 text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden btn-liquid"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onHoverStart={() => setIsGetStartedHovered(true)}
          onHoverEnd={() => setIsGetStartedHovered(false)}
        >
          <div className="relative flex items-center justify-center w-full">
            <motion.div
              className="flex items-center gap-2"
              variants={{
                default: { x: 0 },
                hover: { x: -10 }
              }}
              initial="default"
              animate={isGetStartedHovered ? "hover" : "default"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span>Get Started</span>
              <motion.div
                className="absolute flex items-center"
                variants={{
                  default: { opacity: 0, x: -10 },
                  hover: { opacity: 1, x: 0 }
                }}
                animate={isGetStartedHovered ? "hover" : "default"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ left: "100%", marginLeft: "0.5rem" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </motion.button>

        {/* View Documentation Button - Secondary */}
        <motion.button
          onClick={() => {
            window.location.href = '/docs';
          }}
          className="h-[56px] w-full px-8 text-gray-300 hover:text-white font-semibold rounded-full border border-white/20 group relative overflow-hidden btn-liquid-hover transition-all duration-300"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
          onHoverStart={() => setIsDocsHovered(true)}
          onHoverEnd={() => setIsDocsHovered(false)}
        >
          <div className="relative flex items-center justify-center w-full">
            <motion.div
              className="flex items-center gap-2"
              variants={{
                default: { x: 0 },
                hover: { x: -10 }
              }}
              initial="default"
              animate={isDocsHovered ? "hover" : "default"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <span>View Documentation</span>
              <motion.div
                className="absolute flex items-center"
                variants={{
                  default: { opacity: 0, x: -10 },
                  hover: { opacity: 1, x: 0 }
                }}
                animate={isDocsHovered ? "hover" : "default"}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ left: "100%", marginLeft: "0.5rem" }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </motion.button>
      </div>
      
      <p className="text-gray-400 text-sm">Start for free. No credit card required.</p>
    </div>
  );
}

