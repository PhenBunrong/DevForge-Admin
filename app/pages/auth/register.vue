<script setup>
definePageMeta({
    title: 'Register',
    layout: 'auth',
})
</script>

<template>
    <VSheet class="pa-12" height="100%">
        <VCard class="mx-auto px-4 py-4" width="500">
            <VCardTitle>Register</VCardTitle>
            <VCardText>
                <VForm>
                    <VTextField 
                        label="Username"
                        clearable
                        variant="outlined"
                    />
                    <VTextField
                        label="Password"
                        type="password"
                        variant="outlined"
                    />
                    <VTextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined" />
                    <VBtn color="success" size="large" type="submit" variant="elevated" block>
                        Register
                    </VBtn>
                </VForm>
            </VCardText>
        </VCard>
    </VSheet>
</template>