<script setup lang="ts">
const drawer = ref(false);
const group = ref(null);

watch(group, () => {
  drawer.value = false;
});
</script>

<template>
  <VApp>
    <VNavigationDrawer
      :rail="drawer"
      permanent
      color="teal-darken-4"
      image="https://picsum.photos/1920/1080?random"
    >
      <template v-slot:image>
        <VImg gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)" />
      </template>
      <VList>
        <VListItem
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          subtitle="sandra_a88@gmailcom"
          title="Sandra Adams"
        />
      </VList>
      <VDivider />
      <VList density="compact" nav>
        <VListItem
          prepend-icon="mdi-folder"
          title="Promotion"
          value="myfiles"
        />
        <VListItem
          prepend-icon="mdi-account-multiple"
          title="Category"
          value="shared"
        />
        <VListItem
          prepend-icon="mdi-star"
          title="Inventory"
          value="starred"
        />
      </VList>
    </VNavigationDrawer>
    <VAppBar color="white">
      <template v-slot:prepend>
        <VAppBarNavIcon
          @click.stop="drawer = !drawer"
        />
      </template>
      <VAppBarTitle>Title</VAppBarTitle>
      <VBtn icon>
        <VIcon>mdi-magnify</VIcon>
      </VBtn>
      <VBtn icon>
        <VIcon>mdi-heart</VIcon>
      </VBtn>
      <VBtn icon>
        <VIcon>mdi-dots-vertical</VIcon>
      </VBtn>
    </VAppBar>
    <VMain>
      <slot />
    </VMain>
  </VApp>
</template>
