import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        red: {
          primary: "rgb(70 2 12)",
          secondary: "rgb(35 11 15)",
          border: "rgb(93 39 49)",
          focus: "rgb(131 58 71)"
        },
        blue: "rgb(26 29 33)"
      },
      white: "rgb(248 248 248)",
      black: "rgb(26 29 33)",
      gray: "rgb(34 37 41)",
      orange: "rgb(124 53 37)"
    },
  },
  plugins: [],
};
export default config;
