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
        primaryBtn: '#f5f5f5',
        mainColor: '#F2F0F1',
        borderColor: '#d1d5db'
      },
      fontFamily: {
        oswald: ['var(--font-oswald)'],
        satoshi: ['var(--font-satoshi)']

      },
      screens: {
        xxs: '445px',
        xs: '490px',
        cs: '870px',
        dl: '980px'
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    },
  },
  plugins: [],
};
export default config;
