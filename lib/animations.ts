/**
 * Performance-Aware Animation Variants
 * Provides adaptive animations based on device capabilities
 */

import { Variants } from 'framer-motion';
import { getAnimationLevel, shouldEnableComplexAnimations } from './performance';

// Base animation variants that adapt to performance settings
export const createAdaptiveVariants = (baseVariants: Variants): Variants => {
  const animationLevel = getAnimationLevel();
  const enableComplex = shouldEnableComplexAnimations();
  
  const adaptedVariants: Variants = {};
  
  Object.entries(baseVariants).forEach(([key, variant]) => {
    if (typeof variant === 'object' && variant !== null) {
      adaptedVariants[key] = {
        ...variant,
        transition: {
          ...variant.transition,
          duration: animationLevel === 'minimal' ? 0.1 : 
                   animationLevel === 'reduced' ? (variant.transition?.duration || 0.3) * 0.7 :
                   variant.transition?.duration || 0.3,
          ease: animationLevel === 'minimal' ? 'linear' : variant.transition?.ease || 'easeOut'
        }
      };
      
      // Remove complex animations for low-performance devices
      if (!enableComplex && adaptedVariants[key]) {
        const adapted = adaptedVariants[key] as any;
        // Remove complex transforms
        if (adapted.scale && Array.isArray(adapted.scale)) {
          adapted.scale = adapted.scale[adapted.scale.length - 1]; // Use final value only
        }
        if (adapted.rotate && Array.isArray(adapted.rotate)) {
          adapted.rotate = adapted.rotate[adapted.rotate.length - 1];
        }
        if (adapted.x && Array.isArray(adapted.x)) {
          adapted.x = adapted.x[adapted.x.length - 1];
        }
        if (adapted.y && Array.isArray(adapted.y)) {
          adapted.y = adapted.y[adapted.y.length - 1];
        }
      }
    } else {
      adaptedVariants[key] = variant;
    }
  });
  
  return adaptedVariants;
};

// Optimized container variants
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Default value for SSR
      delayChildren: 0.2
    }
  }
};

// Optimized item variants
export const itemVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20 // Default value for SSR
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6 // Default value for SSR
    }
  }
};

// Card hover variants
export const cardHoverVariants: Variants = {
  initial: { 
    scale: 1, 
    y: 0,
    transition: { duration: 0.2 }
  },
  hover: {
    scale: 1.01,
    y: -2,
    transition: { 
      duration: 0.2,
      ease: "easeOut"
    }
  }
};

// Button hover variants
export const buttonHoverVariants: Variants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.98 }
};

// Logo animation variants
export const logoVariants: Variants = {
  initial: { y: 0 },
  animate: { y: 0 },
  hover: {
    scale: 1.02,
    transition: { duration: 0.2 }
  }
};

// Header animation variants
export const headerVariants: Variants = {
  initial: { y: -100 },
  animate: { 
    y: 0,
    transition: { 
      duration: 0.5
    }
  }
};

// Pricing card variants
export const pricingCardVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6
    }
  },
  hover: {
    scale: 1.01,
    transition: { duration: 0.2 }
  }
};

// Utility function to get optimized transition props
export const getOptimizedTransition = (baseDuration: number = 0.3) => ({
  duration: baseDuration,
  ease: 'easeOut'
});

// Utility to conditionally apply animations
export const conditionalAnimation = (animation: any, fallback: any = {}) => {
  return animation;
};

// Performance-aware whileHover props
export const getHoverProps = (hoverAnimation: any) => {
  return { whileHover: hoverAnimation };
};

// Performance-aware whileTap props
export const getTapProps = (tapAnimation: any = { scale: 0.98 }) => {
  return { whileTap: tapAnimation };
}; 