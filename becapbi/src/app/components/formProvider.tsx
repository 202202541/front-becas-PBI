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
  getSelectObjects: (obj: IDatosPr) => { value: string; label: string }[]
  mapToSelectOptions: (data: IDatos[]) => { value: string; label: string }[]
}

const initialForm: FormData = {
  postulante: {
    nombre2: "",
    apellido2: "",
    departamento_emision_ci_id: 0,
    telefono_celular: "",
    direccion_domicilio: "",
    telefono_domicilio: "",
    promedio1: 0,
    promedio2: 0,
    promedio3: 0,
  },
  dato_familiar: {
    en_contacto_padres: false,
    tiene_apoderado: false,
  },
  grupo_familiar: [],
  dato_socioeconomico: {
    es_dependiente: false,
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
      value: String(item.id),
      label: item.descripcion,
    })) || [];
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