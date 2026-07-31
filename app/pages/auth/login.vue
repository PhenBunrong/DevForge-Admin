<script setup>
  definePageMeta({
    title: 'Login',
    layout: 'auth',
  })
</script>

<template>
  <VSheet class="pa-12" height="100%">
      <VCard class="mx-auto px-4 py-4" width="500px">
        <VCardTitle>Login</VCardTitle>
        <VCardText>
          <VForm>
            <VTextField
              label="Email"
              clearable
              variant="outlined"
            />
            <VTextField
              label="Password"
              placeholder="Enter your password"
              clearable
              variant="outlined"
            />
            <VBtn
              color="success"
              size="large"
              type="submit"
              variant="elevated"
              block
            >
              Login
            </VBtn>
          </VForm>
        </VCardText>
      </VCard>
  </VSheet>
</template>