"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { SocialLinks } from '@/components/ui';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-50">
      {/* Social Links Section */}
      <section className="py-16 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-300 mb-2">Join Our Community</h3>
              <p className="text-sm text-gray-400">
                Connect with builders, get support, and stay updated on the latest features
              </p>
            </div>
            
            <div>
              <SocialLinks size="md" className="justify-center" />
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Terms Section */}
      <section className="py-10 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
            >
              <a 
                href="/privacy" 
                className="text-sm text-gray-600 hover:text-gray-500 transition-colors duration-200 underline hover:no-underline"
              >
                Privacy Policy
              </a>
              <div className="hidden sm:block text-gray-400">•</div>
              <a 
                href="/terms" 
                className="text-sm text-gray-600 hover:text-gray-500 transition-colors duration-200 underline hover:no-underline"
              >
                Terms of Service
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
