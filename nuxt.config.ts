import process from 'node:process'

export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module', '@nuxt/eslint', 'nuxt-auth-sanctum'],
  ssr: false,
  devtools: { enabled: true },
  css: ['~/assets/scss/app.scss'],
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_SANCTUM_BASE_URL,
      http: {
        browserBaseURL: '/',
      },
      appName: process.env.APP_NAME || 'RONG-DEV',
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    checker: true,
    config: {
      stylistic: true,
    },
  },
  sanctum: {
    mode: 'token',
    userStateKey: 'sanctum.user.identity',
    redirectIfAuthenticated: false,
    redirectIfUnauthenticated: true,
    endpoints: {
      csrf: '/sanctum/csrf-cookie',
      login: '/api/login',
      logout: '/api/logout',
      user: '/api/user',
    },
    redirect: {
      keepRequestedRoute: false,
      onLogin: '/dashboard',
      onLogout: '/auth/login',
      onAuthOnly: '/auth/login',
      onGuestOnly: '/',
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
