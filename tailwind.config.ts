import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
        secondary: ["var(--font-secondary)"],
      },
      fontSize: {
        h1: ["4.25rem", "4.5rem"],
        h2: ["2.625rem", "3rem"],
        h3: ["1.75rem", "3rem"],
        h4: ["1.25rem", "1.5rem"],
        p: ["1rem", "1.5rem"],
        small: ["0.75rem", "1.5rem"],
      },
    },
  },
  daisyui: {
    themes: ["synthwave", "lofi"],
  },
  plugins: [require("daisyui")],
};
export default config;
