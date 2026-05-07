/** @type {import("tailwindcss").Config} */
const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mulish)", "system-ui", "sans-serif"],
      },
      colors: {
        pink: {
          500: "#FA0F9C",
          600: "#DE1777",
          700: "#C6186B",
        },
        grey: {
          100: "#F7F7F7",
          200: "#E8E8EA",
          300: "#D1D1D4",
          500: "#8D8B94",
          700: "#0E0E0F",
        },
        blue: {
          500: "#4B49EB",
        },
        navy: {
          100: "#EFEDF4",
          500: "#2C1277",
        },
        yellow: {
          500: "#FFC122",
        },
        "red-util": {
          100: "#FB3314",
          60: "#FFC8C0",
        },
        "green-util": {
          100: "#4BAD50",
          60: "#C0D9C2",
        },
      },
      fontSize: {
        "heading-1": ["20px", { lineHeight: "24px", fontWeight: "800" }],
        "heading-2": ["18px", { lineHeight: "20px", fontWeight: "700" }],
        "heading-3": ["16px", { lineHeight: "18px", fontWeight: "700" }],
        body: ["14px", { lineHeight: "18px", fontWeight: "400" }],
        "body-bold": ["14px", { lineHeight: "18px", fontWeight: "700" }],
        "body-low": ["14px", { lineHeight: "16px", fontWeight: "400" }],
        "body-small": ["12px", { lineHeight: "14px", fontWeight: "400" }],
        label: ["12px", { lineHeight: "14px", fontWeight: "400" }],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        mobileS: "320px",
        mobileM: "375px",
        mobileL: "425px",
        "mid-tablet": "550px",
        "mid-lg": "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
