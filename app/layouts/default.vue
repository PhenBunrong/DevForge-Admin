<script setup lang="ts">
  const drawer = ref(false);
  const group = ref(null);
  const theme = ref('light')
  const auth = ref(true)

  const items = [
    {
      title: 'Production',
      disabled: false,
      href: 'breadcrumbs_dashboard',
    },
    {
      title: 'Link 1',
      disabled: false,
      href: 'breadcrumbs_link_1',
    },
    {
      title: 'Link 2',
      disabled: true,
      href: 'breadcrumbs_link_2',
    },
  ]

  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  watch(group, () => {
    drawer.value = false;
  });
</script>

<template>
  <VApp :theme="theme" class="bg-teal-darken-4">
    <VImg
      src="https://picsum.photos/1920/1080?random"
      cover
      max-height="100vh"
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
    >
      <template v-if="auth">
        <VNavigationDrawer
          :rail="drawer"
          permanent
          color="transparent"
        >
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
              value="products"
              to="products"
            />
            <VListItem
              prepend-icon="mdi-account-multiple"
              title="Category"
              value="shared"
              to="categories"
            />
            <VListItem
              prepend-icon="mdi-star"
              title="Inventory"
              value="starred"
              to="inventories"
            />
          </VList>
        </VNavigationDrawer>
        <VAppBar color="transparent" :elevation="0">
          <VAppBarNavIcon @click.stop="drawer = !drawer" />
          <VAppBarTitle>Title</VAppBarTitle>
          <VSpacer />
          <VBtn
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            text="Toggle Theme"
            slim
            @click="onClick"
          />
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
      </template>
      <VMain>
        <VDivider />
        <VBreadcrumbs :items="items" density="compact" class="my-0">
          <template #prepend>
            <v-icon icon="$vuetify" size="small"/>
          </template>
        </VBreadcrumbs>
        <VDivider />
        <VContainer fluid class="h-full">
          <NuxtPage />
        </VContainer>
      </VMain>
    </VImg>
  </VApp>
</template>
