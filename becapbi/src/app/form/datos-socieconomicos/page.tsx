"use client"
import {z} from 'zod'
import { useForm } from "react-hook-form"
import {Form} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormRadioGroup from '@/app/components/FormRadioGroup'
import FormRadioValue from '@/app/components/FormRadioValue'
import { useState } from 'react'
import DatosDependiente from '@/app/components/DatosDependiente'
import DatosIndependiente from '@/app/components/DatosIndependiente'

const formSchema = z.object({
  es_dependiente: z.boolean(),
  nombres_apellidos_responsable: z.string(),
  parentesco: z.string(),

  fecha_nacimiento: z.date(),
  
  estado_civil: z.string(),
  nro_integrantes_familia: z.number(),
  ocupacion: z.string(),
  institucion_trabajo: z.string(),
  telefono_trabajo: z.string(),
  salario_ingreso: z.number(),
  otro_ingreso: z.number(),
  sector_trabajo: z.string(),
  categoria_ocupacional: z.string(),

  dedicacion_trabajo: z.string(),
  postulante_vive_con: z.string(),
  tipo_vivienda_pos: z.string(),

  // municipio_trabajo_id: z.number(),
})
const DatosSocieconomicos = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      es_dependiente: true,
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }


  const [dependiente, setDependiente] = useState<boolean | null>(null)

  return (
    <Form {...form}>
      <form
        className="bg-[#EFF1F3] mx-auto my-5 w-11/12 lg:max-w-screen-lg p-2 lg:p-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4"
        onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormRadioGroup
            form={form}
            name="es_dependiente"
            label="¿Es dependiente economicamente?"
            onValueChange={(value) => {value === "true" ? setDependiente(true) : setDependiente(false)}}
          >
            <FormRadioValue
              value={"true"}
              label="Si, soy dependiente economicamente"
            ></FormRadioValue>
            <FormRadioValue
              value={"false"}
              label="No, soy independiente economicamente"
            ></FormRadioValue>
          </FormRadioGroup>
        {dependiente !== null && 
          (dependiente ?
            <DatosDependiente 
              form={form} />
            :
            <DatosIndependiente 
              form={form} />
          )
        }
      </form>
    </Form>
  )
}

export default DatosSocieconomicos
