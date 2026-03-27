/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This scans all your React files
  ],
  darkMode: "class", // Add this while you're here for our Dark Mode logic
  theme: {
    extend: {},
  },
  plugins: [],
};
