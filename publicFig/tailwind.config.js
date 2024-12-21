const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme:{
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    colors: {
      border: "#EF98A4",
      input: "",
      ring: "#EF98A4",
      primary: "#EF98A4",
      
      // background: "hsl(var(--background))",
      // foreground: "hsl(var(--foreground))",
      // primary: {
      //   DEFAULT: "hsl(var(--primary))",
      //   foreground: "hsl(var(--primary-foreground))",
      // },
      // secondary: {
      //   DEFAULT: "hsl(var(--secondary))",
      //   foreground: "hsl(var(--secondary-foreground))",
      // }
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};