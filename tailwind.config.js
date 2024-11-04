/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Define custom colors based on your design
        "blue-light": "#A3C1D3",
        "blue-dark": "#244B61",
        teal: "#88C0DF",
        "green-light": "#CFC857",
        "green-dark": "#7A8015",
        yellow: "#AAB126",
        "brown-light": "#C69C62",
        "brown-dark": "#754B22",
      },
      spacing: {
        // Define custom spacing (padding/margin) if needed
        "section-padding": "2rem", // Example custom spacing
        "section-padding-lg": "4rem", // Larger spacing for larger screens
      },
      borderRadius: {
        // Custom border radius for card or button styling
        card: "0.75rem", // Custom card border radius
      },
      boxShadow: {
        // Custom shadow if needed for cards or buttons
        card: "0 4px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for cards
      },
      fontSize: {
        // Custom font sizes
        "card-title": "1.25rem", // For card titles
        "card-subtitle": "1rem", // For subtitles
        "card-text": "0.875rem", // For body text
      },
    },
  },
  plugins: [],
};
