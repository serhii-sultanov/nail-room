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
      maxWidth: {
        mainBtn: '300px',
      },
      colors: {
        lightGray: '#eeeaee',
        white: '#ffffff',
        green: '#10b1c3',
        black: '#3f3939',
        pink: '#ffbcd2',
        violet: '#c177ce',
        milk: '#fbf7f4',
      },
      fontSize: {
        sm: ['14px', '21px'],
      },
      backgroundColor: {
        mainBtnBg: '#f0f1ff59',
      },
    },
  },
  plugins: [],
};
export default config;
