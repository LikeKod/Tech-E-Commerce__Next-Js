/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-category': "url(/images/card_category/image39.png)",
        'sale': "url(/images/sale/Banner.jpg)",
        'sale-md': "url(/images/sale/Banner-xs.jpg)",
      },
      colors: {
        'text-price': '#A7A7A7',
        'card-category-1': '#F9F9F9',
        'card-category-2': '#EAEAEA',
        'card-category-3': '#2C2C2C',
        'card-category-p': '#909090',

      },
      fontFamily: {
        'main': ['SF Pro Display',],
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}