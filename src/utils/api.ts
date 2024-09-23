import qs from 'qs'
import axios, { AxiosError, type AxiosRequestConfig, type AxiosRequestHeaders } from 'axios'

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders
}

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (params: string | any) => qs.stringify(params),
  },
})

// Interceptors
httpClient.interceptors.request.use(
  (config): AdaptAxiosRequestConfig => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

httpClient.interceptors.response.use(
  async (response): Promise<any> => {
    return response
  },
  async (error): Promise<AxiosError> => {
    return Promise.reject(error)
  }
)
