module.exports = {
  purge: [
    'dist/**/*.html',
    'dist/JS/*.js'    
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'body': 'Poppins',
      'display': 'Poppins'
     },
    extend: {
      colors: {
        'teal':'#38ADA9',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
