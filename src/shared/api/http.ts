import axios from 'axios'

const DEFAULT_TIMEOUT_MS = 10000

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: DEFAULT_TIMEOUT_MS,
  headers: {
    'Content-Type': 'application/json',
  },
})

http.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error),
)
