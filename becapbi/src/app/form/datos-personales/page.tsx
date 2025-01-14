"use client"

import FormDatePicker from "@/app/components/FormDatePicker"
import FormFieldInput from "@/app/components/FormFieldInput"
import FormSelect from "@/app/components/FormSelect"
import { Form } from "@/components/ui/form"
import { useAuth } from "@/hooks/useAuth"
import { axiosGetServiceDatosIniciales } from "@/lib/services/axios.service"
import { IApiResponse } from "@/models/apiResponse"
import { IPostulante } from "@/models/postulante"
import { IClasificadoresResponse } from "@/models/clasificadoresPostula"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"
import { z } from "zod"
import { useFormContext } from "@/app/components/formProvider"
import Navigation from "@/app/components/Navigation"

const formSchema = z.object({
  nombre2: z.string(),
  apellido2: z.string(),
  departamento_emision_ci_id: z.number(),
  direccion_domicilio: z.string(),
  telefono_domicilio: z.string(),
  promedio1: z.string(),
  promedio2: z.string(),
  promedio3: z.string(),

  // municipio_nacimiento_id: z.number(),
})

const DatosPersonales = () => {
  const router = useRouter()
  const { formData, setFormData, clasificadoresResponse } = useFormContext()
  const dataClasificadores = clasificadoresResponse as IClasificadoresResponse
  const { uuid, token } = useAuth()
  const { data } = useQuery<IApiResponse<IPostulante>>({
    queryKey: ["data-postulante"],
    queryFn: () => axiosGetServiceDatosIniciales(uuid, token)
  })

  const form = useForm<IPostulante>({
    resolver: zodResolver(formSchema),
    defaultValues: formData.postulante
  })

  const onSubmit = (values: IPostulante) => {
    console.log(values)
    setFormData({ ...formData, postulante: values })
    console.log(formData)
    router.push("/form/datos-familiares")
  }

  const getLabelFromKey = (
    key: string,
    classifierObject: { [key: string]: string }
  ): string => {
    const value = classifierObject[key] || "no encontrado"
    return value
  }

  const getLabelFromId = (
    id: number,
    classifierArray: { id: number, descripcion: string, sigla?: string }[]
  ): string => {
    for (const item of classifierArray) {
      if (item.id === Number(id)) {
        return item.descripcion
      }
    }
    return "no encontrado"
  }
  
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div
          className="bg-[#EFF1F3] mx-auto my-5 w-11/12 lg:max-w-screen-lg p-2 lg:p-4 grid grid-cols-2 gap-2 md:grid-cols-4 lg:gap-4"
        >
          <FormFieldInput
            control={form.control}
            name="nombre1"
            label="Primer nombre"
            placeholder={data?.data.nombre1 || ""}
            disabled={true}
          />
          <FormFieldInput
            control={form.control}
            name="nombre2"
            label="Segundo nombre"
            placeholder={data?.data.nombre2 || ""}
            disabled={!!data?.data.nombre2}
          />
          <FormFieldInput
            control={form.control}
            name="apellido1"
            label="Primer Apellido"
            placeholder={data?.data.apellido1 || ""}
            disabled={true}
          />
          <FormFieldInput
            control={form.control}
            name="apellido2"
            label="Segundo Apellido"
            placeholder={data?.data.apellido2 || ""}
            disabled={!!data?.data.apellido2}
          />
          <FormFieldInput
            control={form.control}
            name="ci"
            label="Carnet de Identidad"
            placeholder={data?.data.ci || ""}
            disabled={true}
          />
          <FormSelect
            form={form}
            name="departamento_emision_ci_id"
            label="Departamento Emisión"
            placeholder="Departamento emisión CI"
            isRequired
            options={dataClasificadores?.lista_departamento?.map((item) => ({
              value: item.id.toString(),
              label: item.descripcion,
            }))}
          />
          <FormFieldInput
            control={form.control}
            name="pais_nacionalidad_id"
            label="Pais de Nacionalidad"
            placeholder={
              data?.data.pais_nacionalidad_id && dataClasificadores?.lista_pais
                ? getLabelFromId(data.data.pais_nacionalidad_id, dataClasificadores.lista_pais)
                : "País no encontrado"
            }
            disabled={true}
          />
          <FormDatePicker
            form={form}
            name="fecha_nacimiento"
            label="Fecha de Nacimiento"
            placeholder={data?.data.fecha_nacimiento || ""}
            isRequired
            disabled={true}
          />
          <FormFieldInput
            control={form.control}
            name="sexo"
            label="Sexo"
            placeholder={
              data?.data.sexo && dataClasificadores?.lista_sexo
                ? getLabelFromKey(data.data.sexo, dataClasificadores.lista_sexo)
                : ""
            }
            disabled={true}
          />
          <FormFieldInput
            control={form.control}
            name="estado_civil"
            label="Estado Civil"
            placeholder={data?.data.estado_civil && dataClasificadores?.lista_estado_civil
              ? getLabelFromKey(data.data.estado_civil, dataClasificadores.lista_estado_civil)
              : ""}
            isRequired
            disabled={true}
          />
          <FormFieldInput
            control={form.control}
            name="email"
            label="Email"
            placeholder={data?.data.email || ""}
            disabled={true}
            isRequired
          />
          <FormFieldInput
            control={form.control}
            name="telefono_celular"
            label="Telefono Celular"
            placeholder={data?.data.telefono_celular || ""}
            disabled={true}
            onlyNumber
            isRequired
          />
          <FormFieldInput
            control={form.control}
            name="nombre_colegio"
            label="Colegio de Egreso"
            placeholder={data?.data.nombre_colegio || ""}
            disabled={true}
            isRequired
          />
          <FormSelect
            form={form}
            name="gestion_egreso_colegio"
            label="Gestión de Egreso"
            placeholder={data?.data.gestion_egreso_colegio.toString() || ""}
            isRequired
            disabled={true}
          />
          <FormFieldInput
            control={form.control}
            name="tipo_colegio_id"
            label="Tipo de Colegio"
            placeholder={
              data?.data.tipo_colegio_id && dataClasificadores?.lista_tipo_colegio
                ? getLabelFromId(data.data.tipo_colegio_id, dataClasificadores.lista_tipo_colegio)
                : "Tipo de colegio no encontrado"
            }
            disabled={true}
          />
          <FormFieldInput
            control={form.control}
            name="telefono_domicilio"
            label="Telefono Domicilio"
            placeholder=""
            onlyNumber
            isRequired
          />
          <FormFieldInput
            control={form.control}
            name="direccion_domicilio"
            label="Direccion Domicilio"
            placeholder=""
            isRequired
          />	
          <FormFieldInput
            control={form.control}
            name="promedio1"
            label="Promedio 4to"
            placeholder=""
            onlyNumber
            isRequired
          />
          <FormFieldInput
            control={form.control}
            name="promedio2"
            label="Promedio 5to"
            placeholder=""
            onlyNumber
            isRequired
          />
          <FormFieldInput
            control={form.control}
            name="promedio3"
            label="Promedio 6to"
            placeholder=""
            onlyNumber
            isRequired
          />
        </div>
          <Navigation
            previous="/"
            previousDisabled={true}
          />
      </form>
    </Form>
  )
}

export default DatosPersonales
