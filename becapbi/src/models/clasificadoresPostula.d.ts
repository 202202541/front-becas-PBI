export interface IClasificadoresResponse {
  status: string
  statusCode: number
  message: string
  lista_tipo_colegio: IDatos[]
  lista_estado_civil: IDatosPr
  lista_sexo: IDatosPr
  lista_sector_trabajo: IDatosPr[]
  lista_categoria_ocupacional: IDatosPr[]
  lista_dedicacion: IDatosPr[]
  lista_tipo_vivienda: IDatosPr[]
  lista_personas_vive_postulante: IDatosPr[]
  lista_pais: IDatos[]
  lista_departamento: IDatos[]
  lista_provincia: IDatos_departamento[]
  lista_municipio: IDatos_provincia[]
  lista_parentesco: IDatos[]
  lista_organizacion_social: IDatos[]
  lista_oferta_postulacion: IOferta_Fac_Carr[]
}

export interface IDatos {
  id: number
  descripcion: string
  sigla?: string
}

export interface IDatos_departamento extends IDatos {
  departamento_id: number
}

export interface IDatos_provincia extends IDatos {
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
