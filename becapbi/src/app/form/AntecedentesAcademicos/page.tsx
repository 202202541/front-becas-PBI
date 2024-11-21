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
import{useForm} from "@/app/components/formProvider"

function AntecedentesAcademicos() {
  const form = useForm();
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
                    defaultValue={form.lugarNacimiento}
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
    </div >
  )
}


export default AntecedentesAcademicos;