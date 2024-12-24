import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        theme: {
          'heading-text': '#2d2e32',
          'body-text': '#555',
          background: '#f9f9f9',
          primary: '#143cdb',
          secondary: '#c3dfdf',
          accent: '#4a6b8c',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Mulish', 'sans-serif'],
      },
      screens: {
        '8xl': '1920px',
      },
    },
  },
  plugins: [],
} satisfies Config;
