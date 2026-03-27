import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium luxury colors based on design system
        luxury: {
          black: '#0F0F0F',
          charcoal: '#1A1A1A',
          deep: '#2D2D2D',
        },
        wedding: {
          gold: '#D4AF37',
          maroon: '#800020',
          copper: '#B87333',
          rose: '#8B4653',
        },
        neutral: {
          cream: '#F9F7F4',
          light: '#E8E6E1',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Bodoni MT', 'serif'],
        sans: ['Inter', 'DM Sans', 'sans-serif'],
        tamil: ['Noto Sans Tamil', 'sans-serif'],
      },
      fontSize: {
        h1: ['56px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['42px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['32px', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        sm: ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in',
        'slide-in': 'slideIn 0.8s ease-out',
        'parallax': 'parallax 20s linear infinite',
        'glow': 'glow 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        parallax: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 100px' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.8)' },
        },
      },
      backdropBlur: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
};

export default config;
