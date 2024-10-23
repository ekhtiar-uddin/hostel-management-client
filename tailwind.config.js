/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif ",
      },
      colors: {
        p1: "#EB3656",
        p2: "#BFFCF9",
      },
    },
  },
  plugins: [require("daisyui")],
};
