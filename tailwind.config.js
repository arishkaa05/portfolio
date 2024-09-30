/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'whisper': ['"Whisper"', 'serif'],
        'moret': ['"Moret"', 'serif'],
      },
      colors: {
        'pink': '#f4a8bc'
      },
    },
  },
  plugins: [],
}

