<script setup lang="ts">
definePageMeta({
  title: 'Categories',
  middleware: ['sanctum:auth'],
  layout: 'default',
})
</script>

<template>
  <v-card-text>Categories</v-card-text>
</template>
