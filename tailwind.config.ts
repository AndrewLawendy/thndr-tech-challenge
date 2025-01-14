import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          light: "var(--color-primary-light)",
          dark: "var(--color-primary-dark)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          light: "var(--color-secondary-light)",
          dark: "var(--color-secondary-dark)",
        },
        accent: {
          green: "var(--color-accent-green)",
          red: "var(--color-accent-red)",
        },
        background: {
          DEFAULT: "var(--color-background)",
          alt: "var(--color-background-alt)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        border: {
          DEFAULT: "var(--color-border)",
          focus: "var(--color-border-focus)",
        },
      },
      height: {
        header: "64px",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1280px",
        },
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      },
      borderRadius: {
        none: "0",
        sm: "0.25rem",
        base: "0.375rem",
        md: "0.5rem",
        lg: "0.75rem",
        xl: "1rem",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        base: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
        lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      },
      keyframes: {
        splashLogo: {
          "0%": {
            width: "28px",
            transform: "scale(400)",
          },
          "20%, 25%": {
            width: "28px",
            transform: "scale(1)",
          },
          "35%, 50%": {
            width: "85px",
            transform: "scale(1)",
          },
          "70%, 100%": {
            width: "85px",
            transform: "translate3d(-100px, 0, 0)",
          },
        },
        developerFadeIn: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, 10px, 0)",
          },
          "40%, 80%": {
            opacity: "1",
            transform: "translate3d(0, 0, 0)",
          },
          "100%": {
            opacity: "1",
            transform: "translate3d(-100px, 0, 0)",
          },
        },
        splashOut: {
          from: {
            top: "100vh",
            left: "100vh",
          },
          to: {
            top: "-100vh",
            left: "-50vh",
          },
        },
        fadeIn: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
