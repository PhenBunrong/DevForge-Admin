import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  return useCrud()
})
// export const useUserStore = defineStore('user', () => {
//   const items: Ref<any> = ref()

//   function getItems() {
//     try {
//       alert(3)
//       const res = useSanctumFetch<any[]>('/api/users')

//       items.value = res.data ?? []
//     }
//     catch (err) {
//       console.error('Unexpected error:', err)
//     }
//     finally {
//       console.log('Finished fetching items')
//     }
//   }
//   return { getItems, items }
// })
// return useCrud()
// const items: Ref<any[]> = ref([])
//   function getItems() {
//     try {
//       const config = useRuntimeConfig()
//       // useSanctumFetch returns a ref, so you must await and access .value
//       const { data, error } = useSanctumFetch<any[]>('/api/membership-tiers')

//       if (error.value) {
//         console.error('Sanctum fetch error:', error.value)
//       } else {
//         items.value = data.value ?? []
//         console.log('Fetched items via Sanctum:', items.value)
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err)
//     } finally {
//       console.log('Finished fetching items')
//     }
//   }

// return { getItems, items }
// })

// export function useUserStore() {
//   const config = useRuntimeConfig()
//   // const { data: membershipTiers, error } = useFetch(`${config.public.baseUrl}/api/membership-tiers`)
//     const { data } = useSanctumFetch('/api/candidates')
//   return { data }
// }

// if (import.meta.hot) import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
