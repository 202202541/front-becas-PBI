"use client"

import React from "react"
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

function DatosFamiliares() {

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
                                            <SelectItem value="Bolivia">Bolivia</SelectItem>
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
                                            <SelectItem value="soltero">Bolivia</SelectItem>
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
                                            <SelectItem value="Bolivia">Bolivia</SelectItem>
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
                                            <SelectItem value="soltero">Bolivia</SelectItem>
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
                                        <SelectItem value="soltero">Propia</SelectItem>
                                        <SelectItem value="soltero">Alquilada</SelectItem>
                                        <SelectItem value="soltero">Anticretico</SelectItem>
                                        <SelectItem value="soltero">Gratuita</SelectItem>
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