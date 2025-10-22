"use client"

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui';
import { ArrowRight } from 'lucide-react';
import LogoButton from './header/LogoButton';
import Navigation from './header/Navigation';
import AuthButtons from './header/AuthButtons';
import MobileMenu from './header/MobileMenu';

const supabase = createClient(
  'https://zocqlxonwsvhkamywijo.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvY3FseG9ud3N2aGthbXl3aWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2NTE2NDUsImV4cCI6MjA2NDIyNzY0NX0.sHKkSxqVa8WFvyaPj4z9WStGdDcR0tbaE6Ri1oasC9E'
);


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
  const [isSignOutHovered, setIsSignOutHovered] = useState(false);
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const pathname = usePathname();
  const isDocsPage = pathname.startsWith('/docs');

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
            <LogoButton isHeroVersion={true} />
          </motion.div>
        )}

        {/* Sticky Login/Logout Button - Only visible when header is hidden on landing */}
        {pathname === '/' && !loading && shouldHideHeader && (
          <motion.div
            key="sticky-auth"
            className="fixed top-4 right-6 z-[60] flex items-center h-14"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {user ? (
              <div className="flex items-center gap-3">
                <span className="hidden md:inline text-sm text-text-secondary bg-background-glass/50 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                  👋 Hey, {user.email?.split('@')[0]?.charAt(0).toUpperCase() + user.email?.split('@')[0]?.slice(1)}!
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleSignOut}
                  className="backdrop-blur-sm group relative overflow-hidden px-3 btn-liquid-hover hover:text-white border border-transparent"
                  onHoverStart={() => setIsSignOutHovered(true)}
                  onHoverEnd={() => setIsSignOutHovered(false)}
                >
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      className="flex items-center gap-1.5 px-2"
                      initial="default"
                      animate={isSignOutHovered ? "hover" : "default"}
                      variants={{
                        default: { x: 0 },
                        hover: { x: 0 }
                      }}
                    >
                      <span>Sign Out</span>
                      <motion.div
                        variants={{
                          default: { width: 0, opacity: 0, marginLeft: -4 },
                          hover: { width: "auto", opacity: 1, marginLeft: 0 }
                        }}
                        animate={isSignOutHovered ? "hover" : "default"}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: "hidden" }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                  </div>
                </Button>
              </div>
            ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.location.href = 'https://app.flowdrop.xyz/'}
              className="backdrop-blur-sm group relative overflow-hidden px-3 btn-liquid-hover hover:text-white border border-transparent"
              onHoverStart={() => setIsLoginHovered(true)}
              onHoverEnd={() => setIsLoginHovered(false)}
            >
              <div className="relative flex items-center justify-center">
                <motion.div
                  className="flex items-center gap-1.5 px-2"
                  initial="default"
                  animate={isLoginHovered ? "hover" : "default"}
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
                    animate={isLoginHovered ? "hover" : "default"}
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
            : isDocsPage
              ? 'bg-transparent backdrop-blur-sm'
              : isScrolled
                ? 'bg-gradient-to-b from-black/60 via-black/30 to-transparent backdrop-blur-sm'
                : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative flex items-center justify-between px-6 py-4"> {/* Same as persistent: top-0 + py-4 = 16px */}
            {/* Logo */}
            <LogoButton />

            {/* Desktop Navigation - centered to viewport */}
            <Navigation pathname={pathname} className="md:absolute md:left-1/2 md:-translate-x-1/2 md:z-10" />

            {/* CTA Buttons */}
            <AuthButtons 
              user={user} 
              loading={loading} 
              onSignOut={handleSignOut}
              className="hidden md:flex"
            />

            {/* Mobile Menu */}
            <MobileMenu 
              isOpen={isMobileMenuOpen}
              onToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              pathname={pathname}
              user={user}
              loading={loading}
              onSignOut={handleSignOut}
            />
        </div>
      </motion.header>


    </>
  );
} 