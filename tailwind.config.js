const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    purge: {
      enabled: false,
      content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'primaryBlueColor': '#0093D8',
          'primaryYellowColor': '#D6C300',
          'primaryBlackColor': '#231F20',
          'disableColor': '#D9D9D9',
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require('@tailwindcss/aspect-ratio'),require('@tailwindcss/forms'),require('@tailwindcss/line-clamp'),require('@tailwindcss/typography')],
};
