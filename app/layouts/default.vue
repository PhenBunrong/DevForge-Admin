<script setup lang="ts">
const drawer = ref(false)
const group = ref(null)
const theme = ref('light')
const auth = ref(true)
const isPageLoading = ref(true)

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

function onClick() {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

watch(group, () => {
  drawer.value = false
})

onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false
  }, 1500)
})
</script>

<template>
  <VApp :theme="theme" class="bg-teal-darken-4">
    <VImg
      src="https://picsum.photos/1920/1080?random"
      cover
      max-height="100vh"
      gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"
    >
      <template #placeholder>
        <div class="d-flex align-center justify-center fill-height">
          <VProgressCircular color="grey-lighten-4" indeterminate size="64" />
        </div>
      </template>
      <template v-if="auth">
        <VNavigationDrawer
          :rail="drawer"
          permanent
          color="transparent"
        >
          <template v-if="isPageLoading">
            <div class="pa-2">
              <VSkeletonLoader type="list-item-avatar-two-line" class="bg-transparent" />
              <VDivider class="my-2" />
              <VSkeletonLoader type="list-item, list-item, list-item" class="bg-transparent" />
            </div>
          </template>
          <template v-else>
            <VList>
              <VListItem
                prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                subtitle="sandra_a88@gmail.com"
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
          </template>
        </VNavigationDrawer>
        <VAppBar color="transparent" :elevation="0">
          <VAppBarNavIcon @click.stop="drawer = !drawer" />
          <template v-if="isPageLoading">
            <VSkeletonLoader type="text" width="120" class="bg-transparent me-auto ms-3" />
            <div class="d-flex align-center gap-2 me-2">
              <VSkeletonLoader type="button" width="100" class="bg-transparent" />
              <VSkeletonLoader type="avatar, avatar, avatar" class="bg-transparent" />
            </div>
          </template>
          <template v-else>
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
          </template>
        </VAppBar>
      </template>
      <VMain>
        <VDivider />
        <template v-if="isPageLoading">
          <div class="px-4 py-2">
            <VSkeletonLoader type="text" width="220" class="bg-transparent" />
          </div>
        </template>
        <template v-else>
          <VBreadcrumbs :items="items" density="compact" class="my-0">
            <template #prepend>
              <VIcon icon="$vuetify" size="small" />
            </template>
          </VBreadcrumbs>
        </template>
        <VDivider />
        <VContainer fluid class="h-full">
          <template v-if="isPageLoading">
            <div class="d-flex flex-column gap-4">
              <VSkeletonLoader type="heading, paragraph" class="bg-transparent mb-4" />
              <VSkeletonLoader type="table-row-divider@4" class="bg-transparent" />
            </div>
          </template>
          <NuxtPage v-else />
        </VContainer>
      </VMain>
    </VImg>
  </VApp>
</template>
