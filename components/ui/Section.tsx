import React from 'react';
import { cn } from '@/lib/utils';

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderedTop?: boolean;
  borderedBottom?: boolean;
};

export default function Section({
  children,
  className = "",
  containerClassName = "",
  borderedTop = false,
  borderedBottom = false,
}: SectionProps) {
  return (
    <section
      className={cn(
        'relative z-10 py-20',
        borderedTop && 'border-t border-white/5',
        borderedBottom && 'border-b border-white/5',
        className
      )}
    >
      <div className={cn('container mx-auto px-6', containerClassName)}>{children}</div>
    </section>
  );
}



