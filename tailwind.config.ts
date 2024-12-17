import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/app/**/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        header: '#71151A',
        subheader: '#3B3B3B',
        'background-base': '#EAE4DF',
        'title-frame': '#F8F9FC',
        'title-text': '#1B2550',
        divider: '#A13532',
      },
    },
  },
  plugins: [],
} satisfies Config;
