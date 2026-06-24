/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Orbitron", "sans-serif"],
      },
      colors: {
        primary: "#F7B610",
      },
    },
  },
  plugins: [],
};
