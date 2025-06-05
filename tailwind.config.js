/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#121212',
        foreground: '#f5f5f5',
        accent: '#FF4D00',
        
        // Additional color ramps
        primary: {
          50: '#fff0eb',
          100: '#ffe1d7',
          200: '#ffc3af',
          300: '#ffa587',
          400: '#ff875f',
          500: '#ff6937',
          600: '#ff4d00', // Accent color
          700: '#cc3e00',
          800: '#992f00',
          900: '#662000',
        },
        secondary: {
          50: '#f0f0f0',
          100: '#e0e0e0',
          200: '#c2c2c2',
          300: '#a3a3a3',
          400: '#858585',
          500: '#666666',
          600: '#484848',
          700: '#2a2a2a',
          800: '#1f1f1f',
          900: '#121212', // Background color
        },
        success: {
          500: '#10b981',
          600: '#059669',
        },
        warning: {
          500: '#f59e0b',
          600: '#d97706',
        },
        error: {
          500: '#ef4444',
          600: '#dc2626',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
        slideUp: 'slideUp 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};