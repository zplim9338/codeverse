import axios, {
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from 'axios'
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  setTokens,
} from './tokenService'
import { ApiResponse } from './commonTypes'

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getAccessToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean
    }
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = getRefreshToken()
      try {
        const { data } = await axios.post<ApiResponse<any>>(
          `${process.env.REACT_APP_API_BASE_URL}/auth/refresh-token`,
          { refresh_token: refreshToken }
        )

        if (data.status) {
          setTokens(data.data.accessToken, data.data.refreshToken)
          axiosInstance.defaults.headers.common['Authorization'] =
            `Bearer ${data.data.accessToken}`
          return axiosInstance(originalRequest)
        } else {
          clearTokens()
          window.location.href = '/login' // Redirect to login page
          return Promise.reject(data.message)
        }
      } catch (err) {
        clearTokens()
        window.location.href = '/login' // Redirect to login page
        return Promise.reject(err)
      }
    }
    return Promise.reject(error)
  }
)

export default axiosInstance
