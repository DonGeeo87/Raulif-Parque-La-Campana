/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.tsx",
    "./index.tsx",
    "./constants.ts",
  ],
  theme: {
    extend: {
      colors: {
        'raulif-black': '#000000',
        'raulif-green': '#10b981', // Emerald 500
        'raulif-lime': '#84cc16',  // Lime 500
        'raulif-blue': '#0ea5e9',  // Sky 500
        'raulif-orange': '#f97316', // Orange 500
        'raulif-purple': '#d946ef', // Fuchsia 500
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}

