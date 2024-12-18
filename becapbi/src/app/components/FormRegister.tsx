"use client"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { format } from "date-fns"
import { useRouter } from 'next/navigation'
import { AxiosServiceClasificadoresCrea, AxiosServiceCreaCuenta } from "@/lib/services/axios.service"
import { ClasificadoresCrea, Datos, DatosP } from "@/models/Clasificadores"
import FormInput from "@/app/components/FormInput"
import FormSelect from "@/app/components/FormSelect"
import FormDatePicker from "./FormDatePicker"


const FormRegister: React.FC = () => {
  const router = useRouter()

  const [descripcionPaises, setDescripcionPaises] = useState<Datos[]>([])
  const [tipoColegio, setTipoColegio] = useState<Datos[]>([])
  const [estadoCivil, setEstadoCivil] = useState<DatosP>({})
  const [sexos, setSexos] = useState<DatosP>({})
  const [errorM, setErrorM] = useState<string | null>(null)
  const [date, setDate] = useState<Date | undefined>(new Date())

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


  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const respuesta = await AxiosServiceClasificadoresCrea()
        const datos = respuesta.data as ClasificadoresCrea
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

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    const newFecha = data.fecha_nacimiento.slice(0, 10)
    data.fecha_nacimiento = newFecha
    console.log("Datos enviados:", data)
    // try {
    //   const preparedData = {
    //     ...data,
    //     fecha_nacimiento: format(new Date(data.fecha_nacimiento), "yyyy-MM-dd"),
    //   }

    //   const respuesta = await AxiosServiceCreaCuenta(preparedData)

    //   if (respuesta.data.statusCode === 200) {
    //     router.push('../inicio')
    //   }
    //   setErrorM(respuesta.data.message)
    // } catch (error) {
    //   console.error("Error al crear la cuenta: ", error)
    //   setErrorM("Hubo un error al enviar el formulario. Inténtalo nuevamente.")
    // }
  }

	const watchedFields = form.watch();
  useEffect(() => {
    console.log("Campos del formulario:", watchedFields);
  }, [watchedFields]);

  return (
    <Card className="mx-auto max-w-md w-full bg-[#F3F4F7]">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Registro de Cuenta</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
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
                <FormInput
                  form={form}
                  name="ci"
                  label="Carnet de Identidad"
                  placeholder="Ingrese su CI"
                  validation="numeric"
                />
                <FormSelect
                  form={form}
                  name="pais_nacionalidad_id"
                  label="País de Nacionalidad"
                  options={descripcionPaises.map((item) => ({
                    value: item.id,
                    label: item.descripcion,
                  }))}
                />
                <FormSelect
                  form={form}
                  name="sexo"
                  label="Sexo"
                  options={Object.entries(sexos).map(([key, value]) => ({
                    value: key,
                    label: value,
                  }))}
                />
                <FormSelect
                  form={form}
                  name="estado_civil"
                  label="Estado Civil"
                  options={Object.entries(estadoCivil).map(([key, value]) => ({
                    value: key,
                    label: value,
                  }))}
                />
                <FormInput
                  form={form}
                  name="email"
                  label="Correo Electrónico"
                  placeholder="Ingrese su email"
                  type="email"
                />
                <FormDatePicker
                  form={form}
                  name="fecha_nacimiento"
                  label="Fecha de Nacimiento"
                />
                <FormInput
                  form={form}
                  name="telefono_celular"
                  label="Teléfono Celular"
                  placeholder="Ingrese su número de teléfono"
                  validation="numeric"
                />
                <FormInput
                  form={form}
                  name="nombre_colegio"
                  label="Nombre del Colegio"
                  placeholder="Ingrese nombre de su colegio"
                />
                <FormInput
                  form={form}
                  name="gestion_egreso_colegio"
                  label="Año de Egreso"
                  placeholder="Ingrese año de egreso"
                  type="number"
                />
                <FormSelect
                  form={form}
                  name="tipo_colegio_id"
                  label="Tipo de Colegio"
                  options={tipoColegio.map((item) => ({
                    value: item.id,
                    label: item.descripcion,
                  }))}
                />

                <Button type="submit" className="w-full mt-3">
                  Registrarse
                </Button>
              </form>
            </Form>
            {errorM && (
              <div className="text-red-500 text-center mt-3">
                {errorM}
              </div>
            )}
          </CardContent>
        </Card>
  )
}

export default FormRegister