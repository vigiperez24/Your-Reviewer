/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
       sans: ['Poppins', 'san-serif'],
      },
      colors: {
        bgColorOne: "#f5f5f5",
        bgColorTwo: "#F9FAFB",
        textColor: "#222",
        buttonText: "#fff",
        buttonBg: '#673ab7',
        iconBg: "#B2AEEB",
        cardBg: "#F9FAFB",

        // Hover
        bgButtonHover: "#7945D5"

        // Optional Dark Mode Variants (para madali lang i-access)
        // darkBg: "#222",
        // darkText: "#fff",
        // darkCardBg: "#333",
      },
    },
  },
  plugins: [],
};
