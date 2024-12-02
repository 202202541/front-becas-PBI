import axios from "axios"
import { FormData } from "@/app/register/page"
import { ApiResponse, ApiResponseStatus, StatusService } from "@/Models/ApiResponse"
import { Postulante } from "@/Models/Postulante"


const axiosPostulacionInstance = axios.create({
  baseURL: "http://sispos.dev.umss.net/api",
  headers:{"Content-Type" : "multipart/form-data"},
})


export const AxiosServiceCiclo = () =>{
  return axiosPostulacionInstance.get<StatusService>('postulacion/ciclo-formulario')
}

export const AxiosServiceLogin = (data: { username: string, password: string }) => {
  return axiosPostulacionInstance.post<ApiResponse<string>>('postulante/login', data)
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
    const postulanteResponse = response.data
    return postulanteResponse 
}

//servicio para los clasificadores del llenado del formulario
export const AxiosServiceClasificadoresPostula = (token: string) => {
  return axiosPostulacionInstance.get('postulacion/clasificadores-postula',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
 
}
