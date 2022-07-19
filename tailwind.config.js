module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        backgroundEveryPokemon: "url('app/assets/img/backgroundEveryPokemon.png')",
        backgroundHome: "url('app/assets/img/background_1.png')",
      },
      transitionTimingFunction: {
        'tr-btn-start': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      outlineOffset: {
        15: '15px',
      },
      colors: {
        'color-outline': 'rgba(255, 255, 255, 0)',
      },
    },
  },
  plugins: [],
};
