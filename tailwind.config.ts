import {nextui} from '@nextui-org/theme';
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/toggle.js"
  ],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#EAF6FF',
        'pastel-light': '#F9F9F9',
        'pastel-gray': '#A8B1C0',
        'pastel-green': '#A1D884',
        'pastel-dark': '#2A3E4C',
        'pastel-dark-green': '#88C057',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [nextui()],
}
export default config
