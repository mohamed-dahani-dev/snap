/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        almostGray: "#696969",
        almostBlack: "#141414",
      },
    },
  },
  plugins: [],
};
