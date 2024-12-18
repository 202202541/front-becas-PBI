"use client"

import FormDatePicker from "@/app/components/FormDatePicker"
import FormInput from "@/app/components/FormInput"
import FormSelect from "@/app/components/FormSelect"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { AxiosServiceClasificadoresCrea } from "@/lib/services/axios.service"
import { IClasificadoresCrea, IDatos, IDatosP } from "@/models/clasificadores"
import { zodResolver } from "@hookform/resolvers/zod"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const FormRegister = () => {
  const [descripcionPaises, setDescripcionPaises] = useState<IDatos[]>([])
  const [tipoColegio, setTipoColegio] = useState<IDatos[]>([])
  const [estadoCivil, setEstadoCivil] = useState<IDatosP>({})
  const [sexos, setSexos] = useState<IDatosP>({})

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

  const form = useForm<z.infer<typeof formSchema>>({
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

  const watchedFields = form.watch()

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const respuesta = await AxiosServiceClasificadoresCrea()
        const datos = respuesta.data as IClasificadoresCrea
        setDescripcionPaises(datos.lista_pais)
        setTipoColegio(datos.lista_tipo_colegio)
        setSexos(datos.lista_sexo)
        setEstadoCivil(datos.lista_estado_civil)
      } catch (error) {
        console.error("Error al obtener los clasificadores: ", (error as Error).message)
      }
    }
    fetchDatos()
  }, [])

  // useEffect(() => {
  //   console.log("Campos del formulario:", watchedFields)
  // }, [watchedFields])

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    data.fecha_nacimiento = data.fecha_nacimiento.slice(0, 10)
    console.log("Datos enviados:", data)
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
              <FormInput
                form={form}
                name="nombre1"
                label="Primer Nombre"
                placeholder="Ingrese primer nombre"
              />
              <FormInput
                form={form}
                name="nombre2"
                label="Segundo Nombre"
                placeholder="Ingrese segundo nombre"
              />
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormInput
                form={form}
                name="apellido1"
                label="Primer Apellido"
                placeholder="Ingrese primer apellido"
              />
              <FormInput
                form={form}
                name="apellido2"
                label="Segundo Apellido"
                placeholder="Ingrese segundo apellido"
              />
            </div>

            <FormInput
              form={form}
              name="email"
              label="Correo Electrónico"
              placeholder="Ingrese su email"
              type="email"
            />

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormInput
                form={form}
                name="ci"
                label="Carnet de Identidad"
                placeholder="Ingrese su CI"
                validation="numeric"
              />
              <FormInput
                form={form}
                name="telefono_celular"
                label="Teléfono Celular"
                placeholder="Ingrese su número de teléfono"
                validation="numeric"
              />
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormSelect
                className="w-full"
                form={form}
                name="sexo"
                label="Sexo"
                placeholder="Seleccionar sexo"
                options={Object.entries(sexos).map(([key, value]) => ({
                  value: key,
                  label: value,
                }))}
              />
              <FormSelect
                className="w-full"
                form={form}
                name="estado_civil"
                label="Estado Civil"
                placeholder="Seleccionar estado civil"
                options={Object.entries(estadoCivil).map(([key, value]) => ({
                  value: key,
                  label: value,
                }))}
              />
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormSelect
                className="w-full"
                form={form}
                name="pais_nacionalidad_id"
                label="País de Nacionalidad"
                placeholder="Seleccionar país"
                options={descripcionPaises.map((item) => ({
                  value: item.id,
                  label: item.descripcion,
                }))}
              />
              <FormDatePicker
                form={form}
                name="fecha_nacimiento"
                label="Fecha de Nacimiento"
              />
            </div>

            <FormInput
              form={form}
              name="nombre_colegio"
              label="Nombre del Colegio"
              placeholder="Ingrese nombre de su colegio"
            />

            <div className="w-full flex flex-col gap-3 md:flex-row md:justify-between">
              <FormSelect
                className="w-full"
                form={form}
                name="gestion_egreso_colegio"
                label="Año de Egreso"
                placeholder="Seleccionaer año"
                options={Array.from({ length: new Date().getFullYear() - 1989 }, (_, i) => ({
                  value: new Date().getFullYear() - i,
                  label: (new Date().getFullYear() - i).toString(),
                }),
                )}
              />
              <FormSelect
                className="w-full"
                form={form}
                name="tipo_colegio_id"
                label="Tipo de Colegio"
                placeholder="Seleccionar tipo"
                options={tipoColegio.map((item) => ({
                  value: item.id,
                  label: item.descripcion,
                }))}
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
