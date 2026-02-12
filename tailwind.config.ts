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
        background: "#0A0A0A",
        foreground: "#FAFAFA",
        muted: "#A1A1A1",
        border: "#262626",
        card: "#141414",
        accent: "#FFFFFF",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": "clamp(3rem, 10vw, 8rem)",
        "display-lg": "clamp(2.5rem, 8vw, 6rem)",
        "display-md": "clamp(2rem, 6vw, 4rem)",
        "display-sm": "clamp(1.5rem, 4vw, 2.5rem)",
      },
      spacing: {
        section: "clamp(6rem, 15vh, 12rem)",
        gutter: "clamp(1rem, 3vw, 2rem)",
      },
      maxWidth: {
        container: "1400px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-smooth forwards",
        "slide-up": "slide-up 0.8s ease-smooth forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
