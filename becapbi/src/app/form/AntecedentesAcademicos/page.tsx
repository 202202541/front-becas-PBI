"use client"

import React, { useEffect, useState } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import{useForm} from "@/app/components/formProvider"
import { AxiosServiceClasificadoresPostula } from "@/lib/Services/axios.service"
import { Datos, DatosPr, Datos_departamento, Datos_provincia, Oferta_Fac_Carr} from '@/Models/ClasificadoresPostula'
import { useAuth } from "@/context/AuthContext"


function AntecedentesAcademicos() {
  const form = useForm();
   const { token,  } = useAuth()

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
      const fetchInitialData = async () => {
        try{
        const responseClasificadores = await AxiosServiceClasificadoresPostula(token)
          const clasificadores = responseClasificadores.data
          console.log(clasificadores)
          setTipoColegio(clasificadores.lista_tipo_colegio)
          setEstadoCivil(clasificadores.lista_estado_civil)
          setSexos(clasificadores.lista_sexo)
          setSectorTrabajo(clasificadores.lista_sector_trabajo)
          setCategoriaOcupacional(clasificadores.lista_categoria_ocupacional)
          setDedicacion(clasificadores.lista_dedicacion)
          setTipoVivienda(clasificadores.lista_tipo_vivienda)
          setPersonaVivePostualnte(clasificadores.lista_personas_vive_postulante)
          setPais(clasificadores.lista_pais)
          setDepartamento(clasificadores.lista_departamento)
          setProvincia(clasificadores.lista_provincia)
          setMunicipio(clasificadores.lista_municipio)
          setParentesco(clasificadores.lista_parentesco)
          setOrganizacionSocial(clasificadores.lista_organizacion_social)
          setOfertaPostualcion(clasificadores.lista_oferta_postulacion)
        }catch(error){
          console.log(error)
        }
        }
        fetchInitialData();
      
    },[token]);

    

  return (
    <div className="relative w-full min-h-screen">
      <div className=" flex min-h-screen w-full items-center justify-center p-2">
        <Card className="mx-auto max-w-6xl w-full">
          <CardHeader className="flex flex-col items-center justify-center text-center">
            <CardTitle className="text-2xl">
              SOLICITUD DE BECA PBI-2024
            </CardTitle>
            <CardDescription>
              Ingrese los datos de los antecedentes academicos
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <Label htmlFor="colegio">Colegio de Egreso</Label>
                  <Input
                    id="vivienda"
                    type="text"
                    placeholder="colegio"
                    required
                    defaultValue={form.nombre_colegio}
                  />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="año">Año</Label>
                  <Input
                    id="año"
                    type="text"
                    placeholder="año"
                    required
                    defaultValue={2024} // controlar el año aun no se sabe   
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1">
                  <Label htmlFor="Municipio">Municipio</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Municipio" />
                    </SelectTrigger>
                    <SelectContent>
                    
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Label htmlFor="Provincia">Provincia</Label>
                  <Select>
                    <SelectTrigger >
                      <SelectValue placeholder="Provincia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soltero">Bolivia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Label htmlFor="Departamento">Departamento</Label>
                  <Select>
                    <SelectTrigger >
                      <SelectValue placeholder="Departamento" />
                    </SelectTrigger>
                    <SelectContent>
                      {departamento.map((item) =>(
                        <SelectItem value={item.descripcion} Key={item.id}>
                          {item.descripcion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="grid gap-2">
                {/* seleccionar la de la Id */}
                <Label htmlFor="tipoColegio">Tipo de Colegio</Label>
                <Select>
                  <SelectTrigger >
                    <SelectValue placeholder="urbano" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urbano">urbano</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="promedioCuarto">Promedio de nota de cuarto, quinto y sexto curso</Label>
                <div className="grid grid-cols-3 gap-5">
                  <div className="flex items-center gap-1">
                    <Input
                      id="promedioCuarto"
                      type="text"
                      required
                    />
                    <p>/100</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Input
                      id="promedioCuarto"
                      type="text"
                      required
                    />
                    <p>/100</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Input
                      id="promedioCuarto"
                      type="text"
                      required
                    />
                    <p>/100</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  )
}


export default AntecedentesAcademicos;