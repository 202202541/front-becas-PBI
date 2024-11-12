import axios from "axios"

export const AxiosServiceLogin = (data: {}) => {
  return axios.post('http://sispos.dev.umss.net/api/postulante/login', data)
}