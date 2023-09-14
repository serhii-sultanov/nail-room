import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {},
      maxHeight: {},
      width: {},
      height: {},
      colors: {},
      backgroundColor: {},
      fontSize: {
        sm: ['14px', '21px'],
      },
    },
  },
  plugins: [],
};
export default config;
