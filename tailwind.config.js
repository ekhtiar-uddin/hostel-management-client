/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: "'Outfit', sans-serif ",
      },
      colors: {
        p1: "#42b0d1",
        p2: "#BFFCF9",
        p3: "#2c344b",
        p4: "#000000",
        p5: "#ffffff",
        p6: "#21293c",
        d1: "#1c2230",
        d2: "#252b43",
        b1: "#b75cff",
        c1: "#21293c",
      },
    },
  },
  plugins: [require("daisyui")],
};
