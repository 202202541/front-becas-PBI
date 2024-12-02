"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { useAuth } from "@/context/AuthContext"
import { AxiosServiceClasificadoresPostula, AxiosServiceDatosIniciales } from "@/lib/Services/axios.service" // Importa el servicio
import { Postulante } from "@/Models/Postulante"
import { ClasificadoresDataP, ClasificadoresResponse, Datos, DatosPr, Datos_departamento, Datos_provincia, Oferta_Fac_Carr} from '@/Models/ClasificadoresPostula'

// Nuevo tipo Form según la respuesta de la API
type Form = {
  apellido1: string
  apellido2: string
  nombre1: string
  nombre2: string
  ci: string
  pais_nacionalidad_id: number
  fecha_nacimiento: string
  sexo: string
  estado_civil: string
  email: string
  telefono_celular: string
  nombre_colegio: string
  gestion_egreso_colegio: number
  tipo_colegio_id: number
}

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
}

const FormContext = createContext<Form>(defaultForm)

export const FormProvider = ({ children }: { children: ReactNode }) => {

  const { token, uuid } = useAuth()
  const [form, setForm] = useState<Form>(defaultForm)

  const [tipoColegio, setTipoColegio] = useState<Datos[]>([])
  const [estadoCivil, setEstadoCivil] = useState<DatosPr>({})
  const [sexos, setSexos] = useState<DatosPr>({})
  const [sectorTrabajo, setSectorTrabajo] = useState<DatosPr>({})
  const [categoriaOcupacional, setCategoriaOcupacional] = useState <DatosPr>({})
  const [dedicacion, setDedicacion] = useState <DatosPr> ({})
  const [tipoVivienda, setTipoVivienda] = useState<DatosPr>({})
  const [personVivePostulante, setPersonaVivePostualnte] = useState <DatosPr> ({})
  const [pais, setPais] = useState<Datos[]> ([])
  const [departamento, setDepartamento] = useState<Datos[]>([])
  const [provincia, setProvincia] = useState <Datos_departamento[]>([])
  const [municipio, setMunicipio] = useState <Datos_provincia[]>([])
  const [parentesco, setParentesco] = useState <Datos[]>([])
  const [organizacionSocial, setOrganizacionSocial] = useState <Datos[]>([])
  const [ofertaPostulacion, setOfertaPostualcion] = useState <Oferta_Fac_Carr[]>([])

  useEffect(() => {
    console.log('Token:', token)
    console.log('UUID:', uuid)

    if (token && uuid) {
      const fetchInitialData = async () => {
        try {
          const response = await AxiosServiceDatosIniciales(uuid, token) 
          const postulante: Postulante = response.data
          setForm(postulante)
          console.log(response)
          if (response.status !== "success") {
            console.error("Error en la solicitud:", response.status, response.data)
          }
          
          const responseClasificadores = await AxiosServiceClasificadoresPostula(token)
          const clasificadores: ClasificadoresResponse = responseClasificadores.data
          setTipoColegio(clasificadores.lista_tipo_colegio)
          setEstadoCivil(clasificadores.lista_estado_civil)

        } catch (error) {
          console.error("Error al obtener los datos iniciales: ", error)
        }
      }
      fetchInitialData()
    }
  }, [token, uuid])



  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => useContext(FormContext)
