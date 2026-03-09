/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0E0E0E", // Nosso preto profundo
        surface: "#181818",    // Fundo dos cards (ou base para o glassmorphism)
        primary: "#F3F4F6",    // Texto principal (quase branco)
        secondary: "#9CA3AF",  // Texto secundário (cinza)
        accent: "var(--accent-color, #6366f1)", // Cor dinâmica (por padrão um roxo elétrico)
      },
      fontFamily: {
        heading: ['Satoshi', 'sans-serif'], // Fonte para títulos
        body: ['Inter', 'sans-serif'],      // Fonte para leitura
      },
    },
  },
  plugins: [],
}