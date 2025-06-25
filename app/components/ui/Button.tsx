import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import clsx from 'clsx';

type ButtonProps = HTMLMotionProps<'button'> & {
  className?: string;
  'aria-label'?: string;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, 'aria-label': ariaLabel, ...props }, ref) => (
    <motion.button
      ref={ref}
      className={clsx(
        'btn-primary',
        'focus-visible:ring-2 focus-visible:ring-accent',
        className
      )}
      aria-label={ariaLabel}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  )
);
Button.displayName = 'Button';
export default Button; 