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
        background: "#FFFFFF",
        foreground: "#111111",
        muted: "#666666",
        border: "#E5E5E5",
        card: "#F6F4EF",
        accent: "#091CCA",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": "clamp(3rem, 10vw, 8rem)",
        "display-lg": "clamp(2.5rem, 8vw, 6rem)",
        "display-md": "clamp(2rem, 6vw, 4rem)",
        "display-sm": "clamp(1.5rem, 4vw, 2.5rem)",
        "body-lg": "1.5rem",
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
        reveal: "cubic-bezier(0.76, 0, 0.24, 1)",
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
        "marquee-reverse": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-smooth forwards",
        "slide-up": "slide-up 0.8s ease-reveal forwards",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marquee-reverse 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
