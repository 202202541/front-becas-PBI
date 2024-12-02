// FormProvider.tsx
"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useAuth } from "@/context/AuthContext";
import { AxiosServiceClasificadoresPostula, AxiosServiceDatosIniciales } from "@/lib/Services/axios.service"; // Importa el servicio
import { Postulante } from "@/Models/Postulante"

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

interface Datos {
  id: number;
  descripcion : string;
  sigla? : string;
}

interface Datos_departamento extends Datos{
  departamento_id : number;
}

interface Datos_provincia extends Datos{
  provincia_id : number;
}

interface Oferta_Fac_Carr{
  oferta_id: number;
  plan_estudio_id: string;
  plan_estudio : string;
  facultad_id: number;
  facultad : string
}
interface DatosPr{
  [key : string] : string;
}

interface ClasifacoresDataP {
  //lista tipo colegio revisar tenemos la id 
    lista_tipo_colegio : Datos[];

    lista_estado_civil:DatosPr;
    lista_sexo: DatosPr;
    lista_sector_trabajo : DatosPr;
    lista_categoria_ocupacional: DatosPr;
    lista_dedicacion : DatosPr;
    lista_tipo_vivienda : DatosPr;
    lista_personas_vive_postulante : DatosPr;

    lista_pais : Datos[];
    lista_departamento: Datos[];

    lista_provincia: Datos_departamento[];
    lista_municipio : Datos_provincia[];
    lista_parentesco: Datos[];
    lista_organizacion_social : Datos[];

    //tiene otro orden y no tenemos el id de la facultad
    lista_oferta_postulacion: Oferta_Fac_Carr[];
}

const FormContext = createContext<Form>(defaultForm);

export const FormProvider = ({ children }: { children: ReactNode }) => {

  const { token, uuid } = useAuth();
  const [form, setForm] = useState<Form>(defaultForm);

  const [tipoColegio, setTipoColegio] = useState<Datos[]>([]);
  const [estadoCivil, setEstadoCivil] = useState<DatosPr>({});
  const [sexos, setSexos] = useState<DatosPr>({});
  const [sectorTrabajo, setSectorTrabajo] = useState<DatosPr>({});
  const [categoriaOcupacional, setCategoriaOcupacional] = useState <DatosPr>({});
  const [dedicacion, setDedicacion] = useState <DatosPr> ({});
  const [tipoVivienda, setTipoVivienda] = useState<DatosPr>({});
  const [personVivePostulante, setPersonaVivePostualnte] = useState <DatosPr> ({});
  const [pais, setPais] = useState<Datos[]> ([]);
  const [departamento, setDepartamento] = useState<Datos[]>([]);
  const [provincia, setProvincia] = useState <Datos_departamento[]>([]);
  const [municipio, setMunicipio] = useState <Datos_provincia[]>([]);
  const [parentesco, setParentesco] = useState <Datos[]>([]);
  const [organizacionSocial, setOrganizacionSocial] = useState <Datos[]>([]);
  const [ofertaPostulacion, setOfertaPostualcion] = useState <Oferta_Fac_Carr[]>([]);

  useEffect(() => {
    console.log('Token:', token);
    console.log('UUID:', uuid);

    if (token && uuid) {
      const fetchInitialData = async () => {
        try {
          const response = await AxiosServiceDatosIniciales(uuid, token)
          const postulante: Postulante = response.data
          setForm(postulante);
          console.log(response)
          if (response.status !== "success") {
            console.error("Error en la solicitud:", response.status, response.data);
          }
        } catch (error) {
          console.error("Error al obtener los datos iniciales: ", error);
        }
      };
      fetchInitialData();
    }
  }, [token, uuid]);


  
  // useEffect(()=>{
  //   const fetchDatosClasificador = async() =>{
  //     const respuesta = await AxiosServiceClasificadoresPostula(token); // Usando el servicio

  //   }
  //   fetchDatosClasificador();
  // }, []);



  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => useContext(FormContext);
