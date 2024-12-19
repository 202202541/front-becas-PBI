import axios from "axios"

export const axiosInstance = axios.create({
  baseURL: "http://sispos.dev.umss.net/api",
  headers: { "Content-Type": "multipart/form-data" },
  timeout: 5000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken")

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      }
    }

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
