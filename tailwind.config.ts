import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "rgb(var(--c-midnight) / <alpha-value>)",
          50: "rgb(var(--c-midnight-50) / <alpha-value>)",
          100: "rgb(var(--c-midnight-100) / <alpha-value>)",
          200: "rgb(var(--c-midnight-200) / <alpha-value>)",
          300: "rgb(var(--c-midnight-300) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--c-gold) / <alpha-value>)",
          light: "rgb(var(--c-gold-light) / <alpha-value>)",
          dark: "rgb(var(--c-gold-dark) / <alpha-value>)",
        },
        ivory: {
          DEFAULT: "rgb(var(--c-ivory) / <alpha-value>)",
          muted: "rgb(var(--c-ivory-muted) / <alpha-value>)",
          dim: "rgb(var(--c-ivory-dim) / <alpha-value>)",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(135deg, rgb(var(--c-gold-dark)) 0%, rgb(var(--c-gold)) 35%, rgb(var(--c-gold-light)) 50%, rgb(var(--c-gold)) 65%, rgb(var(--c-gold-dark)) 100%)",
        "midnight-glow":
          "radial-gradient(ellipse at top, rgb(var(--c-gold) / 0.08), transparent 60%), radial-gradient(ellipse at bottom, rgb(var(--c-midnight-200) / 0.6), transparent 60%)",
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
