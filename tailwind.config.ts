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
      colors: {
        'gray-500': '#C3C3C3',
      },
      backgroundColor: {
        'gray-100': '#2e2e2e',
        'gray-200': '#FFFFFF0D',

        'dark-600': '#131314',
        'dark-700': '#1c1d1e',
        body: '#101112',
        'blue-500': '#0095FF',
        'blue-700': '#0058FF',
        'yellow-500': '#FFCB01',
      },
      borderColor: {
        'gray-100': '#ffffff33',
        'gray-300': '#454545',
      },
      maxWidth: {
        'container-width': '1110px',
      },
      transitionProperty: {
        rotate: 'rotate 0.5s linear',
        'pop-up': 'all 0.4s ease-in-out',
        inputTransition: 'all .2s ease-in-out',
      },
      backgroundImage: {
        testimonial: 'linear-gradient(#9f3bfa, #b12eff)',
        CTA: 'linear-gradient(#ac50ff, #9f3bfa)',
        CTA1: 'linear-gradient(#9f3bfa, #b12eff)',
      },
    },
  },
  plugins: [],
};
export default config;
