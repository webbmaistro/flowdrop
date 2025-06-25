import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#1A1A1D',
          secondary: '#23232A',
          footer: '#18181B',
        },
        accent: '#8B5CF6',
        'accent-hover': '#6D28D9',
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
        },
        border: '#27272A',
        error: '#EF4444',
        success: '#22C55E',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,0,0,0.37)',
      },
      borderRadius: {
        xl2: '1.5rem',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.btn-primary': {
          '@apply inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition text-white bg-accent rounded-full hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent': {},
        },
        '.card-glass': {
          '@apply bg-white/5 backdrop-blur-lg rounded-2xl shadow-glass border border-border/60': {},
        },
      });
    }),
  ],
};

export default config; 