import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        85: '80px',
      },
      backgroundColor: {
        'gray-100': '#2e2e2e',
        'gray-200': '#FFFFFF0D',
        body: '#101112',
        'blue-700': '#0058FF',
      },
      maxWidth: {
        'container-width': '1110px',
      },
      transitionProperty: {
        rotate: 'rotate 0.5s linear',
        'pop-up': 'all 0.4s ease-in-out',
        inputTransition: 'all .2s ease-in-out',
      },
    },
  },
  plugins: [],
};
export default config;
