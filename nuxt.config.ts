export default defineNuxtConfig({
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/eslint',
  ],
  devtools: { enabled: true },
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
