/** @type {import('tailwindcss').Config} */
export default {
    content: [
       "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
        "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}"
    ],
    presets: [require("@relume_io/relume-tailwind")],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
          bebas: ['Bebas Neue', 'sans-serif'],
        },
        colors: {
          primary: 'rgb(3, 67, 51)', 
          secondary: 'rgb(248, 191, 118)', 
        },
        fontSize: {
          big: ['6rem', '1'],
          biggest: ['8rem', '1'],
  
        }
      },
    },
    plugins: [],
}
