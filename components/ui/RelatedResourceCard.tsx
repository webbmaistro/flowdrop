"use client";

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RelatedResourceCardProps {
  href: string;
  title: string;
  description: string;
  className?: string;
}

export default function RelatedResourceCard({ 
  href, 
  title, 
  description,
  className 
}: RelatedResourceCardProps) {
  return (
    <Link 
      href={href}
      className={cn(
        "group relative block",
        "bg-neutral-800/40 hover:bg-neutral-800/60",
        "border border-neutral-700/50 hover:border-neutral-600",
        "rounded-lg p-4",
        "transition-all duration-200",
        "hover:scale-[1.02] hover:shadow-lg hover:shadow-primary-main/5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-neutral-100 mb-1 group-hover:text-primary-main transition-colors">
            {title}
          </h3>
          <p className="text-xs text-neutral-400 line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex-shrink-0 mt-0.5">
          <div className="w-6 h-6 rounded-full bg-neutral-700/50 group-hover:bg-primary-main/20 flex items-center justify-center transition-all duration-200">
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-primary-main group-hover:translate-x-0.5 transition-all duration-200" />
          </div>
        </div>
      </div>
    </Link>
  );
}

