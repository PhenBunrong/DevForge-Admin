<script setup lang="ts">
// Cookie-backed so the theme survives refresh and SSR doesn't flash
const theme = useCookie<'light' | 'dark'>('theme', { default: () => 'dark' })
const rail = ref(false)
const auth = ref(true)
const isPageLoading = ref(true) // swap for useLoadingIndicator().isLoading in real use

const navItems = [
  { title: 'Dashboard', icon: 'mdi-package-variant', to: '/dashboard' },
  { title: 'Product', icon: 'mdi-package-variant', to: '/products' },
  { title: 'Category', icon: 'mdi-shape', to: '/categories' },
  { title: 'Inventory', icon: 'mdi-warehouse', to: '/inventories' },
  { title: 'User', icon: 'mdi-warehouse', to: '/users' },
  { title: 'Test', icon: 'mdi-warehouse', to: '/test' },
]

const crumbs = [
  { title: 'Production', to: '/', disabled: false },
  { title: 'Link 1', to: '/link-1', disabled: false },
  { title: 'Link 2', to: '/link-2', disabled: true },
]

const toggleTheme = () => {
  theme.value = theme.value === 'light' ? 'dark' : 'light'
}

onMounted(() => setTimeout(() => (isPageLoading.value = false), 1500))
</script>

<template>
  <VApp :theme="theme" class="app-shell">
    <template v-if="auth">
      <VNavigationDrawer v-model:rail="rail" permanent rail-width="84" width="280">
        <template v-if="isPageLoading">
          <div class="pa-3">
            <VSkeletonLoader type="list-item-avatar-two-line" class="bg-transparent" />
            <VDivider class="my-2" />
            <VSkeletonLoader type="list-item, list-item, list-item" class="bg-transparent" />
          </div>
        </template>
        <template v-else>
          <VList class="pa-2">
            <VListItem
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              subtitle="sandra_a88@gmail.com"
              title="Sandra Adams"
              rounded="xl"
            />
          </VList>
          <VDivider :opacity="0.2" class="mx-4" />
          <VList density="comfortable" nav class="pa-2">
            <VListItem
              v-for="item in navItems"
              :key="item.to"
              :prepend-icon="item.icon"
              :title="item.title"
              :to="item.to"
              rounded="xl"
            />
          </VList>
        </template>
      </VNavigationDrawer>
      <VAppBar color="transparent" flat>
        <VAppBarNavIcon aria-label="Toggle sidebar" @click.stop="rail = !rail" />
        <template v-if="isPageLoading">
          <VSkeletonLoader type="text" width="120" class="bg-transparent me-auto ms-3" />
          <VSkeletonLoader type="button" width="100" class="bg-transparent me-2" />
        </template>
        <template v-else>
          <VAppBarTitle class="font-weight-medium">Title</VAppBarTitle>
          <VSpacer />
          <VBtn
            :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
            :text="theme === 'light' ? 'Light' : 'Dark'"
            slim
            @click="toggleTheme"
          />
          <VBtn icon="mdi-magnify" aria-label="Search" />
          <VBtn icon="mdi-heart" aria-label="Favorites" />
          <VBtn icon="mdi-dots-vertical" aria-label="More" />
        </template>
      </VAppBar>
    </template>
    <VMain>
      <VContainer fluid class="h-100 px-3 pb-1">
        <VSkeletonLoader
          v-if="isPageLoading"
          type="text"
          width="220"
          class="bg-transparent mb-4"
        />
        <VBreadcrumbs
          v-else
          :items="crumbs"
          density="compact"
          class="rounded-pill d-inline-flex w-auto px-4 mt-2 mb-4"
        >
          <template #prepend>
            <VIcon icon="$vuetify" size="small" />
          </template>
        </VBreadcrumbs>

        <div v-if="isPageLoading" class="d-flex flex-column ga-4">
          <VSkeletonLoader type="heading, paragraph" class="bg-transparent" />
          <VSkeletonLoader type="table-row-divider@4" class="bg-transparent" />
        </div>
        <NuxtPage v-else :transition="{ name: 'page', mode: 'out-in' }" />
      </VContainer>
    </VMain>
  </VApp>
</template>

<style scoped>
.app-shell {
  isolation: isolate;
  background: rgb(var(--v-theme-background)) !important;
}

.app-shell::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(60% 50% at 15% 20%, rgba(128, 208, 199, 0.55), transparent 70%),
    radial-gradient(55% 45% at 85% 75%, rgba(19, 84, 122, 0.65), transparent 70%),
    radial-gradient(40% 40% at 70% 15%, rgba(255, 170, 120, 0.3), transparent 70%),
    linear-gradient(rgba(8, 24, 38, 0.35), rgba(8, 24, 38, 0.35)),
    url('https://picsum.photos/id/1018/1920/1080') center / cover no-repeat;
  background-size: 140% 140%, 140% 140%, 140% 140%, auto, cover;
  animation: drift 40s ease-in-out infinite alternate;
}

@keyframes drift {
  to { background-position: 100% 60%, 0% 40%, 40% 100%, 0 0, center; }
}

@media (prefers-reduced-motion: reduce) {
  .app-shell::before { animation: none; }
}
</style>
