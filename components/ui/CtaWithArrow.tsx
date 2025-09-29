"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './button';
import { ArrowRight } from 'lucide-react';

type CtaWithArrowProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'default';
  fullWidth?: boolean;
};

export default function CtaWithArrow({ children, onClick, className = '', variant = 'primary', fullWidth = false }: CtaWithArrowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div className={fullWidth ? '' : 'inline-block'} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2, ease: 'easeOut' }}>
      <Button
        variant={variant === 'primary' ? 'primary' : 'outline'}
        className={className || (variant === 'primary' ? 'h-[56px] px-10 btn-liquid text-white font-semibold rounded-full shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden text-lg' : '')}
        onClick={onClick}
        whileHover={{ scale: 1.06 }}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
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
      </Button>
    </motion.div>
  );
}


