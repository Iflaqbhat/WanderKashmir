/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#a5b4fc', // indigo-300
          DEFAULT: '#6366f1', // indigo-500
          dark: '#3730a3', // indigo-800
        },
        accent: {
          light: '#6ee7b7', // emerald-300
          DEFAULT: '#10b981', // emerald-500
          dark: '#065f46', // emerald-900
        },
        surface: {
          light: '#f1f5f9', // slate-100
          DEFAULT: '#334155', // slate-700
          dark: '#0f172a', // slate-900
        },
        rose: {
          light: '#fda4af', // rose-300
          DEFAULT: '#f43f5e', // rose-500
          dark: '#881337', // rose-900
        },
        glass: 'rgba(255,255,255,0.6)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        soft: '0 2px 8px 0 rgba(60,60,60,0.10)',
      },
      borderRadius: {
        xl: '1.5rem',
        '2xl': '2rem',
      },
      fontFamily: {
        sans: ['Inter', 'Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
