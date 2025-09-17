"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { LogOut, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui';
import UserGreeting from './UserGreeting';

interface AuthButtonsProps {
  user: any;
  loading: boolean;
  onSignOut: () => void;
  className?: string;
}

export default function AuthButtons({ user, loading, onSignOut, className = "" }: AuthButtonsProps) {
  if (loading) return null;

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {user ? (
        <>
          <UserGreeting email={user.email} />
          <Button
            variant="primary"
            size="sm"
            onClick={onSignOut}
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
        <Button
          variant="primary"
          size="sm"
          onClick={() => window.location.href = '/signin'}
          className="shadow-lg backdrop-blur-sm group relative overflow-hidden px-3 btn-liquid hover:text-white transition-all duration-300"
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
    </div>
  );
}
