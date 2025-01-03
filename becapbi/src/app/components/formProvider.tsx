import React, { createContext, useContext, useState } from "react"
import FormData from "@/models/formData"

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

interface FormContextProps {
  formData: FormData
  setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export const FormContext = createContext<FormContextProps>({
  formData: initialForm,
  setFormData: () => {},
})

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>(initialForm)

  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = () => useContext(FormContext)