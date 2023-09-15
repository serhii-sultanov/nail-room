import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minHeight: {
        calc: 'calc(100vh - 65px)',
      },
      colors: {
        lightGray: '#eeeaee',
        white: '#ffffff',
        green: '#10b1c3',
        black: '#3f3939',
        pink: '#ff3aaf',
        violet: '#c177ce',
      },
      fontSize: {
        sm: ['14px', '21px'],
      },
    },
  },
  plugins: [],
};
export default config;
