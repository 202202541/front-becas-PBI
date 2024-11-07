"use client"

import React from "react"
import NavBar from "@/app/components/Navbar"
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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


function AntecedentesAcademicos() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())


  return (
    <div className="relative w-full min-h-screen">
      <div className="fixed inset-0 bg-whait bg-cover bg-center bg-fixed"
        style={{ zIndex: -1 }}>

      </div>
      <div className=" flex min-h-screen w-full items-center justify-center p-4">
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
                  />
                </div>
                <div className="col-span-1">
                  <Label htmlFor="año">Año</Label>
                  <Input
                    id="año"
                    type="text"
                    placeholder="año"
                    required
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
              <div className="grid gap-2">
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

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/form/DatosPersonales">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/form/DatosFamiliares">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/form/AntecedentesAcademicos" isActive>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="/form/DatosSocioeconomicos">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div >
  )
}


export default AntecedentesAcademicos;