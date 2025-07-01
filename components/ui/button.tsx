import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { buttonVariants } from '@/lib/styles';
import { cn } from '@/lib/utils';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: keyof typeof buttonVariants;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    loading = false, 
    disabled, 
    children, 
    icon,
    iconPosition = 'left',
    ...props 
  }, ref) => {
    const sizeClasses = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
      xl: 'px-10 py-5 text-xl',
    };

    // Different gradient intensities for different variants
    const getGradientClass = () => {
      switch (variant) {
        case 'primary':
          return 'bg-gradient-to-r from-primary-main via-primary-500 to-primary-main';
        case 'secondary':
          return 'bg-gradient-to-r from-primary-main/20 via-primary-500/20 to-primary-main/20';
        case 'outline':
          return 'bg-gradient-to-r from-primary-main via-primary-500 to-primary-main';
        case 'ghost':
          return 'bg-gradient-to-r from-primary-main/10 via-primary-500/10 to-primary-main/10';
        default:
          return 'bg-gradient-to-r from-primary-main via-primary-500 to-primary-main';
      }
    };

    return (
      <motion.button
        className={cn(
          buttonVariants[variant],
          sizeClasses[size],
          'inline-flex items-center justify-center gap-3 font-medium transition-all duration-300',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
          'relative overflow-hidden',
          variant === 'primary' && 'hover:shadow-[0_0_16px_4px_rgba(139,92,246,0.18)] hover:ring-2 hover:ring-primary-main/30',
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        whileHover={{ scale: disabled || loading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {/* Gradient overlay for brand color highlight */}
        <div className={cn(
          'absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100',
          getGradientClass()
        )} />
        
        {/* Content wrapper to ensure text stays above gradient */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          {loading && (
            <motion.svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </motion.svg>
          )}
          
          {!loading && icon && iconPosition === 'left' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          
          <span className="flex-shrink-0">{children}</span>
          
          {!loading && icon && iconPosition === 'right' && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </div>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export { Button }; 