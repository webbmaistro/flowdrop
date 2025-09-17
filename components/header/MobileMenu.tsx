"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';
import { Button } from '@/components/ui';
import Navigation from './Navigation';
import AuthButtons from './AuthButtons';

const navigation: Array<{name: string; href: string; external?: boolean}> = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Contact', href: '/contact' },
];

interface MobileMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  pathname: string;
  user: any;
  loading: boolean;
  onSignOut: () => void;
}

export default function MobileMenu({ isOpen, onToggle, pathname, user, loading, onSignOut }: MobileMenuProps) {
  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="md:hidden text-text-secondary hover:text-text-primary"
      >
        <Menu className="w-6 h-6" />
      </Button>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onToggle} />
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-background/95 backdrop-blur-md border-l border-white/10 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-lg font-semibold text-text-primary">Menu</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={onToggle}
                    className="text-text-secondary hover:text-text-primary"
                  >
                    <X className="w-6 h-6" />
                  </Button>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-6 py-6">
                  <nav className="space-y-4">
                    {navigation.map((item) => {
                      const isActive = pathname === item.href && !item.external;
                      return (
                        <a
                          key={item.name}
                          href={item.href}
                          className={`block px-4 py-3 rounded-lg transition-all duration-200 ${
                            isActive
                              ? 'bg-primary-main/20 text-primary-light border border-primary-main/30'
                              : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                          }`}
                          {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
                        >
                          {item.name}
                        </a>
                      );
                    })}
                  </nav>
                </div>

                {/* Auth Section */}
                <div className="pt-4 border-t border-white/10">
                  <AuthButtons 
                    user={user} 
                    loading={loading} 
                    onSignOut={onSignOut}
                    className="flex-col space-y-3 space-x-0"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
