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
        buttonColor: "#3c553a",
        primaryBackground: "#f1f1e7",
      },
      fontFamily: {
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
