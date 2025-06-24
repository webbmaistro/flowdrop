"use client";
import React, { useEffect, useState } from "react";
import { Zap, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
  { href: "/signin", label: "Sign In" },
];

export default function Header() {
  const [show, setShow] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show header after user scrolls down 1px
    const onScroll = () => {
      setShow(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavigation = (href: string) => {
    if (href.startsWith('#')) {
      // Handle anchor links with smooth scrolling
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else if (href === '/') {
      // Handle home navigation
      if (window.location.pathname === '/') {
        // If already on home page, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        // Navigate to home page
        router.push(href);
      }
    } else {
      // Handle other page navigation
      router.push(href);
    }
    setMobileOpen(false);
  };

  // Animation variants for header
  const headerVariants = {
    hidden: { y: -32, opacity: 0, pointerEvents: "none" },
    visible: { y: 0, opacity: 1, pointerEvents: "auto", transition: { duration: 0.4 } },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.header
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headerVariants}
          className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/60 border-b border-white/10 shadow-lg"
          style={{ WebkitBackdropFilter: "blur(12px)" }}
        >
          <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <button 
              onClick={() => handleNavigation('/')}
              className="flex items-center gap-2 group" 
              aria-label="Go to homepage"
            >
              <span className="p-2 bg-[#8B5CF6] rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <span className="font-bold text-lg tracking-tight text-white">FlowDrop</span>
            </button>
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavigation(link.href)}
                  className="text-white/80 hover:text-[#8B5CF6] font-medium transition-colors px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                  aria-label={`Go to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>
            {/* Mobile Hamburger */}
            <button
              className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </nav>
          {/* Mobile Nav Drawer */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1, transition: { duration: 0.25 } }}
                exit={{ y: -24, opacity: 0, transition: { duration: 0.2 } }}
                className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-4 flex flex-col gap-4"
              >
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavigation(link.href)}
                    className="text-left text-white/90 hover:text-[#8B5CF6] font-medium text-lg transition-colors px-2 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    aria-label={`Go to ${link.label}`}
                  >
                    {link.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {/*
            // Copy/Timing Tweaks:
            // - headerVariants.duration: adjust for faster/slower reveal
            // - NAV_LINKS: add/remove links as needed
            // - Logo: swap Zap for custom SVG if desired
          */}
        </motion.header>
      )}
    </AnimatePresence>
  );
} 