/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  // Activer le mode sombre basé sur la classe (géré par React)
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
};

