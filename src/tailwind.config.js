/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",   // ← REQUIRED for dark/light toggle
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:   "#6366f1",
        secondary: "#8b5cf6",
        dark:      "#0a0a0f",
        card:      "#12121a",
      },
    },
  },
  plugins: [],
};