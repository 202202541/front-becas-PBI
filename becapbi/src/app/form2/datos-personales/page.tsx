"use client"

import FormDatePicker from "@/app/components/FormDatePicker"
import FormFieldInput from "@/app/components/FormFieldInput"
import FormSelect from "@/app/components/FormSelect"
import { Form } from "@/components/ui/form"
// import { useAuth } from "@/hooks/useAuth"
// import { axiosGetServiceDatosIniciales } from "@/lib/services/axios.service"
// import { IApiResponse } from "@/models/apiResponse"
import { IPostulante } from "@/models/postulante"
import { zodResolver } from "@hookform/resolvers/zod"
// import { useQuery } from "@tanstack/react-query"
// import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  nombre1: z.string(),
  nombre2: z.string(),
  apellido1: z.string(),
  apellido2: z.string(),
  ci: z.string().min(5, { message: "Documento de identidad inválido" }),
  pais_nacionalidad_id: z.number(),
  fecha_nacimiento: z.string().refine(val => new Date(val).toString() !== "Invalid Date", { message: "Fecha inválida" }),
  sexo: z.string(),
  estado_civil: z.string(),
  email: z.string().regex(/^$|^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, { message: "El formato es incorrecto" }),
  telefono_celular: z.string(),
  nombre_colegio: z.string(),
  gestion_egreso_colegio: z.number().min(4, { message: "El año no es valido" }),
  tipo_colegio_id: z.number(),
  municipio_nacimiento_id: z.number(),
})

const DatosPersonales = () => {
  const form = useForm<IPostulante>({
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
      gestion_egreso_colegio: 0,
      tipo_colegio_id: 0,
    },
  })
  // const { uuid, token } = useAuth()
  // const { data, isLoading, isSuccess } = useQuery<IApiResponse<IPostulante>>({
  //   queryKey: ["data-postulante"],
  //   queryFn: () => axiosGetServiceDatosIniciales("592ab68e-28fc-4b42-a03f-6c26880a85db", "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzQ3MDk2NTUuMDk4MjQyLCJleHAiOjE3MzQ3NTI4NTUuMDk4MjQyLCJ1aWQiOjMzLCJzaWQiOiJwb3MifQ.GxAhJ6xBfdHa-nZRjHQHhEvTmxe8GCfbWBftZXGgfzE")
  // })

  const onSubmit = (values: IPostulante) => {
    console.log(values)
  }

  // useEffect(() => {
  //   if (isSuccess) {
  //     if (data.status === "success") {
  //       form.reset({ ...form.getValues(), ...data.data })
  //     }
  //   }
  // }, [data, isSuccess, form.reset])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-[#EFF1F3] mx-auto my-5 w-11/12 lg:max-w-screen-lg p-2 lg:p-4 grid grid-cols-2 gap-2 md:grid-cols-4 lg:gap-4"
      >
        <FormFieldInput
          control={form.control}
          name="nombre1"
          label="Primer nombre"
          placeholder=""
          isRequired
        />
        <FormFieldInput
          control={form.control}
          name="nombre2"
          label="Segundo nombre"
          placeholder=""
        />
        <FormFieldInput
          control={form.control}
          name="apellido1"
          label="Apelido Paterno"
          placeholder=""
          isRequired
        />
        <FormFieldInput
          control={form.control}
          name="apellido2"
          label="Apelido Materno"
          placeholder=""
        />
        <FormFieldInput
          control={form.control}
          name="ci"
          label="Carnet de Identidad"
          placeholder=""
          isRequired
          onlyNumber
        />
        <FormFieldInput
          control={form.control}
          name="nombre_colegio"
          label="Colegio de Egreso"
          placeholder=""
          isRequired
        />
        <FormSelect
          form={form}
          name="gestion_egreso_colegio"
          label="Gestión de Egreso"
          placeholder=""
          isRequired
          options={Array.from({ length: new Date().getFullYear() - 1989 }, (_, i) => ({
            value: (new Date().getFullYear() - i).toString(),
            label: (new Date().getFullYear() - i).toString(),
          }))}
        />
        <FormSelect
          form={form}
          name="tipo_colegio_id"
          label="Tipo de Colegio"
          placeholder=""
          isRequired
          options={[]}
        />
        <FormSelect
          form={form}
          name="sexo"
          label="Sexo"
          placeholder=""
          isRequired
          options={[]}
        />
        <FormSelect
          form={form}
          name="estado_civil"
          label="Estado Civil"
          placeholder=""
          isRequired
          options={[]}
        />
        <FormDatePicker
          form={form}
          name="fecha_nacimiento"
          label="Fecha de Nacimiento"
          isRequired
        />
      </form>
    </Form>
  )
}

export default DatosPersonales
