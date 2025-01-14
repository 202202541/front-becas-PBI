import React, { createContext, useContext, useState } from "react"
import FormData from "@/models/formData"
import { useQuery } from "@tanstack/react-query"
import { IClasificadoresResponse } from "@/models/clasificadoresPostula"
import { axiosGetServiceClasificadoresPostula } from "@/lib/services/axios.service"
import { useAuth } from "@/hooks/useAuth"
import { IDatosPr, IDatos } from "@/models/clasificadoresPostula"

interface FormContextProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
  clasificadoresResponse: IClasificadoresResponse
  succesClasificadores: boolean
  getSelectObjects: (obj: IDatosPr) => { value: string | number; label: string }[]
  mapToSelectOptions: (data: IDatos[]) => { value: string | number; label: string }[]
}

const initialForm: FormData = {
  postulante: {
    nombre2: "",
    apellido2: "",
    departamento_emision_ci_id: 0,
    telefono_celular: "",
    direccion_domicilio: "",
    telefono_domicilio: "",
    promedio1: "",
    promedio2: "",
    promedio3: "",
  },
  dato_familiar: {
    en_contacto_padres: false,
    tiene_apoderado: false,
    direccion_padres: "",
    telefono_padres: "",
    celular_padres: "",
    referencia_padres: "",
    tipo_vivienda_pad: "",
    
    nombres_apellido_apoderado: "",
    direccion_apoderado: "",
    telefono_apoderado: "",
    celular_apoderado: "",
    referencia_apoderado: "",
  },
  grupo_familiar: [],
  dato_socioeconomico: {
    es_dependiente: "false",
    nombres_apellidos_responsable: "",
    parentesco: "",
    fecha_nacimiento: new Date(),
    estado_civil: "",
    nro_integrantes_familia: "",
    ocupacion: "",
    institucion_trabajo: "",
    telefono_trabajo: "",
    salario_ingreso: "",
    otro_ingreso: "",
    sector_trabajo: "",
    categoria_ocupacional: "",
    dedicacion_trabajo: "",
    postulante_vive_con: "",
    tipo_vivienda_pos: "",
    // municipio_trabajo_id: 0,
  },
  postulacion: {
    uuid: "",
    oferta_id: 1,
  },
}

export const clasificadoresInitialState: IClasificadoresResponse = {
  status: "",
  statusCode: 0,
  message: "",
  lista_tipo_colegio: [],
  lista_estado_civil: {},
  lista_sexo: {},
  lista_sector_trabajo: {},
  lista_categoria_ocupacional: {},
  lista_dedicacion: {},
  lista_tipo_vivienda: {},
  lista_personas_vive_postulante: {},
  lista_pais: [],
  lista_departamento: [],
  lista_provincia: [],
  lista_municipio: [],
  lista_parentesco: [],
  lista_organizacion_social: [],
  lista_oferta_postulacion: []
}

export const FormContext = createContext<FormContextProps>({
  formData: initialForm,
  setFormData: () => { },
  clasificadoresResponse: clasificadoresInitialState,
  succesClasificadores: false,
  getSelectObjects: () => [],
  mapToSelectOptions: () => []
})

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { token } = useAuth()
  const [formData, setFormData] = useState<FormData>(initialForm)
  const { data: dataClasificadores, isSuccess: succesClasificadores } = useQuery<IClasificadoresResponse>({
    queryKey: ["data-clasificadores-postula"],
    queryFn: () => axiosGetServiceClasificadoresPostula(token)
  })
  const mapObjectToOptions  = (obj: IDatosPr) => {
    return Object.keys(obj).map((key) => ({
      value: key,
      label: obj[key],
    }))
  }
  const mapToSelectOptions = (data: IDatos[]) => {
    return data?.map((item) => ({
      value: item.id,
      label: item.descripcion,
    }))
  }
  return (
    <FormContext.Provider value={{
      formData, setFormData,
      clasificadoresResponse: dataClasificadores || clasificadoresInitialState,
      succesClasificadores: succesClasificadores || false,
      getSelectObjects: mapObjectToOptions,
      mapToSelectOptions: mapToSelectOptions
    }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)