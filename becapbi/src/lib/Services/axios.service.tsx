import axios from "axios";
import { FormData } from "@/app/register/page";


const axiosPostulacionInstance = axios.create({
  baseURL: "http://sispos.dev.umss.net/api",
  headers:{"Content-Type" : "multipart/form-data"},
});

//Servicios para el login

interface LoginResponse {
  token : string;
  statusCode: number;
  message: string;
  uuid: string;
}

interface RespuestaValida {
  activo: boolean;
}

export const AxiosServiceCiclo = () =>{
  return axiosPostulacionInstance.get<RespuestaValida>('postulacion/ciclo-formulario');
}


export const AxiosServiceLogin = (data: { username: string; password: string }) => {
  return axiosPostulacionInstance.post<LoginResponse>('postulante/login', data)
};



//servicios para el registro

interface ResponseData {
  statusCode: number;
  message: string;
}

export const AxiosServiceClasificadoresCrea = () => {
  return axiosPostulacionInstance.get('postulacion/clasificadores-crea');
}

export const AxiosServiceCreaCuenta = (data: FormData) => {
  return axiosPostulacionInstance.post<ResponseData>('postulante/crea-cuenta',data);
}

//servicio para objetener los datos del postulante
export const AxiosServiceDatosIniciales = (uuid: string, token: string) => {
  if (!uuid || !token) {
    console.log("UUID o Token no proporcionados");
  }

  return axiosPostulacionInstance.get(`postulante/datos-iniciales?uuid=${uuid}`, {
    headers: {
      //Authorization: `Bearer ${token}`,
    }
  });
};

//servicio para los clasificadores del llenado del formulario
export const AxiosServiceClasificadoresPostula = (token: string) => {
  return axiosPostulacionInstance.get('postulacion/clasificadores-postula',{
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
 
}
