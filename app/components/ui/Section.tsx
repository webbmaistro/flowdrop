import { motion, cubicBezier } from 'framer-motion';
import clsx from 'clsx';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: cubicBezier(0.4, 0, 0.2, 1) } },
};

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}

export default function Section({ children, className, ...props }: SectionProps) {
  return (
    <motion.section
      className={clsx('max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-6', className)}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      {...props}
    >
      {children}
    </motion.section>
  );
} 