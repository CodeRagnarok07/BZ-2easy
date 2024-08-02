/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', 
    "./node_modules/flowbite/**/*.js"],

  theme: {
    container: {
      center: true,
    },

    fontFamily: {
      'bebas': ["Bebas Neue", "sans-serif"],
      'urb': ["Urbanist", "sans-serif"],

    },
    extend: {

      colors: {
        primary: 'rgb(var(--blue) / <alpha-value>)',

        gray: {
          100: 'rgb(var(--grey-1) / <alpha-value>)',
          200: 'rgb(var(--shadow-players) / <alpha-value>)',
          300: 'rgb(var(--button-grey-2) / <alpha-value>)',
          500: 'rgb(var(--lines-bg) / <alpha-value>)',
          600: 'rgb(var(--button-grey) / <alpha-value>)',
          700: 'rgb(var(--play) / <alpha-value>)',
          400: 'rgb(var(--dark-2) / <alpha-value>)',
          800: 'rgb(var(--bg-dark) / <alpha-value>)',
        },
        // 900: 'rgb(var(--black) / <alpha-value>)', 	
        white: {
          "DEFAULT": 'rgb(var(--white) / <alpha-value>)',
          200: 'rgb(var(--bg-white-2) / <alpha-value>)',
          300: 'rgb(var(--white-2) / <alpha-value>)',
          400: 'rgb(var(--luz-focal) / <alpha-value>)',
        }
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

