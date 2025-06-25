import { HTMLMotionProps, motion } from 'framer-motion';
import clsx from 'clsx';

export type CardProps = HTMLMotionProps<'div'> & {
  className?: string;
};

export default function Card({ className, children, ...props }: CardProps) {
  return (
    <motion.div
      className={clsx('card-glass', className)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      {...props}
    >
      {children}
    </motion.div>
  );
} 