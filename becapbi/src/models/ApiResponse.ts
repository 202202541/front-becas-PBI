export interface ApiResponse<T> {
  data: T
  message: string
  status: string
  statusCode: number
}

export interface ApiResponseStatus {
  message: string
  status: string
  statusCode: number
}

export interface StatusService {
  activo: boolean
}
