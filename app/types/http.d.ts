type HttpMethod = <T = any>(url: string, options?: any) => Promise<T>

interface HttpClient {
  get: HttpMethod
  post: HttpMethod
  put: HttpMethod
  delete: HttpMethod
  patch: HttpMethod
}

declare module '#app' {
  interface NuxtApp {
    $http: HttpClient
    $httpSanctum: HttpClient
  }
}

export {}
