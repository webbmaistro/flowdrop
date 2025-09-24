"use client"

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu, ArrowRight, LogOut } from 'lucide-react';

const navigation = [
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
  const handleLinkClick = (href: string) => {
    onToggle();
    window.location.href = href;
  };

  const handleSignOut = () => {
    onToggle();
    onSignOut();
  };

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={onToggle}
        className="md:hidden p-2 text-gray-400 hover:text-white"
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[99999] md:hidden"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99999,
              backgroundColor: '#1A1A1D',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)'
            }}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="h-screen flex flex-col bg-background">
              
              {/* Header */}
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                <h2 className="text-xl font-bold text-white">Menu</h2>
                <button
                  onClick={onToggle}
                  className="p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation */}
              <div className="flex-1 px-8 py-6">
                <nav className="space-y-3">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <button
                        key={item.name}
                        onClick={() => handleLinkClick(item.href)}
                        className={`w-full text-center px-6 py-4 rounded-full text-lg font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-purple-500 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-purple-500/10 backdrop-blur-sm'
                        }`}
                      >
                        {item.name}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Auth Section */}
              <div className="px-8 py-6 border-t border-white/10">
                {!loading && (
                  <>
                    {user ? (
                      <div className="space-y-4">
                        {/* User Info */}
                        <div className="flex items-center gap-3 p-4 bg-primary-main/10 backdrop-blur-sm rounded-2xl border border-primary-main/20">
                          <div className="w-12 h-12 bg-primary-main/20 rounded-full flex items-center justify-center">
                            <span className="text-lg font-bold text-primary-main">
                              {user.email?.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-white truncate">
                              {user.email?.split('@')[0]?.charAt(0).toUpperCase() + user.email?.split('@')[0]?.slice(1)}
                            </div>
                            <div className="text-sm text-gray-400 truncate">
                              {user.email}
                            </div>
                          </div>
                        </div>
                        
                        {/* Sign Out */}
                        <button
                          onClick={handleSignOut}
                          className="w-full flex items-center justify-center gap-3 px-6 py-4 text-gray-400 hover:text-white hover:bg-white/10 backdrop-blur-sm rounded-full font-medium transition-all duration-200"
                        >
                          <LogOut className="w-5 h-5" />
                          Sign Out
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <button
                          onClick={() => handleLinkClick('/signin')}
                          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary-main hover:bg-primary-hover text-white rounded-full font-medium shadow-lg shadow-primary-main/25 transition-all duration-200"
                        >
                          <ArrowRight className="w-5 h-5" />
                          Login
                        </button>
                        <p className="text-sm text-gray-400 text-center">
                          Get early access to Flowdrop
                        </p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
