/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          pink: "#FFE5EC",
          blue: "#D8E2DC",
          yellow: "#FFFBDB",
          green: "#EDF2FB",
          orange: "#FFE5D9",
          purple: "#F3E5F5",
        },
        brand: {
          red: "#E53935",
          blue: "#1E88E5",
          yellow: "#FDD835",
          green: "#43A047",
        }
      },
      fontFamily: {
        playful: ["'Outfit'", "sans-serif"],
        rounded: ["'Quicksand'", "sans-serif"],
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
