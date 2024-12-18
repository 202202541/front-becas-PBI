"use client"

import FormDatePicker from "@/app/components/FormDatePicker"
import FormFieldInput from "@/app/components/FormFieldInput"
import FormSelect from "@/app/components/FormSelect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { axiosGetServiceClasificadoresCrea, axiosPostServiceCreaCuenta } from "@/lib/services/axios.service"
import { FormData } from "@/models/apiResponse"
import { IClasificadoresCrea } from "@/models/clasificadores"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormRegister = () => {
  const { data } = useQuery<IClasificadoresCrea>({
    queryKey: ["data-register"],
    queryFn: axiosGetServiceClasificadoresCrea,
  })
  const { mutate: register, data: responseRegister } = useMutation({
    mutationFn: (data: FormData) => axiosPostServiceCreaCuenta(data)
  })

  const lista_estado_civil = Object.entries(data?.lista_estado_civil || {})
  const lista_sexo = Object.entries(data?.lista_sexo || {})

  const formSchema = z.object({
    apellido1: z.string().min(2, { message: "Primer apellido es requerido" }),
    apellido2: z.string(),
    nombre1: z.string().min(2, { message: "Primer nombre es requerido" }),
    nombre2: z.string(),
    ci: z.string().min(5, { message: "Documento de identidad inválido" }),
    pais_nacionalidad_id: z.number().min(1, { message: "Seleccione un país" }),
    fecha_nacimiento: z.string().refine(val => new Date(val).toString() !== "Invalid Date", { message: "Fecha inválida" }),
    sexo: z.string().min(1, { message: "Seleccione un sexo" }),
    estado_civil: z.string().min(1, { message: "Seleccione estado civil" }),
    email: z.string().email({ message: "Email inválido" }),
    telefono_celular: z.string().min(8, { message: "Teléfono inválido" }),
    nombre_colegio: z.string().min(3, { message: "Nombre de colegio requerido" }),
    gestion_egreso_colegio: z.string(),
    tipo_colegio_id: z.number().min(1, { message: "Seleccione tipo de colegio" }),
  })

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      apellido1: "",
      apellido2: "",
      nombre1: "",
      nombre2: "",
      ci: "",
      pais_nacionalidad_id: 0,
      fecha_nacimiento: "",
      sexo: "",
      estado_civil: "",
      email: "",
      telefono_celular: "",
      nombre_colegio: "",
      gestion_egreso_colegio: "",
      tipo_colegio_id: 0,
    },
  })

  const onSubmit = async (data: FormData) => {
    data.fecha_nacimiento = data.fecha_nacimiento.slice(0, 10)
    register(data)
  }

  return (
    <Card className="w-11/12 max-w-lg bg-[#F3F4F7]">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Registro de Cuenta</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormFieldInput
                control={form.control}
                name="nombre1"
                label="Primer Nombre"
                placeholder="Ingrese primer nombre"
                isRequired
              />
              <FormFieldInput
                control={form.control}
                name="nombre2"
                label="Segundo Nombre"
                placeholder="Ingrese segundo nombre"
              />
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormFieldInput
                control={form.control}
                name="apellido1"
                label="Primer Apellido"
                placeholder="Ingrese primer apellido"
                isRequired
              />
              <FormFieldInput
                control={form.control}
                name="apellido2"
                label="Segundo Apellido"
                placeholder="Ingrese segundo apellido"
              />
            </div>

            <FormFieldInput
              control={form.control}
              name="email"
              label="Correo Electrónico"
              placeholder="Ingrese su email"
              isRequired
            />

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormFieldInput
                control={form.control}
                name="ci"
                label="Carnet de Identidad"
                placeholder="Ingrese su CI"
                onlyNumber
                isRequired
              />
              <FormFieldInput
                control={form.control}
                name="telefono_celular"
                label="Teléfono Celular"
                placeholder="Ingrese su número de teléfono"
                onlyNumber
                isRequired
              />
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormSelect
                className="w-full"
                form={form}
                name="sexo"
                label="Sexo"
                placeholder="Seleccionar sexo"
                options={lista_sexo.map(([key, value]) => ({
                  value: key,
                  label: value,
                }))}
                isRequired
              />
              <FormSelect
                className="w-full"
                form={form}
                name="estado_civil"
                label="Estado Civil"
                placeholder="Seleccionar estado civil"
                options={lista_estado_civil.map(([key, value]) => ({
                  value: key,
                  label: value,
                }))}
                isRequired
              />
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormSelect
                className="w-full"
                form={form}
                name="pais_nacionalidad_id"
                label="País de Nacionalidad"
                placeholder="Seleccionar país"
                options={data?.lista_pais.map(({ id, descripcion }) => ({
                  value: id.toString(),
                  label: descripcion,
                })) || []}
                isRequired
                isValueNumber
              />
              <FormDatePicker
                form={form}
                name="fecha_nacimiento"
                label="Fecha de Nacimiento"
                isRequired
              />
            </div>

            <FormFieldInput
              control={form.control}
              name="nombre_colegio"
              label="Nombre del Colegio"
              placeholder="Ingrese nombre de su colegio"
              isRequired
            />

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormSelect
                className="w-full"
                form={form}
                name="gestion_egreso_colegio"
                label="Año de Egreso"
                placeholder="Seleccionaer año"
                options={Array.from({ length: new Date().getFullYear() - 1989 }, (_, i) => ({
                  value: (new Date().getFullYear() - i).toString(),
                  label: (new Date().getFullYear() - i).toString(),
                }))}
                isRequired
              />
              <FormSelect
                className="w-full"
                form={form}
                name="tipo_colegio_id"
                label="Tipo de Colegio"
                placeholder="Seleccionar tipo"
                options={data?.lista_tipo_colegio.map(({ id, descripcion }) => ({
                  value: id.toString(),
                  label: descripcion,
                })) || []}
                isRequired
                isValueNumber
              />
            </div>

            <Button type="submit" className="w-full font-bold bg-customBlue">
              Registrarse
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormRegister
