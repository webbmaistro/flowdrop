import React from 'react';
import { LucideIcon } from 'lucide-react';

interface IconSectionProps {
  icon: LucideIcon;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function IconSection({ icon: Icon, title, children, className = "" }: IconSectionProps) {
  return (
    <div className={`bg-neutral-800 rounded-xl p-6 border border-neutral-700 ${className}`}>
      <h3 className="font-semibold mb-3 flex items-center gap-2">
        <Icon className="w-5 h-5 text-primary-main" />
        {title}
      </h3>
      {children}
    </div>
  );
}
