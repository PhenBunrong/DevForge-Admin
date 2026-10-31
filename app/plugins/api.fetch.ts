import type { FetchOptions } from 'ofetch'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()

  const createRequest
    = (method: any) =>
      async <T = any>(url: string, options: FetchOptions = {}): Promise<T> => {
        return $fetch<T>(url, {
          method,
          baseURL: config.public.baseUrl, // only root
          ...options,
        })
      }

  const $http = {
    get: createRequest('GET'),
    post: createRequest('POST'),
    put: createRequest('PUT'),
    delete: createRequest('DELETE'),
    patch: createRequest('PATCH'),
  }

  return {
    provide: {
      http: $http,
    },
  }
})
