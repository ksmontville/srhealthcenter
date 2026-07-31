/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import {aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    // Vuetify 4 changed the default to 'system'. This site only defines a light
    // theme, so without this a visitor in OS dark mode gets Vuetify's stock dark
    // palette instead of the SRHC brand colors.
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#395144',
          secondary: '#4E6C50',
          accent: '#AA8B56',
          highlight: '#F0EBCE',
        },
      },
    },
  },
})
