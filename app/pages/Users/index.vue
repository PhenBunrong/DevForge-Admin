<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core'

definePageMeta({
  title: 'User',
  middleware: ['sanctum:auth'],
  layout: 'default',
})

const store = useUserStore()

const fetchItems = useDebounceFn(store.getItems, 300, { maxWait: 3000 })

onMounted(async () => {
  fetchItems()
})
</script>

<template>
  <v-card-text>{{ store.items }}</v-card-text>
</template>
