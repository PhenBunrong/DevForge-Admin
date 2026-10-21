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
  },
})
