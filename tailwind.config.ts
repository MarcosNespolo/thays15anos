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
      },
      translate: {
        '-full': '-100%',
        '-1/2': '-50%',
      },
      fontFamily: {
        'great-vibes': ['var(--font-great-vibes)', 'cursive'],
        'old-standard': ['var(--font-old-standard)', 'serif'],
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
  ],
};
export default config;
