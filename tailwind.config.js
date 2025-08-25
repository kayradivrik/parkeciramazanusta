/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.html",  // Yeni yapıdaki HTML'leri de tarar
    "./*.html"          // Eski yapıdaki root HTML dosyaları
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        quattrocento: ['Quattrocento', 'sans-serif'],
      },
      colors: {
        primary: '#241B18',
        secondary: '#4A3A33',
        accent: '#FFC947',
        links: '#956A01',
      },
    },
  },
  plugins: [],
};