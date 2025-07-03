"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, LogOut, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
);

const navigation: Array<{name: string; href: string; external?: boolean}> = [
  { name: 'Pricing', href: '/pricing' },
  { name: 'Docs', href: '/docs' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: 'https://www.reddit.com/r/Flowdrop/', external: true },
];

interface HeaderProps {
  hideAtTopOnLanding?: boolean;
  isAuthPage?: boolean;
}

export default function Header({ hideAtTopOnLanding = false, isAuthPage = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFullHeader, setShowFullHeader] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  // Show header when scrolled > 50vh OR scrolling up
  const shouldHideHeader = hideAtTopOnLanding && pathname === '/' && !showFullHeader;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const vh50 = window.innerHeight * 0.5; // 50vh
      
      setIsScrolled(currentScrollY > 20);
      
      // Show full header if:
      // 1. Scrolled more than 50vh, OR
      // 2. Scrolling up (and past initial threshold)
      const scrollingUp = currentScrollY < lastScrollY && currentScrollY > 100;
      const pastHalfway = currentScrollY > vh50;
      
      setShowFullHeader(pastHalfway || scrollingUp);
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

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
      {/* Persistent Elements for Landing Page */}
      <AnimatePresence mode="wait">
        {/* Persistent Logo - Only visible when header is hidden on landing */}
        {pathname === '/' && shouldHideHeader && (
          <motion.div
            key="persistent-logo"
            className="fixed top-4 left-6 z-[60]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="group relative"
              whileHover={{
                x: [0, -0.5, 0.5, -0.3, 0.3, 0],
                y: [0, -0.3, 0.3, -0.2, 0.2, 0]
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              <Link href="/" className="group relative">
                <motion.div
                  className="flex items-center justify-center space-x-3 px-4 py-2.5 bg-primary-main/20 backdrop-blur-sm rounded-full border border-white/10 shadow-lg group-hover:shadow-primary-main/25 group-hover:shadow-xl transition-all duration-300 relative"
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    whileHover={{
                      scale: [1, 1.2, 0.9, 1.1, 1],
                      rotate: [0, -5, 5, -2, 0],
                      filter: [
                        "brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0))",
                        "brightness(1.3) drop-shadow(0 0 8px rgba(139, 92, 246, 0.8))",
                        "brightness(1.1) drop-shadow(0 0 4px rgba(139, 92, 246, 0.6))",
                        "brightness(1.2) drop-shadow(0 0 6px rgba(139, 92, 246, 0.7))",
                        "brightness(1) drop-shadow(0 0 0px rgba(139, 92, 246, 0))"
                      ]
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut"
                    }}
                  >
                    <Zap className="w-5 h-5 text-primary-main group-hover:text-primary-light transition-colors duration-300" />
                  </motion.div>
                  <span className="text-xl font-bold text-text-primary group-hover:text-primary-light relative">
                    FlowDrop
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-[2px] text-primary-main -z-10 -translate-y-[2px] transition-all duration-400" aria-hidden="true">FlowDrop</div>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary-main/0 group-hover:bg-primary-main/5 group-hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.25)] -z-10 transition-all duration-400" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        )}

        {/* Sticky Login/Logout Button - Only visible when header is hidden on landing */}
        {pathname === '/' && !loading && shouldHideHeader && (
          <motion.div
            key="sticky-auth"
            className="fixed top-4 right-6 z-[60]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-text-secondary bg-background-glass/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  👋 {user.email?.split('@')[0]}
                </span>
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSignOut}
                  className="btn-liquid shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 text-white font-semibold"
                >
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="flex items-center gap-1.5"
                      initial="default"
                      whileHover="hover"
                      animate="default"
                      variants={{
                        default: { x: 0 },
                        hover: { x: -2 }
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <span>Sign Out</span>
                      <motion.span
                        className="flex items-center overflow-hidden"
                        variants={{
                          default: { width: 0, opacity: 0, marginLeft: 0 },
                          hover: { width: 20, opacity: 1, marginLeft: 6 }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ display: 'inline-flex' }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.div>
                  </div>
                </Button>
              </div>
            ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.location.href = '/signin'}
              className="shadow-lg backdrop-blur-sm group relative overflow-hidden px-3"
            >
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="flex items-center gap-1.5 px-2"
                  initial="default"
                  whileHover="hover"
                  animate="default"
                  variants={{
                    default: { x: 0 },
                    hover: { x: 0 }
                  }}
                >
                  <span>Login</span>
                  <motion.div
                    variants={{
                      default: { width: 0, opacity: 0, marginLeft: -4 },
                      hover: { width: "auto", opacity: 1, marginLeft: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.div>
              </div>
            </Button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-30 transition-all duration-300',
          shouldHideHeader 
            ? 'opacity-0 pointer-events-none' 
            : isScrolled
              ? 'bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm'
              : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16"> {/* 64px height */}
            {/* Logo */}
            <motion.div
              className="group relative"
              whileHover={{
                x: [0, -0.5, 0.5, -0.3, 0.3, 0],
                y: [0, -0.3, 0.3, -0.2, 0.2, 0]
              }}
              transition={{
                duration: 0.6,
                ease: "easeInOut"
              }}
            >
              <Link href="/" className="group relative">
                <motion.div
                  className="flex items-center justify-center space-x-3 px-4 py-2.5 bg-primary-main/20 backdrop-blur-sm rounded-full border border-white/10 shadow-lg group-hover:shadow-primary-main/25 group-hover:shadow-xl transition-all duration-300 relative"
                  whileHover={{ 
                    scale: 1.05,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Zap className="w-5 h-5 text-primary-main group-hover:text-primary-light transition-colors duration-300" />
                  <span className="text-xl font-bold text-text-primary group-hover:text-primary-light relative">
                    FlowDrop
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-[2px] text-primary-main -z-10 -translate-y-[2px] transition-all duration-300" aria-hidden="true">FlowDrop</div>
                  </span>
                  <div className="absolute inset-0 rounded-full bg-primary-main/0 group-hover:bg-primary-main/5 group-hover:shadow-[0_0_15px_5px_rgba(139,92,246,0.25)] -z-10 transition-all duration-300" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
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

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {!loading && (
                <>
                  {user ? (
                    <>
                      <span className="text-sm text-text-secondary bg-background-glass/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                        👋 Hey, {user.email?.split('@')[0]}!
                      </span>
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={handleSignOut}
                        icon={<LogOut className="w-4 h-4" />}
                        iconPosition="left"
                        className="btn-liquid shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 text-white font-semibold"
                      >
                        <div className="relative flex items-center justify-center">
                          <motion.div
                            className="flex items-center gap-1.5"
                            initial="default"
                            whileHover="hover"
                            animate="default"
                            variants={{
                              default: { x: 0 },
                              hover: { x: -2 }
                            }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            <span>Sign Out</span>
                            <motion.span
                              className="flex items-center overflow-hidden"
                              variants={{
                                default: { width: 0, opacity: 0, marginLeft: 0 },
                                hover: { width: 20, opacity: 1, marginLeft: 6 }
                              }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              style={{ display: 'inline-flex' }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.span>
                          </motion.div>
                        </div>
                      </Button>
                    </>
                  ) : (
                    <>
                      {/* Highlighted Get Started Button */}
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => window.location.href = '/signin'}
                        className="btn-liquid shadow-lg shadow-primary-main/25 ring-2 ring-primary-main/20 group relative overflow-hidden px-3 text-white font-semibold"
                      >
                        <div className="relative flex items-center justify-center">
                          <motion.div
                            className="flex items-center gap-1.5 px-2"
                            initial="default"
                            whileHover="hover"
                            animate="default"
                            variants={{
                              default: { x: 0 },
                              hover: { x: 0 }
                            }}
                          >
                            <span>Get Started</span>
                            <motion.div
                              variants={{
                                default: { width: 0, opacity: 0, marginLeft: -4 },
                                hover: { width: "auto", opacity: 1, marginLeft: 0 }
                              }}
                              transition={{ duration: 0.3 }}
                              style={{ overflow: "hidden" }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </Button>
                      {/* Login Button */}
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.location.href = '/signin'}
                        className="group relative overflow-hidden px-3"
                      >
                        <div className="relative flex items-center justify-center">
                          <motion.div
                            className="flex items-center gap-1.5 px-2"
                            initial="default"
                            whileHover="hover"
                            animate="default"
                            variants={{
                              default: { x: 0 },
                              hover: { x: 0 }
                            }}
                          >
                            <span>Login</span>
                            <motion.div
                              variants={{
                                default: { width: 0, opacity: 0, marginLeft: -4 },
                                hover: { width: "auto", opacity: 1, marginLeft: 0 }
                              }}
                              transition={{ duration: 0.3 }}
                              style={{ overflow: "hidden" }}
                            >
                              <ArrowRight className="w-4 h-4" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </Button>
                    </>
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
                    const isActive = pathname === item.href && !item.external;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          'text-text-secondary transition-all duration-200 py-2',
                          'not-button-link',
                          isActive && 'text-text-primary'
                        )}
                        {...(item.external && { target: "_blank", rel: "noopener noreferrer" })}
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
                            <span className="text-sm text-text-secondary bg-background-glass/50 backdrop-blur-sm px-3 py-2 rounded-full border border-white/10 text-center">
                              👋 Hey, {user.email?.split('@')[0]}!
                            </span>
                            <Button
                              variant="primary"
                              size="sm"
                              className="w-full btn-liquid shadow-lg shadow-primary-main/25 text-white font-semibold"
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
                          <div className="flex flex-col space-y-3">
                            {/* Highlighted Get Started Button */}
                            <Button
                              variant="primary"
                              size="sm"
                              className="w-full btn-liquid shadow-lg shadow-primary-main/25 text-white font-semibold"
                              onClick={() => {
                                window.location.href = '/signin';
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              Get Started
                            </Button>
                            {/* Login Button */}
                            <Button
                              variant="secondary"
                              size="sm"
                              className="w-full"
                              onClick={() => {
                                window.location.href = '/signin';
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              Login
                            </Button>
                          </div>
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