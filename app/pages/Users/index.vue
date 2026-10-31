<script setup lang="ts">
definePageMeta({
  title: 'User',
  middleware: ['sanctum:auth'],
  layout: 'default',
})

const store = useUserStore()
const { fetchItems } = useDatatable({
  fetchFn: store.getItems(),
})

const search = ref()
const headers = [
  { title: 'Name', key: 'name' },
  { title: 'Email', key: 'email' },
  { title: 'Created At', key: 'created_at' },
  { title: '', key: 'action', sortable: false, align: 'end' as const },
]

onMounted(async () => {
  fetchItems()
})
</script>

<template>
  <div>
    <VCard class="glass products-panel" flat>
      <VDataTable
        v-model:search="search"
        :headers="headers"
        :items="store.items.value.data"
        height="calc(100vh - 294px)"
        fixed-header
        hover
        class="bg-transparent"
        :header-props="{ class: 'glass-th' }"
      >
        <template #top>
          <VToolbar color="transparent">
            <VTextField
              v-model="search"
              class="ms-2"
              density="compact"
              label="Search"
              prepend-inner-icon="mdi-magnify"
              rounded="pill"
              hide-details
              single-line
              clearable
              max-width="320"
            />
            <VSpacer />
            <VBtn
              color="primary"
              prepend-icon="mdi-plus"
              variant="flat"
              height="40"
            >
              Add for production
            </VBtn>
          </VToolbar>
          <VDivider :opacity="0.2" />
        </template>
        <template #item.action="{ item }">
          <VBtn
            icon="mdi-pencil"
            variant="text"
            size="small"
            :aria-label="`Edit ${item.id}`"
          />
          <VBtn
            icon="mdi-delete"
            variant="text"
            size="small"
            color="red-lighten-2"
            :aria-label="`Delete ${item.id}`"
          />
        </template>
      </VDataTable>
    </VCard>
  </div>
</template>
