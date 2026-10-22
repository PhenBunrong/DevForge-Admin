<script setup lang="ts">
definePageMeta({
  layout: 'default',
})

const search = ref('')
const showProductDialog = ref(false)

const headers = [
  { title: 'Image', key: 'image', sortable: false },
  { title: 'Name', key: 'name' },
  { title: 'Price', key: 'price', align: 'end' as const },
  { title: 'Rating', key: 'rating' },
  { title: 'Stock', key: 'stock', align: 'end' as const },
  { title: '', key: 'action', sortable: false, align: 'end' as const },
]

const items = [
  { name: 'Nebula GTX 3080', image: '1.png', price: 699.99, rating: 5, stock: true },
  { name: 'Galaxy RTX 3080', image: '2.png', price: 799.99, rating: 4, stock: false },
  { name: 'Orion RX 6800 XT', image: '3.png', price: 649.99, rating: 3, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Vortex RTX 3090', image: '4.png', price: 1499.99, rating: 4, stock: true },
  { name: 'Cosmos GTX 1660 Super', image: '5.png', price: 299.99, rating: 4, stock: false },
]

const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })
</script>

<template>
  <div>
    <ProductFormDialog v-model="showProductDialog" />
    <VCard class="glass products-panel" flat>
      <VDataTable
        v-model:search="search"
        :headers="headers"
        :items="items"
        :filter-keys="['name']"
        height="calc(100vh - 299px)"
        fixed-header
        hover
        class="bg-transparent"
        :header-props="{ class: 'glass-th' }"
      >
        <template #top>
          <VToolbar color="transparent" class="px-2">
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
              @click="showProductDialog = true"
            >
              Add for production
            </VBtn>
          </VToolbar>
          <VDivider :opacity="0.2" />
        </template>
        <template #item.image="{ item }">
          <VCard class="my-2 thumb" flat rounded="lg" width="96">
            <VImg
              :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
              :alt="item.name"
              height="56"
              cover
            />
          </VCard>
        </template>
        <template #item.price="{ item }">
          <span class="font-weight-medium">{{ currency.format(item.price) }}</span>
        </template>
        <template #item.rating="{ item }">
          <VRating
            :model-value="item.rating"
            color="amber-lighten-1"
            active-color="amber-lighten-1"
            density="compact"
            size="small"
            readonly
          />
        </template>

        <template #item.stock="{ item }">
          <VChip
            :color="item.stock ? 'green-accent-2' : 'red-lighten-2'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            :prepend-icon="item.stock ? 'mdi-check-circle' : 'mdi-close-circle'"
            class="text-uppercase glass-chip"
            size="small"
            variant="tonal"
          />
        </template>

        <template #item.action="{ item }">
          <VBtn
            icon="mdi-pencil"
            variant="text"
            size="small"
            :aria-label="`Edit ${item.name}`"
          />
          <VBtn
            icon="mdi-delete"
            variant="text"
            size="small"
            color="red-lighten-2"
            :aria-label="`Delete ${item.name}`"
          />
        </template>
      </VDataTable>
    </VCard>
  </div>
</template>
