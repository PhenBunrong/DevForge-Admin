<script setup lang="ts">
definePageMeta({
  title: 'Dashboard',
  middleware: ['sanctum:auth'],
})

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()
</script>

<template>
  <div>Current Count: {{ counter.count }}</div>
</template>
