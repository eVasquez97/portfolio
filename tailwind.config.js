/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        firaCode: "FiraCode NF",
      },
    },
    screens: {
      showXs: { max: "480px" },
      hideXs: { min: "480px" },
    },
  },
  plugins: [],
};
