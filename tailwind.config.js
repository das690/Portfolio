/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neoYellow: '#f4e04d',
        neoCyan: '#8be9fd',
        neoPink: '#ffb86c',
        neoGreen: '#50fa7b',
        neoBg: '#fdf7f1', // A slightly warm off-white for a retro paper feel
      },
      boxShadow: {
        // This is the magic! The signature solid black block shadow
        'neo': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-sm': '4px 4px 0px 0px rgba(0,0,0,1)',
        'neo-hover': '12px 12px 0px 0px rgba(0,0,0,1)',
      }
    },
  },
  plugins: [],
}