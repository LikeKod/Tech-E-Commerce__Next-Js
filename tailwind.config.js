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
      },
      colors: {
        'card-category-1': '#F9F9F9',
        'card-category-2': '#EAEAEA',
        'card-category-3': '#2C2C2C',
      },
    },
  },
  plugins: [],
}