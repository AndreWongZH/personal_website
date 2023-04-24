/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
        colors: {
            //'background': '#303a52',
            //'background-light': '#3d5165',
            'background-light': '#2f3f4f',
            'background': '#263340',
            //'highlight': '#43e6d4',
            //royal robin blue 'highlight': '#96DED1',
            'highlight': '#8bf0de',
        }
    },
  },
  plugins: [
      require('tailwindcss-animate'),
  ],
}
