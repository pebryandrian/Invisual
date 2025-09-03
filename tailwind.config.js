import lineClamp from "@tailwindcss/line-clamp";

/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        progress: "progress linear forwards",
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [lineClamp],
};

export default config;
