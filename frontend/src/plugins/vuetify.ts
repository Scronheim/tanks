/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'dark'
  },
  defaults: {
    VSelect: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: true,
    },
    VTextField: {
      density: 'compact',
      variant: 'outlined',
      hideDetails: true,
    },
    VList: {
      density: 'compact'
    },
    VListItem: {
      density: 'compact'
    },
    VTabs: {
      color: 'primary',
      density: 'comfortable',
      hideSlider: true,
    },
    VTab: {
      variant: 'flat'
    },
  }
})
