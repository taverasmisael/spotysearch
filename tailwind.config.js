import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,css,md,mdx,html,json,scss}'],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, addVariant }) {
      addBase({ '.wrap-balance': { textWrap: 'balance' } })
      addVariant('children', '& > *')
    }),
  ],
}
