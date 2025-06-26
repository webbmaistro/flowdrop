// Design system tokens and utilities
// This file centralizes all styling constants to prevent conflicts

export const colors = {
  // Background colors
  background: {
    main: '#1A1A1D',
    card: '#23232A',
    footer: '#18181B',
    glass: 'rgba(255, 255, 255, 0.05)',
  },
  
  // Text colors
  text: {
    primary: '#FFFFFF',
    secondary: '#D1D5DB',
    muted: '#A1A1AA',
  },
  
  // Primary brand colors
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',
    500: '#a855f7',
    600: '#9333ea',
    700: '#7c3aed',
    800: '#6b21a8',
    900: '#581c87',
    main: '#8B5CF6',
    hover: '#7C3AED',
    dark: '#6D28D9',
  },
  
  // Neutral colors
  gray: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
  
  // Semantic colors
  success: {
    50: '#f0fdf4',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
  },
  
  warning: {
    50: '#fffbeb',
    500: '#f59e0b',
    600: '#d97706',
    700: '#b45309',
  },
  
  error: {
    50: '#fef2f2',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
  },
  
  // Border colors
  border: {
    primary: '#27272A',
    secondary: '#374151',
  },
} as const;

export const spacing = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
  '3xl': '4rem',
  '4xl': '6rem',
  '5xl': '8rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.125rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
} as const;

// Glassmorphism utilities
export const glassmorphism = {
  light: 'bg-white/5 backdrop-blur-lg border border-white/10',
  medium: 'bg-white/10 backdrop-blur-xl border border-white/20',
  heavy: 'bg-white/15 backdrop-blur-2xl border border-white/30',
} as const;

// Common component variants
export const buttonVariants = {
  primary: 'bg-primary-main hover:bg-primary-hover text-white font-medium rounded-xl px-6 py-3 transition-all duration-300 shadow-lg hover:shadow-xl focus:ring-2 focus:ring-primary-main focus:ring-offset-2 focus:ring-offset-background-main group',
  secondary: 'bg-background-card hover:bg-background-glass text-text-primary font-medium rounded-xl px-6 py-3 transition-all duration-300 border border-border-primary hover:border-primary-main focus:ring-2 focus:ring-primary-main focus:ring-offset-2 focus:ring-offset-background-main group',
  outline: 'border-2 border-primary-main hover:bg-primary-main text-primary-main hover:text-white font-medium rounded-xl px-6 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary-main focus:ring-offset-2 focus:ring-offset-background-main group',
  ghost: 'hover:bg-background-glass text-text-secondary hover:text-text-primary font-medium rounded-xl px-6 py-3 transition-all duration-300 focus:ring-2 focus:ring-primary-main focus:ring-offset-2 focus:ring-offset-background-main group',
} as const;

export const inputVariants = {
  default: 'w-full px-4 py-3 bg-background-card border border-border-primary rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-all duration-200 text-text-primary placeholder:text-text-muted',
  error: 'w-full px-4 py-3 bg-background-card border border-error-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-error-500 focus:border-transparent transition-all duration-200 text-text-primary placeholder:text-text-muted',
  glass: 'w-full px-4 py-3 bg-background-glass backdrop-blur-lg border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-main focus:border-transparent transition-all duration-200 text-text-primary placeholder:text-text-muted',
} as const;

export const cardVariants = {
  default: 'bg-background-card rounded-2xl border border-border-primary shadow-lg p-6',
  glass: 'bg-background-glass backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl p-6',
  elevated: 'bg-background-card rounded-2xl border border-border-primary shadow-2xl p-6',
} as const;

// Animation utilities
export const animations = {
  fadeIn: 'animate-fade-in',
  slideUp: 'animate-slide-up',
  scaleIn: 'animate-in zoom-in-95 duration-200',
  slideInFromBottom: 'animate-in slide-in-from-bottom-4 duration-300',
  slideInFromTop: 'animate-in slide-in-from-top-4 duration-300',
} as const;

// Responsive breakpoints (matching Tailwind defaults)
export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// Typography scale
export const typography = {
  h1: 'text-4xl md:text-6xl font-bold text-text-primary',
  h2: 'text-3xl md:text-4xl font-bold text-text-primary',
  h3: 'text-2xl md:text-3xl font-semibold text-text-primary',
  h4: 'text-xl md:text-2xl font-semibold text-text-primary',
  body: 'text-base text-text-secondary',
  bodyLarge: 'text-lg text-text-secondary',
  bodySmall: 'text-sm text-text-muted',
  caption: 'text-xs text-text-muted',
} as const;

// Utility function to generate CSS custom properties
export function generateCSSVariables() {
  const variables: Record<string, string> = {};
  
  // Generate color variables
  Object.entries(colors).forEach(([colorName, colorShades]) => {
    if (typeof colorShades === 'object' && colorShades !== null) {
      Object.entries(colorShades).forEach(([shade, value]) => {
        variables[`--color-${colorName}-${shade}`] = value;
      });
    }
  });
  
  // Generate spacing variables
  Object.entries(spacing).forEach(([name, value]) => {
    variables[`--spacing-${name}`] = value;
  });
  
  // Generate border radius variables
  Object.entries(borderRadius).forEach(([name, value]) => {
    variables[`--radius-${name}`] = value;
  });
  
  // Generate shadow variables
  Object.entries(shadows).forEach(([name, value]) => {
    variables[`--shadow-${name}`] = value;
  });
  
  return variables;
} 