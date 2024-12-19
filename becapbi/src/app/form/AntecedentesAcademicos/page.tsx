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
import { Datos, Datos_departamento, Datos_provincia,} from '@/Models/ClasificadoresPostula'
import { useAuth } from "@/context/AuthContext"


function AntecedentesAcademicos() {
  const form = useForm();
   const { token,  } = useAuth()

    const [tipoColegio, setTipoColegio] = useState<Datos[]>([])
    const [departamento, setDepartamento] = useState<Datos[]>([])
    const [provincia, setProvincia] = useState <Datos_departamento[]>([])
    const [municipio, setMunicipio] = useState <Datos_provincia[]>([])
    

        const [selectedDepartamento, setSelectedDepartamento] = useState(null);
        const [filteredProvincias, setFilteredProvincias] = useState([]);
        const [selectedProvincia, setSelectedProvincia] = useState(null);
        const [filteredMunicipios, setFilteredMunicipios] = useState([]);
    
    useEffect(() => {
      const fetchInitialData = async () => {
        try{
        const responseClasificadores = await AxiosServiceClasificadoresPostula(token)
          const clasificadores = responseClasificadores.data
          console.log(clasificadores)
          setTipoColegio(clasificadores.lista_tipo_colegio)
        
          setDepartamento(clasificadores.lista_departamento)
          setProvincia(clasificadores.lista_provincia)
          setMunicipio(clasificadores.lista_municipio)
          
        }catch(error){
          console.log(error)
        }
        }
        fetchInitialData();
      
    },[token]);


    const handleDepartamentoChange = (departamentoId: number) => {
      setSelectedDepartamento(departamentoId);

      const provinciasFiltradas = provincia.filter(
          (item) => item.departamento_id === departamentoId
      );
      setFilteredProvincias(provinciasFiltradas);

  
  };
  
  const handleProvinciaChange = (provinciaId: number) => {
      setSelectedProvincia(provinciaId);
  
      const municipiosFiltrados = municipio.filter(
          (item) => item.provincia_id === provinciaId
      );
      setFilteredMunicipios(municipiosFiltrados);
  };

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
                    defaultValue={form.gestion_egreso_colegio} // controlar el año aun no se sabe   
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
                      {filteredMunicipios.map((item) => (
                        <SelectItem value={item.id.toString()} key={item.id}>
                          {item.descripcion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1">
                  <Label htmlFor="Provincia">Provincia</Label>
                  <Select onValueChange={(value) => handleProvinciaChange(Number(value))}>
                    <SelectTrigger>
                      <SelectValue placeholder="Provincia" />
                    </SelectTrigger>
                    <SelectContent>
                      {filteredProvincias.map((item) => (
                        <SelectItem value={item.id.toString()} key={item.id}>
                          {item.descripcion}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-1">
                <Label htmlFor="Departamento">Departamento</Label>
                <Select onValueChange={(value) => handleDepartamentoChange(Number(value))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Departamento" />
                  </SelectTrigger>
                  <SelectContent>
                    {departamento.map((item) => (
                      <SelectItem value={item.id.toString()} key={item.id}>
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
                <Input
                  id="tipoColegio"
                  type="text"
                  required 
                  value={
                    tipoColegio.find((item) =>item.id === form.tipo_colegio_id)?.descripcion||""
                  }
                  readOnly
                />
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