import { useSanctumFetch } from '#imports'

export default defineNuxtPlugin(() => {
  const createRequest = (method: string) => {
    return (url: string, options: any = {}) => {
      return useSanctumFetch(url, {
        method,
        ...options,
      })
    }
  }

  const $httpSanctum = {
    get: createRequest('GET'),
    post: createRequest('POST'),
    put: createRequest('PUT'),
    delete: createRequest('DELETE'),
    patch: createRequest('PATCH'),
  }

  return {
    provide: {
      httpSanctum: $httpSanctum,
    },
  }
})
