// tailwind.config.js

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-background': '#f4f9fc', // NEW
        'custom-text': '#1f2b6c',       // NEW
      },
    },
  },
  plugins: [],
};
