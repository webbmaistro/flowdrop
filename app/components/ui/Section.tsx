import { HTMLAttributes, FC } from 'react';
import clsx from 'clsx';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {}

const Section: FC<SectionProps> = ({ children, className = '', ...props }) => {
  return (
    <div
      className={clsx('max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12 space-y-6', className)}
      {...props}
    >
      {children}
    </div>
  );
};
export default Section; 