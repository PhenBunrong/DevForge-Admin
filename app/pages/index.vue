<script setup lang="ts">
definePageMeta({
  title: 'Dashboard',
  middleware: ['sanctum:auth'],
})
</script>

<template>
  <v-card-text>The navigation drawer will appear from the bottom on smaller size screens.</v-card-text>
</template>
