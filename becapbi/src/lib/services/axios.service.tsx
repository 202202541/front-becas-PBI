import axios from "axios"
import { FormData } from "@/app/register/page"
import { ApiResponse, ApiResponseStatus, StatusService } from "@/models/ApiResponse"
import { Postulante } from "@/models/Postulante"
import { ClasificadoresResponse } from "@/models/ClasificadoresPostula"
import { LoginResponse } from "@/models/Login"


const axiosPostulacionInstance = axios.create({
  baseURL: "http://sispos.dev.umss.net/api",
  headers:{"Content-Type" : "multipart/form-data"},
})

export const axiosGetServiceCiclo = async (): Promise<StatusService> => {
  const response = await axiosPostulacionInstance.get<StatusService>('postulacion/ciclo-formulario')
  return response.data
}

export const AxiosServiceCiclo = () =>{
  return axiosPostulacionInstance.get<StatusService>('postulacion/ciclo-formulario')
}

export const AxiosServiceLogin = async (data: { username: string, password: string }) => {
  const response = await axiosPostulacionInstance.post<LoginResponse>('postulante/login', data)
  return response.data
}


export const AxiosServiceClasificadoresCrea = () => {
  return axiosPostulacionInstance.get('postulacion/clasificadores-crea')
}

export const AxiosServiceCreaCuenta = (data: FormData) => {
  return axiosPostulacionInstance.post<ApiResponseStatus>('postulante/crea-cuenta',data)
}

export const AxiosServiceDatosIniciales = async (uuid: string, token: string) => {
  if (!uuid || !token) {
    console.log("UUID o Token no proporcionados")
  }
    const response = await axiosPostulacionInstance.get<ApiResponse<Postulante>>(`postulante/datos-iniciales?uuid=${uuid}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    })
    return response.data
}


export const AxiosServiceClasificadoresPostula = (token: string) => {
  return axiosPostulacionInstance.get<ClasificadoresResponse>('postulacion/clasificadores-postula',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
 
}