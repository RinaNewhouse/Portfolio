/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#ffe6f0',
          100: '#ffb3cc',
          200: '#ff80a6',
          300: '#ff4d80',
          400: '#ff1a59',
          500: '#ff0066',   // your main pink
          600: '#e6005c',   // slightly darker for hover
          700: '#b30047',
          800: '#800032',
          900: '#4d001f',
        },
        dark: '#1a1a1a',
        light: '#f8f9fa',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}