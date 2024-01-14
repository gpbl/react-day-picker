import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    './app/**/*.{js,jsx,ts,tsx,md,mdx}',
    './node_modules/preline/dist/index.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      maxWidth: {
        '8xl': '88rem'
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
} satisfies Config;
