/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Palatino Linotype", "Book Antiqua", "Palatino", "serif"],
        body: ["Trebuchet MS", "Gill Sans", "Noto Sans", "sans-serif"]
      },
      colors: {
        west: {
          50: "#f3f8ff",
          100: "#dce9fb",
          500: "#2f6da9",
          700: "#1f4d77"
        },
        east: {
          50: "#fff5eb",
          100: "#ffe4cc",
          500: "#9f5a2b",
          700: "#743f1c"
        },
        timeline: {
          100: "#d8dbdf",
          500: "#5a6777",
          700: "#2f3945"
        }
      },
      boxShadow: {
        panel: "0 12px 24px -18px rgba(20, 28, 43, 0.45)"
      }
    }
  },
  plugins: []
};
