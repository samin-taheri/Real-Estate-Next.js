/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rectangle': 'linear-gradient(160deg, transparent -100%, rgba(255, 244, 209, 0.62) 25%,rgba(255, 244, 209, 0.62) 25%, transparent 40%, transparent 40%, rgba(255, 255, 255, 1) 75%, rgba(255, 255, 255, 1) 90%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
