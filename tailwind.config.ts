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
        brand: {
          dark: "#08090d",
          surface: "#0d0f15",
          surfaceElevated: "#131620",
          surfaceHover: "#1a1e2b",
          border: "#1e2230",
          borderHairline: "rgba(255, 255, 255, 0.08)",
          borderMuted: "#141722",
          borderHighlight: "rgba(16, 185, 129, 0.35)",
          offwhite: "#f5f5f7",
          charcoal: "#111319",
          emerald: {
            DEFAULT: "#10b981",
            light: "#34d399",
            dark: "#059669",
            muted: "rgba(16, 185, 129, 0.12)",
            glow: "rgba(16, 185, 129, 0.25)",
          },
          lime: {
            DEFAULT: "#22c55e",
            light: "#4ade80",
            dark: "#16a34a",
            muted: "rgba(34, 197, 94, 0.12)",
          },
          gold: {
            DEFAULT: "#d4a342",
            light: "#f3cc72",
            dark: "#b88628",
            muted: "rgba(212, 163, 66, 0.12)",
            glow: "rgba(212, 163, 66, 0.25)",
          },
          gray: {
            50: "#fafaf9",
            100: "#f5f5f5",
            200: "#e5e5e5",
            300: "#d4d4d8",
            400: "#a1a1aa",
            500: "#71717a",
            600: "#52525b",
            700: "#3f3f46",
            800: "#27272a",
            900: "#18181b",
            950: "#09090b",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
