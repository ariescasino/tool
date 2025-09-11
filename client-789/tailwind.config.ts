import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        mb: '568px',
      },
      backgroundImage: {
        test: "url('/images/bg.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
      },
      animation: {
        spin: 'spin 1s linear infinite',
      },
      keyframes: {
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      fontFamily: {
        roboto: ['Roboto'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
        roHe: ['"Roboto"', 'Helvetica Neue', 'sans-serif'],
        inter: ['Inter'],
        g: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        inherit: ['inherit'],
        tnrm: ['Times New Roman, Times, serif'],
      },
    },
  },
  plugins: [],
};
export default config;
