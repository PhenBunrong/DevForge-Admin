<script setup lang="ts">
definePageMeta({
  title: 'Login',
  layout: 'auth',
})

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const remember = ref(true)
const loading = ref(false)
const error = ref('')

const rules = {
  email: [
    (v: string) => !!v || 'Email is required',
    (v: string) => /.+@.+\..+/.test(v) || 'Enter a valid email',
  ],
  password: [
    (v: string) => !!v || 'Password is required',
    (v: string) => v.length >= 8 || 'At least 8 characters',
  ],
}

async function onSubmit(event: Promise<{ valid: boolean }>) {
  const { valid } = await event
  if (!valid) return

  loading.value = true
  error.value = ''
  try {
    // await $fetch('/api/auth/login', { method: 'POST', body: { email: email.value, password: password.value, remember: remember.value } })
    await navigateTo('/products')
  }
  catch {
    error.value = 'Incorrect email or password.'
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="glass-bg login-page d-flex align-center justify-center pa-4">
    <VCard class="glass login-card pa-6 pa-sm-8" width="100%" max-width="440" flat>
      <div class="d-flex flex-column align-center text-center mb-6">
        <div class="login-logo mb-4">
          <VIcon icon="mdi-package-variant" size="32" />
        </div>
        <h1 class="text-h5 font-weight-semibold">Welcome back</h1>
        <p class="text-body-2 text-medium-emphasis mt-1">Sign in to manage your products</p>
      </div>

      <VForm validate-on="blur lazy" @submit.prevent="onSubmit">
        <VAlert
          v-if="error"
          :text="error"
          type="error"
          variant="tonal"
          density="compact"
          rounded="xl"
          class="mb-4"
          closable
          @click:close="error = ''"
        />

        <VTextField
          v-model="email"
          :rules="rules.email"
          label="Email"
          type="email"
          name="email"
          autocomplete="email"
          prepend-inner-icon="mdi-email-outline"
          class="mb-1"
        />

        <VTextField
          v-model="password"
          :rules="rules.password"
          :type="showPassword ? 'text' : 'password'"
          :append-inner-icon="showPassword ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
          label="Password"
          name="password"
          autocomplete="current-password"
          prepend-inner-icon="mdi-lock-outline"
          @click:append-inner="showPassword = !showPassword"
        />

        <div class="d-flex align-center justify-space-between mb-4">
          <VCheckbox v-model="remember" label="Remember me" density="compact" hide-details />
          <NuxtLink to="/forgot-password" class="text-body-2 text-decoration-none">
            Forgot password?
          </NuxtLink>
        </div>

        <VBtn
          :loading="loading"
          color="primary"
          size="large"
          type="submit"
          variant="flat"
          block
        >
          Sign in
        </VBtn>
      </VForm>

      <p class="text-body-2 text-medium-emphasis text-center mt-6 mb-0">
        No account?
        <NuxtLink to="/register" class="text-decoration-none font-weight-medium">Create one</NuxtLink>
      </p>
    </VCard>
  </div>
</template>

<style scoped>
.login-page {
  min-height: 100dvh;
}

.login-card {
  /* fade the card in with the same spring as the rest of the UI */
  animation: card-in 0.6s var(--glass-spring) both;
}

.login-logo {
  display: grid;
  place-items: center;
  width: 64px;
  height: 64px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.16);
  box-shadow:
    inset 0 0 0 1px rgba(255, 255, 255, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.55),
    0 10px 24px rgba(var(--glass-shadow), 0.3);
}

@keyframes card-in {
  from { opacity: 0; transform: translateY(16px) scale(0.97); }
}

@media (prefers-reduced-motion: reduce) {
  .login-card { animation: none; }
}
</style>
