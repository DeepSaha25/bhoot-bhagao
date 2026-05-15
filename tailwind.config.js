/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 32px rgba(245, 158, 11, 0.25)',
        serene: '0 24px 80px rgba(14, 165, 233, 0.16)',
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        14: '0.14',
        16: '0.16',
        18: '0.18',
        24: '0.24',
        28: '0.28',
        32: '0.32',
        34: '0.34',
        35: '0.35',
        42: '0.42',
        45: '0.45',
        48: '0.48',
        55: '0.55',
        58: '0.58',
        62: '0.62',
        64: '0.64',
        66: '0.66',
        72: '0.72',
        78: '0.78',
        82: '0.82',
        88: '0.88',
      },
      keyframes: {
        breathe: {
          '0%, 100%': { transform: 'scale(0.82)', opacity: '0.75' },
          '50%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
          '50%': { transform: 'translate3d(0, -14px, 0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        breathe: 'breathe 6s ease-in-out infinite',
        float: 'float 7s ease-in-out infinite',
        shimmer: 'shimmer 9s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};
