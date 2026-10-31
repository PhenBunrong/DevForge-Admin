import { useDebounceFn } from '@vueuse/core'

export function useDatatable(payload: any = {}) {
  const searchQuery = ref<any>({})
  const { query } = payload
  const tableOptions = ref<any>({
    count: 0,
    groupBy: [],
    groupDesc: [],
    itemsPerPage: 20,
    limit: 20,
    multiSort: false,
    mustSort: true,
    page: 1,
    pageCount: 1,
    sortBy: [{ key: 'created_at', order: 'desc' }],
    sortDesc: [true],
    total: 0,
  })
  const fetchData = async (condition?: any) => {
    if (typeof payload.fetchFn !== 'function') return
    const shouldReturn = condition?.shouldReturn as boolean

    const { itemsPerPage: limit, page } = tableOptions.value
    const sortBy = condition?.sortBy as Array<{ key: string, order: string }>
    const orderBy = sortBy && sortBy.length > 0 ? sortBy[0]?.key : 'created_at'
    const sortedBy = sortBy && sortBy.length > 0 ? sortBy[0]?.order : 'desc'
    const options = condition?.options as any

    Object.assign(searchQuery.value, { limit, orderBy, page, sortedBy, ...query, ...options })

    const fetchPayload = payload.fetchParams ?? searchQuery
    await payload.fetchFn({ query: fetchPayload.value, shouldReturn })
  }

  const fetchItems = useDebounceFn(fetchData, 300, { maxWait: 3000 })

  return { fetchItems }
}
