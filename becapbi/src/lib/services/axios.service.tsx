import { FormData } from "@/app/register/page"
import { axiosInstance } from "@/lib/services/axios.interceptor"
import { IApiResponse, IApiResponseStatus, IStatusService } from "@/models/apiResponse"
import { IClasificadoresResponse } from "@/models/clasificadoresPostula"
import { ILoginResponse } from "@/models/login"
import { IPostulante } from "@/models/postulante"
import axios from "axios"

export const axiosGetServiceCiclo = async (): Promise<IStatusService> => {
  const response = await axiosInstance.get<IStatusService>('postulacion/ciclo-formulario')
  return response.data
}

export const axiosPostServiceLogin = async (data: { username: string, password: string }): Promise<ILoginResponse> => {
  const response = await axiosInstance.post<ILoginResponse>('postulante/login', data)
  return response.data
}

export const axiosGetServiceClasificadoresCrea = async () => {
  const response = await axiosInstance.get('postulacion/clasificadores-crea')
  return response.data
}

export const axiosPostServiceCreaCuenta = async (data: FormData): Promise<IApiResponseStatus> => {
  const response = await axiosInstance.post<IApiResponseStatus>('postulante/crea-cuenta', data)
  return response.data
}

export const axiosGetServiceDatosIniciales = async (uuid: string, token: string): Promise<IApiResponse<IPostulante>> => {
  const response = await axiosInstance.get<IApiResponse<IPostulante>>(`postulante/datos-iniciales?uuid=${uuid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data
}

export const axiosGetServiceClasificadoresPostula = async (token: string): Promise<IClasificadoresResponse> => {
  const response = await axiosPostulacionInstance.get<IClasificadoresResponse>('postulacion/clasificadores-postula', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  return response.data
}


// ***** DEPRECATED *****

const axiosPostulacionInstance = axios.create({
  baseURL: "http://sispos.dev.umss.net/api",
  headers: { "Content-Type": "multipart/form-data" },
})

export const AxiosServiceCiclo = () =>{
  return axiosPostulacionInstance.get<IStatusService>('postulacion/ciclo-formulario')
}

export const AxiosServiceLogin = async (data: { username: string, password: string }) => {
  const response = await axiosPostulacionInstance.post<ILoginResponse>('postulante/login', data)
  return response.data
}

export const AxiosServiceClasificadoresCrea = () => {
  return axiosPostulacionInstance.get('postulacion/clasificadores-crea')
}

export const AxiosServiceCreaCuenta = (data: FormData) => {
  return axiosPostulacionInstance.post<IApiResponseStatus>('postulante/crea-cuenta', data)
}

export const AxiosServiceDatosIniciales = async (uuid: string, token: string) => {
  if (!uuid || !token) {
    console.log("UUID o Token no proporcionados")
  }
  const response = await axiosPostulacionInstance.get<IApiResponse<IPostulante>>(`postulante/datos-iniciales?uuid=${uuid}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  })
  return response.data
}

export const AxiosServiceClasificadoresPostula = (token: string) => {
  return axiosPostulacionInstance.get<IClasificadoresResponse>('postulacion/clasificadores-postula', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
