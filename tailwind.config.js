/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: "'Outfit', sans-serif ",
      },
      colors: {
        p1: "#53e6af",
        p2: "#BFFCF9",
        p3: "#2c344b",
        p4: "#000000",
        p5: "#f67e7f",
        p6: "#15273f",
        d1: "#1d2029",
        d2: "#252b43",
        b1: "#198ff5",
      },
    },
  },
  plugins: [require("daisyui")],
};
