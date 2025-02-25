/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#1a202c", // Deep gray-blue for background
        "dark-card": "#2d3748", // Lighter gray for cards
        "dark-accent": "#4a5568", // Accent for inputs/buttons
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
