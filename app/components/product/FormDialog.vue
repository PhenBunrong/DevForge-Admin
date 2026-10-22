<script setup lang="ts">
const dialogSynced = defineModel<boolean>({ required: true })

function save() {
  // your save logic
}
</script>

<template>
  <VNavigationDrawer v-model="dialogSynced" location="right" temporary width="440">
    <v-card flat color="transparent" class="fill-height d-flex flex-column">
      <v-toolbar density="comfortable" color="transparent">
        <v-btn icon="mdi-close" variant="text" @click="dialogSynced = false" />
        <v-toolbar-title>Products</v-toolbar-title>
      </v-toolbar>

      <v-card-text class="flex-grow-1 overflow-y-auto pt-4">
        <v-form>
          <VTextField label="Name" name="name" />
          <VTextField label="Category" name="category" />
          <div class="d-flex ga-2">
            <VTextField label="Price" name="price" type="number" />
            <VTextField label="Qty" name="qty" type="number" />
          </div>
          <v-textarea label="Description" name="description" />
          <v-switch label="Status" color="white" />
        </v-form>
      </v-card-text>

      <v-card-actions class="mt-auto pa-4">
        <v-spacer />
        <v-btn text="Cancel" variant="text" @click="dialogSynced = false" />
        <v-btn color="primary" text="Save" variant="flat" @click="save" />
      </v-card-actions>
    </v-card>
  </VNavigationDrawer>
</template>
