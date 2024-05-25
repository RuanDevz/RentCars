/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin:{
        'custom': '25rem',
      },
      colors:{
        primary: "#1572D3",
        hovercolor: "#166bc4",
        segundary: "#5F5F5F",
        depoiments: "#F7FBFF",
        footerbg: "#051C34",
        p: "#D6D6D6",
        pwo: "#b5b3b3"
      },

      fontFamily: {
        primary: "Poppins, sans"
      }
    },
  },
  plugins: [],
}

