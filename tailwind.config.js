const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  content: ['./src/**/*.{html,js,json}'],
  theme: {
    // MEDIA QUERIES
    screens: {
      smOnly: { max: '767.98px' },
      sm: '480px',
      mdOnly: { min: '768px', max: '1279.98px' },
      md: '768px',
      xl: '1280px',
      notXl: { max: '1279.98px' },
    },
    // BASE FONT
    fontFamily: {
      montserrat: ['Montserrat', 'sans-serif'], // class="font-montserrat"
      // exo: ['"Exo 2"', 'sans-serif'],
    },

    // THEME
    extend: {
      backgroundColor: theme => ({
        ...theme('colors'),
      }),
      backgroundImage: {
        check: "url('../images/check.svg')",
      },

      // SHADOW
      boxShadow: {
        orange: '2px 8px 29px rgba(240, 127, 46, 0.2)', // class="shadow-orange"
        header: '0px 1px 3px rgba(0, 0, 0, 0.2)',
      },
      // ALL COLORS
      colors: {
        body: '#ffffff', // class="bg-body"
        black: {
          DEFAULT: '#000000', // class="bg-black text-black border-black"
          light: '#202020', // class="bg-black-light text-black-light border-black-light"
          dark: '#010101',
        },
        white: {
          DEFAULT: '#ffffff', // class="bg-white text-white border-white"
          dark: '#fafafa', // class="bg-white-dark text-white-dark border-white-dark"
        },
        accent: '#FF6C00', // class="bg-accent text-accent border-accent"
        primary: '#f1f1f1',
        second: '#f2f2f2',
      },
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '2.5rem',
        },
      },
      // KEYFRAMES
      keyframes: {
        side: {
          '0%, 100%': { transform: 'translateX(25%)' },
          '50%': { transform: ' translateY(0)' },
        },
      },
      // ANIMATION
      animation: {
        side: 'side 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
