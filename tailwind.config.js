/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { light: "#7C3AED", DEFAULT: "#7C3AED", dark: "#0e59a3" },
        secondary: { light: "#2563EB", DEFAULT: "#2563EB", dark: "#2563EB" }
        // "primary-dark": "#2C2C2C",
        // "primary-dark-2": "#1E1E1E",
        // "primary-dark-3": "#444444",
      },
    },
  },
  plugins: [],
};

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
