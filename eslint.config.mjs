import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  })
  .override('nuxt/vue/rules', {
    rules: {
      'vue/max-attributes-per-line': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/no-v-html': 'off',
    },
  })
  // .override('nuxt/stylistic', {
  //   rules: {
  //     '@stylistic/quote-props': 'off',
  //   },
  // })
