export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/eslint',
  ],
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/scss/app.scss'],
  compatibilityDate: '2025-07-15',
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  vuetify: {
    moduleOptions: {
      prefixComposables: true,
      // styles: {
      //   colors: false
      // }
    },
    vuetifyOptions: {
      theme: { defaultTheme: 'dark' },
      defaults: {
        VTextField: { variant: 'solo', flat: true, rounded: 'xl' },
        VTextarea: { variant: 'solo', flat: true, rounded: 'xl' },
        VSelect: { variant: 'solo', flat: true, rounded: 'xl' },
        VBtn: { rounded: 'pill' },
        VSwitch: { inset: true, hideDetails: true },
        VNavigationDrawer: { color: 'transparent', scrim: false },
      },
    },
  },
})
