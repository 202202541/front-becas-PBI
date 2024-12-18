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
