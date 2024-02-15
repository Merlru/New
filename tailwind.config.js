/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    colors: {
      // Configure your color palette here
      'custom-grey':'rgb(180, 180, 184)',
      'custom-sgrey':'rgb(199, 200, 204)',
      'custom-ssgrey':'rgb(227, 225, 217)',
      'custom-sssgrey':'rgb(242, 239, 229)',
    },
    extend: {},
  },
  plugins: [],

  
}


