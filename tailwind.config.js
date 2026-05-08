// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: { // Usaremos esto para los azules/morados del degradado
          DEFAULT: '#6b21a8', // Un morado oscuro
          light: '#8b5cf6',   // Un morado más claro
          dark: '#4c1d95',    // Un morado muy oscuro
        },
        accent: { // Usaremos esto para los botones o detalles
          DEFAULT: '#7c3aed', // Un morado brillante
        },
        background: '#f8fafc', // Un gris muy claro para fondos
        foreground: '#1e293b', // Un gris oscuro para texto principal
        lightgray: '#f1f5f9', // Un gris claro para secciones
      },
      fontFamily: {
        sans: ['"Open Sans"', 'sans-serif'], // Fuente de cuerpo
        serif: ['"Playfair Display"', 'serif'], // Fuente para títulos más elegantes
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to right, #4c1d95, #6d28d9, #8b5cf6)', // Ejemplo de degradado
      }
    },
  },
  plugins: [],
}