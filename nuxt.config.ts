export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module',
    '@nuxt/eslint',
  ],
  vuetify: {
    moduleOptions: {
      prefixComposables: true,
      // styles: {
      //   colors: false
      // }
    }
  },
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    }
  }
})