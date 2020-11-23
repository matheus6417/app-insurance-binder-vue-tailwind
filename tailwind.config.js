const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      // etc.
    ],
  },
  theme: {
    fontFamily: {
      sans: 'Roboto',
      display: ['Roboto', 'system-ui', 'sans-serif'],
      body: ['Roboto', 'system-ui', 'sans-serif'],
    },
    extend: {}
  },
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
