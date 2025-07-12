/**
 * Performance Detection and Adaptive Settings
 * Detects device capabilities and provides optimized settings for animations
 */

interface PerformanceSettings {
  reduceMotion: boolean;
  deviceTier: 'low' | 'medium' | 'high';
  animationLevel: 'minimal' | 'reduced' | 'full';
  raindropCount: number;
  enableParticles: boolean;
  enableBlur: boolean;
  enableComplexAnimations: boolean;
  frameRate: number;
}

class PerformanceManager {
  private settings: PerformanceSettings;
  private performanceObserver: PerformanceObserver | null = null;
  private frameCount = 0;
  private lastTime = 0;
  private fps = 60;
  private isInitialized = false;

  constructor() {
    // Initialize with default settings for SSR
    this.settings = {
      reduceMotion: false,
      deviceTier: 'medium',
      animationLevel: 'reduced',
      raindropCount: 80,
      enableParticles: true,
      enableBlur: true,
      enableComplexAnimations: false,
      frameRate: 60
    };
  }

  public initialize() {
    if (this.isInitialized || typeof window === 'undefined') return;
    
    this.settings = this.detectPerformanceSettings();
    this.startPerformanceMonitoring();
    this.isInitialized = true;
  }

  private detectPerformanceSettings(): PerformanceSettings {
    // Check for reduced motion preference
    const reduceMotion = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;
    
    // Detect device capabilities
    const deviceTier = this.detectDeviceTier();
    
    // Determine animation level
    const animationLevel = reduceMotion ? 'minimal' : this.getAnimationLevel(deviceTier);
    
    return {
      reduceMotion,
      deviceTier,
      animationLevel,
      raindropCount: this.getRaindropCount(deviceTier, animationLevel),
      enableParticles: animationLevel !== 'minimal',
      enableBlur: deviceTier !== 'low' && animationLevel !== 'minimal',
      enableComplexAnimations: deviceTier === 'high' && animationLevel === 'full',
      frameRate: deviceTier === 'low' ? 30 : 60
    };
  }

  private detectDeviceTier(): 'low' | 'medium' | 'high' {
    if (typeof window === 'undefined' || typeof navigator === 'undefined') {
      return 'medium'; // Default for SSR
    }
    
    // Check hardware concurrency (CPU cores)
    const cores = navigator.hardwareConcurrency || 4;
    
    // Check memory (if available)
    const memory = (navigator as any).deviceMemory || 4;
    
    // Check screen resolution
    const screenArea = window.screen.width * window.screen.height;
    const pixelRatio = window.devicePixelRatio || 1;
    
    // Check if mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Check connection speed (if available)
    const connection = (navigator as any).connection;
    const isSlowConnection = connection && (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g');
    
    // Scoring system
    let score = 0;
    
    // CPU score
    if (cores >= 8) score += 3;
    else if (cores >= 4) score += 2;
    else score += 1;
    
    // Memory score
    if (memory >= 8) score += 3;
    else if (memory >= 4) score += 2;
    else score += 1;
    
    // Screen score
    if (screenArea * pixelRatio > 2073600) score += 2; // > 1920x1080
    else if (screenArea * pixelRatio > 921600) score += 1; // > 1280x720
    
    // Device type penalty
    if (isMobile) score -= 1;
    
    // Connection penalty
    if (isSlowConnection) score -= 2;
    
    // Determine tier
    if (score >= 7) return 'high';
    if (score >= 4) return 'medium';
    return 'low';
  }

  private getAnimationLevel(deviceTier: 'low' | 'medium' | 'high'): 'minimal' | 'reduced' | 'full' {
    switch (deviceTier) {
      case 'low': return 'minimal';
      case 'medium': return 'reduced';
      case 'high': return 'full';
    }
  }

  private getRaindropCount(deviceTier: 'low' | 'medium' | 'high', animationLevel: 'minimal' | 'reduced' | 'full'): number {
    if (animationLevel === 'minimal') return 0;
    
    const baseCount = {
      low: 30,
      medium: 80,
      high: 150
    }[deviceTier];
    
    // Adjust based on screen size
    const screenMultiplier = typeof window !== 'undefined' ? Math.min(window.innerWidth / 1920, 1.5) : 1;
    
    return Math.floor(baseCount * screenMultiplier);
  }

  private startPerformanceMonitoring() {
    if (typeof window === 'undefined') return;
    
    // Monitor FPS
    const measureFPS = () => {
      const now = performance.now();
      this.frameCount++;
      
      if (now - this.lastTime >= 1000) {
        this.fps = Math.round((this.frameCount * 1000) / (now - this.lastTime));
        this.frameCount = 0;
        this.lastTime = now;
        
        // Adjust settings based on performance
        this.adjustSettingsBasedOnPerformance();
      }
      
      requestAnimationFrame(measureFPS);
    };
    
    requestAnimationFrame(measureFPS);

    // Monitor long tasks (if supported)
    if ('PerformanceObserver' in window) {
      try {
        this.performanceObserver = new PerformanceObserver((list) => {
          const longTasks = list.getEntries().filter(entry => entry.duration > 50);
          if (longTasks.length > 0) {
            this.handlePerformanceIssue();
          }
        });
        
        this.performanceObserver.observe({ entryTypes: ['longtask'] });
      } catch (e) {
        // Long task API not supported
      }
    }
  }

  private adjustSettingsBasedOnPerformance() {
    // If FPS drops below threshold, reduce animation complexity
    if (this.fps < 30 && this.settings.animationLevel !== 'minimal') {
      console.log('Performance degradation detected, reducing animations');
      
      if (this.settings.animationLevel === 'full') {
        this.settings.animationLevel = 'reduced';
        this.settings.raindropCount = Math.floor(this.settings.raindropCount * 0.6);
        this.settings.enableComplexAnimations = false;
      } else if (this.settings.animationLevel === 'reduced') {
        this.settings.animationLevel = 'minimal';
        this.settings.raindropCount = 0;
        this.settings.enableParticles = false;
        this.settings.enableBlur = false;
      }
      
      // Dispatch event for components to react
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('performance-settings-changed', {
          detail: this.settings
        }));
      }
    }
  }

  private handlePerformanceIssue() {
    // Immediate performance issue detected
    if (this.settings.raindropCount > 50) {
      this.settings.raindropCount = Math.floor(this.settings.raindropCount * 0.7);
      
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new CustomEvent('performance-settings-changed', {
          detail: this.settings
        }));
      }
    }
  }

  public getSettings(): PerformanceSettings {
    return { ...this.settings };
  }

  public updateSettings(newSettings: Partial<PerformanceSettings>) {
    this.settings = { ...this.settings, ...newSettings };
    
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('performance-settings-changed', {
        detail: this.settings
      }));
    }
  }

  public getCurrentFPS(): number {
    return this.fps;
  }

  public destroy() {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
  }
}

// Singleton instance
let performanceManager: PerformanceManager | null = null;

export const getPerformanceManager = (): PerformanceManager => {
  if (!performanceManager) {
    performanceManager = new PerformanceManager();
  }
  return performanceManager;
};

// React hook for using performance settings
export const usePerformanceSettings = () => {
  const [settings, setSettings] = React.useState<PerformanceSettings>(() => 
    getPerformanceManager().getSettings()
  );

  React.useEffect(() => {
    // Initialize performance manager on client side
    const manager = getPerformanceManager();
    manager.initialize();
    
    const handleSettingsChange = (event: CustomEvent<PerformanceSettings>) => {
      setSettings(event.detail);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('performance-settings-changed', handleSettingsChange as EventListener);
      
      return () => {
        window.removeEventListener('performance-settings-changed', handleSettingsChange as EventListener);
      };
    }
  }, []);

  return settings;
};

// Utility functions
export const shouldReduceMotion = (): boolean => {
  return getPerformanceManager().getSettings().reduceMotion;
};

export const getAnimationLevel = (): 'minimal' | 'reduced' | 'full' => {
  return getPerformanceManager().getSettings().animationLevel;
};

export const getRaindropCount = (): number => {
  return getPerformanceManager().getSettings().raindropCount;
};

export const shouldEnableBlur = (): boolean => {
  return getPerformanceManager().getSettings().enableBlur;
};

export const shouldEnableComplexAnimations = (): boolean => {
  return getPerformanceManager().getSettings().enableComplexAnimations;
};

// Add React import
import React from 'react'; 