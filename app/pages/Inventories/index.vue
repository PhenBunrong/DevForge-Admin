<script setup lang="ts">
definePageMeta({
  title: 'Inventory',
  middleware: ['sanctum:auth'],
  layout: 'default',
})
</script>

<template>
  <v-card-text>Inventory</v-card-text>
</template>
