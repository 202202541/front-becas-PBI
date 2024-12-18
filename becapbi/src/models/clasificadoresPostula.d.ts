export interface IClasificadoresResponse {
  status: string
  statusCode: number
  message: string
  lista_tipo_colegio: Datos[]
  lista_estado_civil: DatosPr
  lista_sexo: DatosPr
  lista_sector_trabajo: DatosPr
  lista_categoria_ocupacional: DatosPr
  lista_dedicacion: DatosPr
  lista_tipo_vivienda: DatosPr
  lista_personas_vive_postulante: DatosPr
  lista_pais: Datos[]
  lista_departamento: Datos[]
  lista_provincia: Datos_departamento[]
  lista_municipio: Datos_provincia[]
  lista_parentesco: Datos[]
  lista_organizacion_social: Datos[]
  lista_oferta_postulacion: Oferta_Fac_Carr[]
}

export interface IClasificadoresDataP {
  lista_tipo_colegio: Datos[]
  lista_estado_civil: DatosPr
  lista_sexo: DatosPr
  lista_sector_trabajo: DatosPr
  lista_categoria_ocupacional: DatosPr
  lista_dedicacion: DatosPr
  lista_tipo_vivienda: DatosPr
  lista_personas_vive_postulante: DatosPr
  lista_pais: Datos[]
  lista_departamento: Datos[]
  lista_provincia: Datos_departamento[]
  lista_municipio: Datos_provincia[]
  lista_parentesco: Datos[]
  lista_organizacion_social: Datos[]
  lista_oferta_postulacion: Oferta_Fac_Carr[]
}

export interface IDatos {
  id: number
  descripcion: string
  sigla?: string
}

export interface IDatos_departamento extends Datos {
  departamento_id: number
}

export interface IDatos_provincia extends Datos {
  provincia_id: number
}

export interface IOferta_Fac_Carr {
  oferta_id: number
  plan_estudio_id: string
  plan_estudio: string
  facultad_id: number
  facultad: string
}

export interface IDatosPr {
  [key: string]: string
}
