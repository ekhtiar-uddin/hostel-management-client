/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: "'Outfit', sans-serif",
      },
      screens: {
        "3xs": "328px", // --breakpoint-3xs
        "2xs": "410px", // --breakpoint-2xs
        xs: "512px", // --breakpoint-xs
        sm: "640px", // --breakpoint-sm
        "2sm": "704px", // --breakpoint-2sm
        md: "768px", // --breakpoint-md
        "2md": "832px", // --breakpoint-2md
        lg: "1024px", // --breakpoint-lg
        "2lg": "1120px", // --breakpoint-2lg
        cw: "1480px", // --breakpoint-cw
        xl: "1280px", // --breakpoint-xl
        "2xl": "1536px", // --breakpoint-2xl
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
