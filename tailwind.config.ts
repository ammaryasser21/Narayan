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
        sans: ['var(--font-jetbrains-mono)', 'monospace'],
        jetbrains: ['var(--font-jetbrains-mono)', 'monospace'],
        righteous: ['var(--font-righteous)', 'cursive'],
      },
      animation: {
        'scrolling-text': 'scroll-text 20s linear infinite',
        'reverse': 'scroll-text-reverse 20s linear infinite reverse'
      },
      keyframes: {
        'scroll-text': {

          'to': { transform: 'translateX(-100%)' },
        },
        'scroll-text-reverse': {

          'to': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'mask-image': 'linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
