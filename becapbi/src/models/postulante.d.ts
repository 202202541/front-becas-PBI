export interface IPostulante {
  nombre1: string
  apellido1: string
  apellido2: string
  nombre2: string
  ci: string
  departamento_emision_ci_id: number
  pais_nacionalidad_id: number
  fecha_nacimiento: string
  sexo: string
  estado_civil: string
  email: string
  telefono_celular: string
  nombre_colegio: string
  gestion_egreso_colegio: number
  tipo_colegio_id: number
  direccion_domicilio: string
  telefono_domicilio: string

  promedio1: number
  promedio2: number
  promedio3: number

  // uuid: string
  estado: string

  municipio_nacimiento_id: number
  municipio_colegio_id: number
  municipio_residencia_id: number
}
