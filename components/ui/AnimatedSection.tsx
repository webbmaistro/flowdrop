"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
};

export default function AnimatedSection({ children, className = "", delay = 0, direction }: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-300px" });

  let initial: any, animate: any;
  if (direction === 'left') {
    initial = { opacity: 0, x: -60 };
    animate = isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -60 };
  } else if (direction === 'right') {
    initial = { opacity: 0, x: 60 };
    animate = isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 60 };
  } else {
    initial = { opacity: 0, y: 40 };
    animate = isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 };
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={initial}
      animate={animate}
      transition={{ 
        duration: 0.7, 
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  );
}



