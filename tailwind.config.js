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
        'tr-btn-arrow': 'cubic-bezier(0.25, 1.7, 0.35, 1.5);',
      },
      outlineOffset: {
        15: '15px',
      },
      colors: {
        'color-outline': 'rgba(255, 255, 255, 0)',
        'color-arrow': '#111',
        'color-pseudo-arrow': '#666',
      },
      transformOrigin: {},
      borderWidth: {
        1: '1px',
      },
      height: {
        '1px': '1px',
      },
    },
  },
  plugins: [],
};
