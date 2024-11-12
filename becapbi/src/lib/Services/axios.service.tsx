import axios from "axios"


export const AxiosServiceCiclo = () => {
  return axios.get('http://sispos.dev.umss.net/api/postulacion/ciclo-formulario')
}

export const AxiosServiceLogin = (data: {}) => {
  return axios.post('http://sispos.dev.umss.net/api/postulante/login', data)
}