"use client"
import {createContext, useContext,useState,useEffect, ReactNode} from "react";
import axios from "axios";
import { useAuth } from "@/context/AuthContext";

type Form = {
  name1: string,
  name2: string,
  lastName1: string,
  lastName2: string,
  ci: number,
  exp: string,
  edad: number,
  sexo: string,
  fechaNacimiento: string,
  lugarNacimiento: string

}

const defaultForm : Form = {
  name1: '',
  name2: '',
  lastName1: '',
  lastName2: '',
  ci: 0,
  exp: '',
  edad: 0,
  sexo: '',
  fechaNacimiento: '',
  lugarNacimiento: ''
}

const FormContext = createContext<Form>(defaultForm)

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const {token, uuid} = useAuth();
  const [form, setForm] = useState<Form>(defaultForm);

  useEffect(()=>{
    if(token && uuid){
      const fetchInitialData = async ()=>{
        try{
         const respuesta = await axios.get("http://sispos.dev.umss.net/api/postulante/datos-iniciales?uuid=300f51f3-a9e0-490c-97ff-136f16b5d079",{
          headers:{
            Authorization: `Bearer ${token}`,
          },
          params: {
            uuid: uuid,
          },
         });
         const data = respuesta.data;

         setForm({
            name1: data.name1 || "",
            name2: data.name2 || "",
            lastName1: data.lastName1 || "",
            lastName2: data.lastName2 || "",
            ci: data.ci || 0,
            exp: data.exp || "",
            edad: data.edad || 0,
            sexo: data.sexo || "",
            fechaNacimiento: data.fechaNacimiento || "",
            lugarNacimiento: data.lugarNacimiento || "",
         });
        }catch(error){
          console.error("Error al obtener los datos iniciales: ", error);
        }
      };
      fetchInitialData();
    }
  },[token,uuid]);

  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => useContext(FormContext)