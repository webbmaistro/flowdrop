import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '@/lib/styles';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  variant?: keyof typeof cardVariants;
  hover?: boolean;
  className?: string;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, variant = 'default', hover = false }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          cardVariants[variant],
          'transition-all duration-500 ease-out p-6',
          hover && [
            'card-hover-glow card-smooth',
            'hover:shadow-2xl hover:-translate-y-2',
            'hover:border-primary-main/30',
            'hover:bg-gradient-to-br hover:from-background-glass hover:to-background-card',
            'hover:shadow-[0_20px_40px_-15px_rgba(139,92,246,0.3)]',
            'hover:ring-1 hover:ring-primary-main/20'
          ],
          className
        )}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={hover ? { 
          scale: 1.03,
          transition: { duration: 0.3, ease: "easeOut" }
        } : undefined}
        whileTap={hover ? { scale: 0.98 } : undefined}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ className, children }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('flex flex-col space-y-1.5 pb-6', className)}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        {children}
      </motion.div>
    );
  }
);

CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLHeadingElement, { children: React.ReactNode; className?: string }>(
  ({ className, children }, ref) => {
    return (
      <motion.h3
        ref={ref}
        className={cn('text-xl font-semibold leading-none tracking-tight text-text-primary', className)}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {children}
      </motion.h3>
    );
  }
);

CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<HTMLParagraphElement, { children: React.ReactNode; className?: string }>(
  ({ className, children }, ref) => {
    return (
      <motion.p
        ref={ref}
        className={cn('text-sm text-text-muted', className)}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {children}
      </motion.p>
    );
  }
);

CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ className, children }, ref) => {
    return (
      <motion.div 
        ref={ref} 
        className={cn('pt-0', className)} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.4 }}
      >
        {children}
      </motion.div>
    );
  }
);

CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<HTMLDivElement, { children: React.ReactNode; className?: string }>(
  ({ className, children }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn('flex items-center pt-6', className)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {children}
      </motion.div>
    );
  }
);

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }; 