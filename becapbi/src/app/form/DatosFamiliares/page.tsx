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
import DatosFamiliar from "@/app/components/DatosFamiliar"
import { Button } from "@/components/ui/button"
import { FamilyMember } from "./Interface"
import { FaMagento } from "react-icons/fa"
import { Datos, DatosPr, Datos_departamento, Datos_provincia, Oferta_Fac_Carr} from '@/Models/ClasificadoresPostula'
import { AxiosServiceClasificadoresPostula } from "@/lib/Services/axios.service"
import { useForm } from "react-hook-form"
import { useAuth } from "@/context/AuthContext"

function DatosFamiliares() {

    const form = useForm();
        console.log("Formulario en DatosPersonales:", form);
    
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
    
            const selectedTipoColegio = tipoColegio.find(
                (item) => item.id === form.tipo_colegio_id
            );

    const [familyData, setFamilyData] = React.useState<FamilyMember[]>([
        { nombre: "", apellido: "", estadoCivil: "", edad: "", parentesco: "" },
    ])

    const handleAddFamily = () => {
        setFamilyData([
            ...familyData,
            { nombre: "", apellido: "", estadoCivil: "", edad: "", parentesco: "" },
        ])
    }

    const onChangeDataFamiliar = () => {

    }


    return (
        <div className="relative w-full min-h-screen">
            <div className=" flex min-h-screen w-full items-center justify-center p-2">
                <Card className="mx-auto max-w-6xl w-full">
                    <CardHeader className="flex flex-col items-center justify-center text-center">
                        <CardTitle className="text-2xl">
                            SOLICITUD DE BECA PBI-2024
                        </CardTitle>
                        <CardDescription>
                            Ingrese los datos familiares para el formulario
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-3">
                            <Label className="text-lg" > Lugar donde viven los padres:</Label>
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
                            <div>
                                <Label htmlFor="vivienda">Calle/Avenida/Parque/Pasaje</Label>
                                <Input
                                    id="vivienda"
                                    type="text"
                                    placeholder="Calle/Avenida/Parque/Pasaje"
                                    required
                                />
                            </div>
                            <div >
                                <Label htmlFor="telefono">Telefono - Celular</Label>
                                <Input
                                    id="telefono"
                                    type="text"
                                    placeholder="telefono - celular"
                                    required
                                />
                            </div>
                            <div >
                                <Label htmlFor="telefono">Otra Referencia</Label>
                                <Input
                                    id="telefono"
                                    type="text"
                                    placeholder="telefono - celular"
                                    required
                                />
                            </div>
                            <Label>Datos del apoderado del postulante</Label>
                            <div className="grid grid-cols-2 gap-6">
                                <div >
                                    <Label htmlFor="nombre">Primer Nombre</Label>
                                    <Input
                                        id="nombre"
                                        type="text"
                                        placeholder="nombre"
                                        required
                                    />
                                </div>
                                <div >
                                    <Label htmlFor="nombre">Segundo Nombre</Label>
                                    <Input
                                        id="nombre"
                                        type="text"
                                        placeholder="nombre"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div >
                                    <Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
                                    <Input
                                        id="apellidoPaterno"
                                        type="text"
                                        placeholder="apellidoPaterno"
                                        required
                                    />
                                </div>
                                <div >
                                    <Label htmlFor="apellidoMaterno">Apellido Materno</Label>
                                    <Input
                                        id="apellidoMaterno"
                                        type="text"
                                        placeholder="apellidoMaterno"
                                        required
                                    />
                                </div>
                            </div>
                            <Label className="text-lg" > Lugar donde vive el apoderado:</Label>
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
                            <div>
                                <Label htmlFor="vivienda">Calle/Avenida/Parque/Pasaje</Label>
                                <Input
                                    id="vivienda"
                                    type="text"
                                    placeholder="Calle/Avenida/Parque/Pasaje"
                                    required
                                />
                            </div>
                            <div >
                                <Label htmlFor="telefono">Telefono - Celular</Label>
                                <Input
                                    id="telefono"
                                    type="text"
                                    placeholder="telefono - celular"
                                    required
                                />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="Provincia">Tipo de vivienda de los padres y/o dependientes</Label>
                                <Select>
                                    <SelectTrigger >
                                        <SelectValue placeholder="Tipo de vivienda" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {Object.entries(tipoVivienda).map(([Key, value])=>(
                                            <SelectItem value ={Key} key={Key}>
                                                {value}
                                            </SelectItem>
                                        ))}
                                        
                                        
                                    </SelectContent>
                                </Select>
                            </div>
                            <Label className="text-lg">Grupo Familiar</Label>
                            {familyData.map((familiar, index) => (
                                <DatosFamiliar
                                    key={index}
                                    index={index}
                                    data={familiar}
                                    onChange={onChangeDataFamiliar}
                                />
                            ))}
                            <Button
                                className="w-[170px]"
                                onClick={handleAddFamily}>
                                Añadir un nuevo familiar
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div >
    )
}


export default DatosFamiliares;