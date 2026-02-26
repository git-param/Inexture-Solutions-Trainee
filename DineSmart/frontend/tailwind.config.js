/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#E10600",
        "accent-orange": "#FF7A00",
        "background-light": "#f8f6f6",
        "background-dark": "#121212",
        "card-dark": "#1E1E1E",
      },
      fontFamily: {
        display: ["Inter", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.75rem",
        xl: "1.5rem",
        full: "9999px",
      },
    },
  },
  plugins: [],
}