/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ice: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#00b4ff',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        cyber: {
          dark: '#030712',
          navy: '#060f24',
          surface: '#091530',
          border: 'rgba(0, 180, 255, 0.28)',
          glow: 'rgba(0, 180, 255, 0.45)',
        }
      },
      fontFamily: {
        sans: ['Heebo', 'Rubik', 'sans-serif'],
        display: ['Orbitron', 'sans-serif'],
        gaming: ['Rajdhani', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        glowPulse: {
          '0%, 100%': {
            filter: 'drop-shadow(0 0 15px rgba(0, 180, 255, 0.5)) drop-shadow(0 0 35px rgba(0, 150, 255, 0.25))'
          },
          '50%': {
            filter: 'drop-shadow(0 0 25px rgba(0, 210, 255, 0.75)) drop-shadow(0 0 55px rgba(0, 180, 255, 0.45))'
          }
        }
      }
    },
  },
  plugins: [],
}
