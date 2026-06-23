/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFF8F1",
        cream2: "#FFF1E6",
        ink: "#1F1A17",
        sub: "#7A716C",
        orange: {
          DEFAULT: "#FF7A00",
          50: "#FFF1E6",
          100: "#FFE2CC",
          500: "#FF7A00",
          600: "#F26500",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
        display: [
          "Poppins",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(31, 26, 23, 0.12)",
        soft: "0 4px 14px rgba(31, 26, 23, 0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};
