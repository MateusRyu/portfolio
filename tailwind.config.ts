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
