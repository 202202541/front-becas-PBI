"use client"
import {createContext, useContext} from "react"
import { ReactNode } from "react"
import internal from "stream"

type Form = {
  name: string,
  name2: string,
  lastName1: string,
  lastName2: string,
  ci: number,
  exp: string,
  edad: number,
  sexo: String,
  fechaNacimiento: string,
  lugarNacimiento: string

}

const defaultForm : Form = {
  name: 'john',
  name2: '',
  lastName1: 'Doe',
  lastName2: 'Pearl',
  ci: 5,
  exp: 'hello',
  edad: 15,
  sexo: 'masc',
  fechaNacimiento: 'hello',
  lugarNacimiento: 'bolivia'
}

const FormContext = createContext<Form>(defaultForm)

export const FormProvider = ({ children }: { children: ReactNode }) => {
  return (
    <FormContext.Provider value={defaultForm}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => useContext(FormContext)