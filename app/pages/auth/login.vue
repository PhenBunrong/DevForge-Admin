<script setup>
  definePageMeta({
    title: 'Login',
    layout: 'auth',
  })
</script>

<template>
  <VSheet height="100%" class="bg-teal-darken-4">
    <VImg
      src="https://picsum.photos/1920/1080?random"
      cover
      height="calc(100vh - 0px)"
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
    >
      <VContainer class="py-15">
        <VCard color="transparent" class="mx-auto px-4 py-4" elevation="0" width="500px">
          <VImg
            src="https://randomuser.me/api/portraits/women/85.jpg"
            height="64"
    
          />
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
                size="large"
                type="submit"
                variant="outlined"
                block
              >
                Login
              </VBtn>
            </VForm>
          </VCardText>
        </VCard>
      </VContainer>
    </VImg>
  </VSheet>
</template>