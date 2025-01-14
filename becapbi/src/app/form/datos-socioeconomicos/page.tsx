"use client"
import { z } from 'zod'
import { useForm } from "react-hook-form"
import { Form } from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import FormRadioGroup from '@/app/components/FormRadioGroup'
import FormRadioValue from '@/app/components/FormRadioValue'
import { useState } from 'react'
import DatosDependiente from '@/app/components/DatosDependiente'
import DatosIndependiente from '@/app/components/DatosIndependiente'
import { Button } from '@/components/ui/button'
import { useFormContext } from '@/app/components/formProvider'
import Navigation from '@/app/components/Navigation'

const formSchema = z.object({
  es_dependiente: z.string(),
  nombres_apellidos_responsable: z.string(),
  parentesco: z.string(),
  fecha_nacimiento: z.date(),
  estado_civil: z.string(),
  nro_integrantes_familia: z.string(),
  ocupacion: z.string(),
  institucion_trabajo: z.string(),
  telefono_trabajo: z.string(),
  salario_ingreso: z.string(),
  otro_ingreso: z.string(),
  sector_trabajo: z.string(),
  categoria_ocupacional: z.string(),
  dedicacion_trabajo: z.string(),
  postulante_vive_con: z.string(),
  tipo_vivienda_pos: z.string(),
})

const DatosSocieconomicos = () => {
  const { formData } = useFormContext()
  const [esDependiente, setEsDependiente] = useState<boolean>(formData.dato_socioeconomico?.es_dependiente === "true" ? true : false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      ...formData.dato_socioeconomico,
    }
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const sendForm = { ...formData, dato_socioeconomico: values }
      console.log('Formulario enviado:', sendForm)

    } catch (error) {
      console.error('Error al enviar el formulario:', error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="bg-[#EFF1F3] mx-auto my-5 w-11/12 lg:max-w-screen-lg p-2 lg:p-4 grid grid-cols-2 gap-2 md:grid-cols-3 lg:gap-4">
          <FormRadioGroup
            form={form}
            name="es_dependiente"
            label="¿Es dependiente economicamente?"
            onValueChange={(value: string) => {
              const isDependiente = value === "true"
              setEsDependiente(isDependiente)
              form.setValue("es_dependiente", isDependiente?.toString())

              if (isDependiente) {
                form.setValue("nombres_apellidos_responsable", "")
                form.setValue("parentesco", "")
                form.setValue("fecha_nacimiento", new Date())
                form.setValue("estado_civil", "")
                form.setValue("nro_integrantes_familia", "")
                form.setValue("ocupacion", "")
                form.setValue("institucion_trabajo", "")
                form.setValue("telefono_trabajo", "")
                form.setValue("salario_ingreso", "")
                form.setValue("otro_ingreso", "")
                form.setValue("sector_trabajo", "")
                form.setValue("categoria_ocupacional", "")
              } else {
                form.setValue("ocupacion", "")
                form.setValue("institucion_trabajo", "")
                form.setValue("salario_ingreso", "")
                form.setValue("dedicacion_trabajo", "")
                form.setValue("sector_trabajo", "")
                form.setValue("categoria_ocupacional", "")
                form.setValue("postulante_vive_con", "")
                form.setValue("tipo_vivienda_pos", "")
              }
            }}
          >
            <FormRadioValue
              value="true"
              label="Si, soy dependiente economicamente"
            />
            <FormRadioValue
              value="false"
              label="No, soy independiente economicamente"
            />
          </FormRadioGroup>

          {esDependiente !== undefined && (
            esDependiente ? (
              <DatosDependiente form={form} />
            ) : (
              <DatosIndependiente form={form} />
            )
          )}
        </div>
        
        <div className="flex justify-end">
          <Navigation 
            previous="/form/datos-integrantes"
            nextName={form.formState.isSubmitting ? 'Enviando...' : 'Enviar Formulario'}
          />
        </div>
      </form>
    </Form>
  )
}

export default DatosSocieconomicos