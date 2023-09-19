import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        calc: 'calc(100vh - 65px)',
        videoCalc: 'calc(100vh - 120px)',
      },
      maxWidth: {
        mainBtn: '300px',
      },
      colors: {
        lightGray: '#eeeaee',
        white: '#ffffff',
        green: '#10b1c3',
        black: '#3f3939',
        pink: '#fce4ec',
        violet: '#c177ce',
        milk: '#fbf7f4',
        pinkOpacity: '#fce4ecde',
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
