"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, LogOut } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
);

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Contact', href: '/contact' },
];

interface HeaderProps {
  hideAtTopOnLanding?: boolean;
}

export default function Header({ hideAtTopOnLanding = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Only show header on landing page after scroll
  const shouldHideHeader = hideAtTopOnLanding && pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check authentication state
  useEffect(() => {
    // Get initial user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          shouldHideHeader 
            ? 'opacity-0 pointer-events-none' 
            : isScrolled
              ? 'bg-background-glass backdrop-blur-lg border-b border-white/10'
              : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <motion.div
                className="p-2 bg-primary-main/20 rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Zap className="w-6 h-6 text-primary-main" />
              </motion.div>
              <span className="text-xl font-bold text-text-primary">FlowDrop</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-text-secondary transition-all duration-200 relative',
                      'not-button-link',
                      isActive && 'text-text-primary'
                    )}
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

            {/* CTA Button - Show Sign Out if authenticated, Get Started if not */}
            <div className="hidden md:flex items-center space-x-4">
              {!loading && (
                <>
                  {user ? (
                    <>
                      <span className="text-sm text-foreground-muted">
                        Welcome, {user.email}
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSignOut}
                        icon={<LogOut className="w-4 h-4" />}
                        iconPosition="left"
                      >
                        Sign Out
                      </Button>
                    </>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => window.location.href = '/signin'}
                    >
                      Get Started
                    </Button>
                  )}
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-16 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-background-glass backdrop-blur-lg border-b border-white/10">
              <div className="container mx-auto px-6 py-4">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          'text-text-secondary transition-all duration-200 py-2',
                          'not-button-link',
                          isActive && 'text-text-primary'
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <div className="pt-4 border-t border-white/10">
                    {!loading && (
                      <>
                        {user ? (
                          <div className="flex flex-col space-y-3">
                            <span className="text-sm text-foreground-muted">
                              Welcome, {user.email}
                            </span>
                            <Button
                              variant="primary"
                              size="sm"
                              className="w-full"
                              onClick={() => {
                                handleSignOut();
                                setIsMobileMenuOpen(false);
                              }}
                              icon={<LogOut className="w-4 h-4" />}
                              iconPosition="left"
                            >
                              Sign Out
                            </Button>
                          </div>
                        ) : (
                          <Button
                            variant="primary"
                            size="sm"
                            className="w-full"
                            onClick={() => {
                              window.location.href = '/signin';
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            Get Started
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 