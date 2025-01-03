interface FormData {
  postulante: {
    nombre2: string,
    apellido2: string,
    departamento_emision_ci_id: number,
    telefono_celular: string,
    direccion_domicilio: string,
    telefono_domicilio: string,

    promedio1: number,
    promedio2: number,
    promedio3: number,
  }
  dato_familiar: {
    en_contacto_padres: boolean,
    tiene_apoderado: boolean,
    direccion_padres?: string,
    telefono_padres?: string,
    celular_padres?: string,
    referencia_padres?: string,
    tipo_vivienda_pad?: string,
    nombres_apellido_apoderado?: string,
    direccion_apoderado?: string,
    telefono_apoderado?: string,
    celular_apoderado?: string,
    referencia_apoderado?: string,
  }
  grupo_familiar: {
    id?: number
    apellidos?: string
    nombres?: string
    edad?: number
    ocupacion?: string
    estado_civil?: string
    parentesco_id?: number
  }[]
  dato_socioeconomico: {
    es_dependiente: boolean
    nombres_apellidos_responsable?: string
    parentesco?: string
    fecha_nacimiento?: Date
    estado_civil?: string
    nro_integrantes_familia?: number
    ocupacion?: string
    institucion_trabajo?: string
    telefono_trabajo?: string
    salario_ingreso?: number
    otro_ingreso?: number
    sector_trabajo?: string
    categoria_ocupacional?: string
    dedicacion_trabajo?: string
    postulante_vive_con?: string
    tipo_vivienda_pos?: string  
  }
  postulacion: {
    uuid?: string
    oferta_id?: number
  }
}

export default FormData