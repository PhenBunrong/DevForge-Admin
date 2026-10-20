<script setup lang="ts">
const dialogSynced = defineModel<boolean>({ required: true })

function save() {
  // your save logic
}
</script>

<template>
  <VNavigationDrawer
    v-model="dialogSynced"
    location="right"
    temporary
    width="440"
  >
    <v-card flat class="fill-height d-flex flex-column">
      <v-toolbar density="comfortable">
        <v-btn icon="mdi-close" @click="dialogSynced = false" />
        <v-toolbar-title>Products</v-toolbar-title>
      </v-toolbar>
      <v-card-text class="flex-grow-1 overflow-y-auto">
        <v-form>
          <VTextField
            label="Name"
            variant="outlined"
            name="code"
          />
          <VTextField
            label="Category"
            variant="outlined"
            name="code"
          />
          <div class="d-flex ga-2 md-6">
            <VTextField
              label="Price"
              variant="outlined"
              name="code"
              type="number"
            />
            <VTextField
              label="Qty"
              variant="outlined"
              name="code"
              type="number"
            />
          </div>
          <v-textarea label="Description" variant="outlined" />
          <!-- <v-file-upload
            browse-text="Local Filesystem"
            divider-text="or choose locally"
            icon="mdi-upload"
            title="Drag and Drop Here"
            indent-details
            show-size
          /> -->
          <v-switch label="Status" />
        </v-form>
      </v-card-text>
      <v-card-actions class="mt-auto">
        <v-spacer />
        <v-btn text="Cancel" variant="text" @click="dialogSynced = false" />
        <v-btn color="primary" text="Save" variant="flat" @click="save" />
      </v-card-actions>
    </v-card>
  </VNavigationDrawer>
</template>
