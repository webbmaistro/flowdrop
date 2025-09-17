"use client"

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navigation: Array<{name: string; href: string; external?: boolean}> = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Contact', href: '/contact' },
];

interface NavigationProps {
  pathname: string;
  className?: string;
}

export default function Navigation({ pathname, className = "" }: NavigationProps) {
  return (
    <nav className={`hidden md:flex items-center space-x-8 ${className}`}>
      {navigation.map((item) => {
        const isActive = pathname === item.href && !item.external;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'text-text-secondary transition-all duration-200 relative',
              'not-button-link',
              isActive && 'text-text-primary'
            )}
            {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
          >
            {item.name}
            {isActive && (
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-main"
                layoutId="activeTab"
                transition={{ duration: 0.3 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}
