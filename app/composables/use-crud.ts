import { ref, type Ref } from 'vue'

export function useCrud() {
  const { $httpSanctum } = useNuxtApp()
  const items: Ref = ref([])

  async function getItems() {
    try {
      // const { data} = useSanctumFetch<any[]>('/api/users')
      const { data } = await $httpSanctum.get('/api/users')

      items.value = data ?? []
    }
    catch {
      //
    }
    finally {
      console.log('Finished fetching items')
    }
  }
  return { getItems, items }
}
