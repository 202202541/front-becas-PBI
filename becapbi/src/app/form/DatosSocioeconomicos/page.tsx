"use client"

import React from "react"
import NavBar from "@/app/components/Navbar"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"


function DatosSocioeconomicos() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 bg-whait bg-cover bg-center bg-fixed"
        style={{ zIndex: -1 }}>

      </div>
      <div className=" flex min-h-screen w-full items-center justify-center p-2">
        <Card className="mx-auto max-w-6xl w-full">
          <CardHeader className="flex flex-col items-center justify-center text-center">
            <CardTitle className="text-2xl">
              SOLICITUD DE BECA PBI-2024
            </CardTitle>
            <CardDescription>
              Ingrese los datos del responsable economico
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
                  <Input
                    id="apellidoPaterno"
                    type="text"
                    placeholder="apellido paterno"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="apellidoMaterno">Apellido Materno</Label>
                  <Input
                    id="apellidoMaterno"
                    type="text"
                    placeholder="apellido materno"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="primerNombre">Primer Nombre</Label>
                  <Input
                    id="primerNombre"
                    type="text"
                    placeholder="primer nombre"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="segundoNombre">Segundo Nombre</Label>
                  <Input
                    id="segundoNombre"
                    type="text"
                    placeholder="segundo nombre"
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="parentesco">Parentesco</Label>
                <Input
                  id="parentesco"
                  type="text"
                  placeholder="parentesco"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="estadoCivil">Estado Civil</Label>
                  <Select>
                    <SelectTrigger >
                      <SelectValue placeholder="Estado civil" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="soltero">Soltero(a)</SelectItem>
                      <SelectItem value="casado">Casado(a)</SelectItem>
                      <SelectItem value="divorciado">Divorciado(a)</SelectItem>
                      <SelectItem value="viudo">Viudo(a)</SelectItem>
                      <SelectItem value="unido">Unido(a) de hecho</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="nacionalidad">Fecha de Nacimiento</Label>
                  <div className="w-auto ">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "max-w-[500px] justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="h-4 w-4" />
                          {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          captionLayout="dropdown-buttons"
                          fromYear={1990}
                          toYear={2024}
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="ocupacion">Ocupacion</Label>
                  <Input
                    id="ocupacion"
                    type="text"
                    placeholder="ocupacion"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="institucion">Institucion de trabajo</Label>
                  <Input
                    id="institucion"
                    type="text"
                    placeholder="institucion"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="salario">Salario/Ingresos</Label>
                  <Input
                    id="salario"
                    type="text"
                    placeholder="salario/ingresos"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="otroIngreso">Otros ingresos</Label>
                  <Input
                    id="otroIngreso"
                    type="text"
                    placeholder="otros"
                    required
                  />
                </div>
              </div>
              <Label className="text-lg" > Lugar de Trabajo:</Label>
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
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="integrantes">N° Integrantes de familia</Label>
                  <Input
                    id="integrantes"
                    type="text"
                    placeholder="integrantes"
                    required
                  />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="sectorTrabajo">Sector de Trabajo</Label>
                  <Select>
                    <SelectTrigger >
                      <SelectValue placeholder="seleccione el sector" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="obrero">Obrero</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="col-span-1">
                <Label htmlFor="sectorTrabajo">Categoria Ocupacional</Label>
                <Select>
                  <SelectTrigger >
                    <SelectValue placeholder="seleccione la categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cuentaPropia">Trabajador por cuenta propia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div >
  )
}


export default DatosSocioeconomicos;