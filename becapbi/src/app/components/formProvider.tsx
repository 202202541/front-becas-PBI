// FormProvider.tsx
"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { AxiosServiceClasificadoresPostula, AxiosServiceDatosIniciales } from "@/lib/Services/axios.service"; // Importa el servicio

// Nuevo tipo Form según la respuesta de la API
type Form = {
  apellido1: string;
  apellido2: string;
  nombre1: string;
  nombre2: string;
  ci: string;
  pais_nacionalidad_id: number;
  fecha_nacimiento: string;
  sexo: string;
  estado_civil: string;
  email: string;
  telefono_celular: string;
  nombre_colegio: string;
  gestion_egreso_colegio: number;
  tipo_colegio_id: number;
};

const defaultForm: Form = {
  apellido1: '',
  apellido2: '',
  nombre1: '',
  nombre2: '',
  ci: '',
  pais_nacionalidad_id: 0,
  fecha_nacimiento: '',
  sexo: '',
  estado_civil: '',
  email: '',
  telefono_celular: '',
  nombre_colegio: '',
  gestion_egreso_colegio: 0,
  tipo_colegio_id: 0,
};

const FormContext = createContext<Form>(defaultForm);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const { token, uuid } = useAuth();
  const [form, setForm] = useState<Form>(defaultForm);

  useEffect(() => {
    console.log('Token:', token);
    console.log('UUID:', uuid);

    if (token && uuid) {
      const fetchInitialData = async () => {
        try {
          console.log("Solicitando a URL:", `http://sispos.dev.umss.net/api/postulante/datos-iniciales?uuid=${uuid}`);

          const respuesta = await AxiosServiceDatosIniciales(uuid, token); // Usando el servicio

          console.log("Respuesta de la API:", respuesta.data);
          const data = respuesta.data.data;

          setForm({
            apellido1: data.apellido1 ,
            apellido2: data.apellido2 ,
            nombre1: data.nombre1 ,
            nombre2: data.nombre2 ,
            ci: data.ci ,
            pais_nacionalidad_id: data.pais_nacionalidad_id,
            fecha_nacimiento: data.fecha_nacimiento,
            sexo: data.sexo ,
            estado_civil: data.estado_civil,
            email: data.email ,
            telefono_celular: data.telefono_celular ,
            nombre_colegio: data.nombre_colegio ,
            gestion_egreso_colegio: data.gestion_egreso_colegio,
            tipo_colegio_id: data.tipo_colegio_id ,
          });

          if (respuesta.status !== 200) {
            console.error("Error en la solicitud:", respuesta.status, respuesta.data);
          }
        } catch (error) {
          console.error("Error al obtener los datos iniciales: ", error);
        }
      };
      fetchInitialData();
    }
  }, [token, uuid]);


  
  useEffect(()=>{
    const fetchDatosClasificador = async() =>{
      const respuesta = await AxiosServiceClasificadoresPostula(token); // Usando el servicio

    }
    fetchDatosClasificador();
  }, []);



  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
