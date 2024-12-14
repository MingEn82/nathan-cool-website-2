/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pearl-bush': '#E3DED1',
        'foggy-grey': '#D3CBB6',
        'heathered-grey': '#BAAD8D',
        'shadow': '#887952',
        'lisbon-brown': '#443C29',
        'rangoon-green': '#1B1810'
      },
      fontFamily: {
        sans: ['"JetBrains Mono"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

