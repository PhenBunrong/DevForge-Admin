<script setup lang="ts">
definePageMeta({
    layout: "default",
});

const search = ref('')
const items = [
    {
        name: 'Nebula GTX 3080',
        image: '1.png',
        price: 699.99,
        rating: 5,
        stock: true,
    },
    {
        name: 'Galaxy RTX 3080',
        image: '2.png',
        price: 799.99,
        rating: 4,
        stock: false,
    },
    {
        name: 'Orion RX 6800 XT',
        image: '3.png',
        price: 649.99,
        rating: 3,
        stock: true,
    },
    {
        name: 'Vortex RTX 3090',
        image: '4.png',
        price: 1499.99,
        rating: 4,
        stock: true,
    },
    {
        name: 'Cosmos GTX 1660 Super',
        image: '5.png',
        price: 299.99,
        rating: 4,
        stock: false,
    },
]
</script>

<template>
  <!-- <VCard color="transparent" :elevation="1"> -->
    <VDataTable
      v-model:search="search"
      :filter-keys="['name']"
      :items="items"
      height="calc(100vh - 270px)"
      class="bg-transparent"
    >
      <template #top>
        <VToolbar color="transparent" class="pr-2">
          <!-- <VToolbarTitle>Production</VToolbarTitle> -->
          <VTextField
            v-model="search"
            density="compact"
            label="Search"
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            hide-details
            single-line
            max-width="300"
          />
          <VSpacer />
          <VBtn color="primary" prepend-icon="mdi-alarm-light" variant="outlined" height="40">
            Add For Production
          </VBtn>
        </VToolbar>
        <VDivider />
      </template>
      <template v-slot:header.stock>
        <div class="text-end">Stock</div>
      </template>
      <template v-slot:item.image="{ item }">
        <VCard class="my-2" elevation="1" rounded>
          <VImg
            :src="`https://cdn.vuetifyjs.com/docs/images/graphics/gpus/${item.image}`"
            height="64"
            cover
          />
        </VCard>
      </template>
      <template v-slot:item.rating="{ item }">
        <v-rating
          :model-value="item.rating"
          color="orange-darken-2"
          density="compact"
          size="small"
          readonly
        ></v-rating>
      </template>
      <template v-slot:item.stock="{ item }">
        <div class="text-end">
          <v-chip
            :color="item.stock ? 'green' : 'red'"
            :text="item.stock ? 'In stock' : 'Out of stock'"
            class="text-uppercase"
            size="small"
            variant="elevated"
            elevation="0"
          ></v-chip>
        </div>
      </template>
    </VDataTable>
  <!-- </VCard> -->
</template>
