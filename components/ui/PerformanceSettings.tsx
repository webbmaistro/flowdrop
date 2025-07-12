"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Zap, Gauge, Eye, EyeOff } from 'lucide-react';
import { usePerformanceSettings, getPerformanceManager } from '@/lib/performance';
import { Button } from './button';
import { cn } from '@/lib/utils';

export default function PerformanceSettings() {
  const [isOpen, setIsOpen] = useState(false);
  const performanceSettings = usePerformanceSettings();
  const performanceManager = getPerformanceManager();

  const handleAnimationLevelChange = (level: 'minimal' | 'reduced' | 'full') => {
    performanceManager.updateSettings({
      animationLevel: level,
      enableParticles: level !== 'minimal',
      enableBlur: level !== 'minimal',
      enableComplexAnimations: level === 'full',
      raindropCount: level === 'minimal' ? 0 : 
                    level === 'reduced' ? 50 : 
                    150
    });
  };

  const animationLevels = [
    {
      id: 'minimal',
      name: 'Minimal',
      description: 'Best performance, minimal animations',
      icon: Gauge,
      color: 'text-green-400'
    },
    {
      id: 'reduced',
      name: 'Reduced',
      description: 'Balanced performance and visuals',
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      id: 'full',
      name: 'Full',
      description: 'Maximum visual effects',
      icon: Eye,
      color: 'text-purple-400'
    }
  ] as const;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 bg-background-card/95 backdrop-blur-sm border border-white/10 rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">Performance Settings</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Gauge className="w-4 h-4" />
                <span>{Math.round(performanceManager.getCurrentFPS())} FPS</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Animation Level
                </label>
                <div className="space-y-2">
                  {animationLevels.map((level) => {
                    const Icon = level.icon;
                    const isActive = performanceSettings.animationLevel === level.id;
                    
                    return (
                      <button
                        key={level.id}
                        onClick={() => handleAnimationLevelChange(level.id)}
                        className={cn(
                          "w-full flex items-center gap-3 p-3 rounded-lg border transition-all duration-200",
                          isActive 
                            ? "bg-primary-main/20 border-primary-main/50 text-white" 
                            : "bg-background-glass/50 border-white/10 text-gray-300 hover:bg-background-glass/80"
                        )}
                      >
                        <Icon className={cn("w-5 h-5", isActive ? "text-primary-main" : level.color)} />
                        <div className="flex-1 text-left">
                          <div className="font-medium">{level.name}</div>
                          <div className="text-sm text-gray-400">{level.description}</div>
                        </div>
                        {isActive && (
                          <div className="w-2 h-2 bg-primary-main rounded-full"></div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              <div className="pt-3 border-t border-white/10">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-300">Device Tier:</span>
                  <span className="text-white capitalize">{performanceSettings.deviceTier}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-300">Raindrops:</span>
                  <span className="text-white">{performanceSettings.raindropCount}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-1">
                  <span className="text-gray-300">Blur Effects:</span>
                  <span className="text-white">{performanceSettings.enableBlur ? 'On' : 'Off'}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="secondary"
        size="sm"
        className={cn(
          "rounded-full w-12 h-12 p-0 shadow-lg backdrop-blur-sm",
          isOpen ? "bg-primary-main/20 border-primary-main/50" : "bg-background-glass/50 border-white/10"
        )}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Settings className="w-5 h-5" />
        </motion.div>
      </Button>
    </div>
  );
} 