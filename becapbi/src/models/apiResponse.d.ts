export interface IApiResponse<T> {
  data: T
  message: string
  status: string
  statusCode: number
}

export interface IApiResponseStatus {
  message: string
  status: string
  statusCode: number
}

export interface IStatusService {
  activo: boolean
}

export interface FormData {
  apellido1: string
  apellido2: string
  nombre1: string
  nombre2: string
  ci: string
  pais_nacionalidad_id: number
  fecha_nacimiento: string
  sexo: string
  estado_civil: string
  email: string
  telefono_celular: string
  nombre_colegio: string
  gestion_egreso_colegio: number
  tipo_colegio_id: number
}
