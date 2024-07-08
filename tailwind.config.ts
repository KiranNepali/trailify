import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
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
          50: "#fbf5ef",
          100: "#f2e5d3",
          200: "#e4c8a3",
          300: "#d6a873",
          400: "#cc8d53",
          500: "#b76b3a",
          600: "#ab5834",
          700: "#8f412e",
          800: "#75362b",
          900: "#612d26",
          950: "#371511",
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
