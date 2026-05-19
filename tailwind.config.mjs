import { themeExtend } from "./tokens/tailwind-theme-extend.mjs";

/** @type {import("tailwindcss").Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: themeExtend,
  },
  plugins: [],
};

export default config;
