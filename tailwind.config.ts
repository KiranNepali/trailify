import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // WHITE
        // brown
        // primary: {
        //   50: "#F9F7F4",
        //   100: "#F3EEEA",
        //   200: "#E2D5CA",
        //   300: "#D1BCAA",
        //   400: "#AE896A",
        //   500: "#8B572A",
        //   600: "#7D4E26",
        //   700: "#533419",
        //   800: "#3F2713",
        //   900: "#2A1A0D",
        // },
        primary: {
          50: '#fffdf2',
          100: '#fffbe8',
          200: '#fcf1c2',
          300: '#fae69d',
          400: '#f7cc57',
          500: '#f6ae12',
          600: '#db930d',
          700: '#b87209',
          800: '#945406',
          900: '#6e3803',
          950: '#472001',
        },
        // BLACK
        secondary: {
          50: "#F3F3F3",
          100: "#E6E6E6",
          200: "#C1C1C1",
          300: "#9B9B9B",
          400: "#505050",
          500: "#050505",
          600: "#050505",
          700: "#030303",
          800: "#020202",
          900: "#020202",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
