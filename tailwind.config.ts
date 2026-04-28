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
          DEFAULT: "#050816",
          50: "#0A0E27",
          100: "#0E1330",
          200: "#141A3D",
          300: "#1A224D",
        },
        gold: {
          DEFAULT: "#C9A961",
          light: "#E0C887",
          dark: "#9E823F",
        },
        ivory: {
          DEFAULT: "#F5F1E8",
          muted: "#C9C3B5",
          dim: "#8A8576",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gold-shine":
          "linear-gradient(135deg, #9E823F 0%, #C9A961 35%, #E0C887 50%, #C9A961 65%, #9E823F 100%)",
        "midnight-glow":
          "radial-gradient(ellipse at top, rgba(201,169,97,0.08), transparent 60%), radial-gradient(ellipse at bottom, rgba(20,26,61,0.6), transparent 60%)",
      },
      letterSpacing: {
        widest: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;
