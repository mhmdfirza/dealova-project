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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#8B7CF6",
          light: "#C4B5FD",
          blue: "#7DD3FC",
        },
        salon: {
          bg: "#FFFFFF",
          "bg-secondary": "#F8F7FF",
          purple: "#8B7CF6",
          lavender: "#C4B5FD",
          sky: "#7DD3FC",
          "text-primary": "#1E1B4B",
          "text-secondary": "#6B7280",
          border: "#EDE9FE",
        },
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        "gradient-cta": "linear-gradient(135deg, #8B7CF6 0%, #7DD3FC 100%)",
      },
      animation: {
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite",
        float: "float 3s ease-in-out infinite",
        "counter-up": "counter-up 0.5s ease-out forwards",
      },
      keyframes: {
        "pulse-ring": {
          "0%": { transform: "scale(0.85)", opacity: "0.7" },
          "70%": { transform: "scale(1.2)", opacity: "0" },
          "100%": { transform: "scale(1.2)", opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      boxShadow: {
        "card-hover": "0 8px 30px rgba(139, 124, 246, 0.2)",
        "salon": "0 4px 20px rgba(139, 124, 246, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
