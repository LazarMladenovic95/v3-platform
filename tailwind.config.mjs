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

        /* Semantic tokens (CSS variables in globals.css) */
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
          hover: "var(--color-primary-hover)",
          active: "var(--color-primary-active)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        background: "var(--color-background)",
        surface: {
          DEFAULT: "var(--color-surface)",
          hover: "var(--color-surface-hover)",
        },
        disabled: "var(--color-disabled)",
        tooltip: {
          DEFAULT: "var(--color-tooltip)",
          foreground: "var(--color-tooltip-foreground)",
        },
        foreground: {
          title: "var(--color-foreground-title)",
          body: "var(--color-foreground-body)",
          muted: "var(--color-foreground-muted)",
          disabled: "var(--color-foreground-disabled)",
          accent: "var(--color-foreground-accent)",
          "on-dark": "var(--color-foreground-on-dark)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          input: "var(--color-border-input)",
          focus: "var(--color-border-focus)",
          error: "var(--color-border-error)",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)",
          subtle: "var(--color-destructive-subtle)",
          foreground: "var(--color-destructive-foreground)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          foreground: "var(--color-warning-foreground)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          subtle: "var(--color-success-subtle)",
          foreground: "var(--color-success-foreground)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          subtle: "var(--color-info-subtle)",
          foreground: "var(--color-info-foreground)",
        },
      },
      ringColor: {
        focus: "var(--color-border-focus)",
      },
      fontSize: {
        display: [
          "var(--display-size)",
          { lineHeight: "var(--display-line-height)", fontWeight: "800" },
        ],
        "heading-1": [
          "var(--heading-1-size)",
          { lineHeight: "var(--heading-1-line-height)", fontWeight: "800" },
        ],
        "heading-2": [
          "var(--heading-2-size)",
          { lineHeight: "var(--heading-2-line-height)", fontWeight: "800" },
        ],
        "heading-3": [
          "var(--heading-3-size)",
          { lineHeight: "var(--heading-3-line-height)", fontWeight: "800" },
        ],
        "title-1": [
          "var(--title-1-size)",
          { lineHeight: "var(--title-1-line-height)", fontWeight: "800" },
        ],
        "title-2": [
          "var(--title-2-size)",
          { lineHeight: "var(--title-2-line-height)", fontWeight: "800" },
        ],
        "title-3": [
          "var(--title-3-size)",
          { lineHeight: "var(--title-3-line-height)", fontWeight: "800" },
        ],
        "title-4": [
          "var(--title-4-size)",
          { lineHeight: "var(--title-4-line-height)", fontWeight: "800" },
        ],
        "body-large": [
          "var(--body-large-size)",
          { lineHeight: "var(--body-large-line-height)", fontWeight: "400" },
        ],
        "body-large-bold": [
          "var(--body-large-size)",
          { lineHeight: "var(--body-large-line-height)", fontWeight: "700" },
        ],
        "body-regular": [
          "var(--body-regular-size)",
          { lineHeight: "var(--body-regular-line-height)", fontWeight: "400" },
        ],
        "body-regular-bold": [
          "var(--body-regular-size)",
          { lineHeight: "var(--body-regular-line-height)", fontWeight: "700" },
        ],
        "body-small": [
          "var(--body-small-size)",
          { lineHeight: "var(--body-small-line-height)", fontWeight: "400" },
        ],
        "body-small-bold": [
          "var(--body-small-size)",
          { lineHeight: "var(--body-small-line-height)", fontWeight: "700" },
        ],
        "body-extra-small": [
          "var(--body-extra-small-size)",
          { lineHeight: "var(--body-extra-small-line-height)", fontWeight: "400" },
        ],
        "body-extra-small-bold": [
          "var(--body-extra-small-size)",
          { lineHeight: "var(--body-extra-small-line-height)", fontWeight: "700" },
        ],
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
