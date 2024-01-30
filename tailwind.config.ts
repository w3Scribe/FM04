import type { Config } from "tailwindcss";

const colors = {
  "light-pink": "#f9f0ff",
  "grayish-purple": "#8c6991",
  "dark-purple": "#2f1533",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "work-sans": "'Work Sans', sans-serif",
      },
      backgroundImage: {
        desk: 'url("/bg-desk.svg")',
        mobile: 'url("/bg-mobile.svg")',
      },
      backgroundColor: colors,
      textColor: colors,
      boxShadowColor: colors
    },
  },
  plugins: [],
};
export default config;
