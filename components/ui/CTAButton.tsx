"use client";

import React, { useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children: React.ReactNode;
  hoverLiquidOnly?: boolean;
  className?: string;
}

const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ children, hoverLiquidOnly = false, className, disabled, ...props }, ref) => {
    const [isHovered, setIsHovered] = useState(false);
    const baseClasses = 'h-[52px] w-full px-8 text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden';
    const styleClasses = hoverLiquidOnly ? 'btn-hover-ready' : 'btn-liquid';

    return (
      <motion.button
        ref={ref}
        className={cn(baseClasses, styleClasses, className)}
        disabled={disabled}
        whileHover={{ scale: disabled ? 1 : 1.02 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        {...props}
      >
        <div className="relative flex items-center justify-center w-full">
          <motion.div
            className="flex items-center gap-2"
            variants={{
              default: { x: 0 },
              hover: { x: -10 }
            }}
            initial="default"
            animate={isHovered ? "hover" : "default"}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <span>{children}</span>
            <motion.div
              className="absolute flex items-center"
              variants={{
                default: { opacity: 0, x: -10 },
                hover: { opacity: 1, x: 0 }
              }}
              animate={isHovered ? "hover" : "default"}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              style={{ left: "100%", marginLeft: "0.5rem" }}
            >
              <ArrowRight className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </motion.button>
    );
  }
);

CTAButton.displayName = 'CTAButton';

export default CTAButton;



