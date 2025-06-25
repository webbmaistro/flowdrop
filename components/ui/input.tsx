import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { inputVariants } from '@/lib/styles';
import { cn } from '@/lib/utils';

interface InputProps extends Omit<HTMLMotionProps<"input">, "children"> {
  variant?: keyof typeof inputVariants;
  error?: boolean;
  label?: string;
  helperText?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    className, 
    variant = 'default', 
    error = false, 
    label, 
    helperText, 
    icon,
    iconPosition = 'left',
    ...props 
  }, ref) => {
    return (
      <div className="w-full space-y-2">
        {label && (
          <motion.label 
            className="block text-sm font-medium text-text-secondary"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            {label}
          </motion.label>
        )}
        
        <div className="relative">
          {icon && iconPosition === 'left' && (
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-muted">
              {icon}
            </div>
          )}
          
          <motion.input
            className={cn(
              inputVariants[error ? 'error' : variant],
              icon && iconPosition === 'left' && 'pl-12',
              icon && iconPosition === 'right' && 'pr-12',
              'transition-all duration-200',
              className
            )}
            ref={ref}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            {...props}
          />
          
          {icon && iconPosition === 'right' && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-muted">
              {icon}
            </div>
          )}
        </div>
        
        {helperText && (
          <motion.p 
            className={cn(
              'text-sm',
              error ? 'text-error-500' : 'text-text-muted'
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            {helperText}
          </motion.p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export { Input }; 