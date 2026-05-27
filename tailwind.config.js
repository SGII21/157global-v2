/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        stone: "#E3E3DF",
        ink: "#232320",
        muted: "#7A7670",
        accent: "#8C7355",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans: ["Inter", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
