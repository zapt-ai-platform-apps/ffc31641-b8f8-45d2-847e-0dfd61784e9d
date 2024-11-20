export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a1a2e',
        neonBlue: '#0f4c75',
        lightGray: '#e0e1dd',
        deepPurple: '#5c2a9d',
        teal: '#3282b8',
        successGreen: '#21bf73',
        errorRed: '#ec4646',
        warningYellow: '#ffba08',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
};