"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import FormRadioGroup from '@/app/components/FormRadioGroup'
import FormRadioValue from '@/app/components/FormRadioValue'
import { useState } from 'react'
import DatosPadres from '@/app/components/DatosPadres'
import DatosApoderado from '@/app/components/DatosApoderado'
import { useRouter } from "next/navigation"
import Navigation from "@/app/components/Navigation"
import { useFormContext } from "@/app/components/formProvider"
import FormValues from "@/models/dataFamiliar"
import { is } from "date-fns/locale"

const baseSchema = z.object({
  en_contacto_padres: z.boolean(),
  tiene_apoderado: z.boolean(),
  direccion_padres: z.string().optional(),
  telefono_padres: z.string().optional(),
  celular_padres: z.string().optional(),
  referencia_padres: z.string().optional(),
  tipo_vivienda_pad: z.string().optional(),
  nombres_apellido_apoderado: z.string().optional(),
  direccion_apoderado: z.string().optional(),
  telefono_apoderado: z.string().optional(),
  celular_apoderado: z.string().optional(),
  referencia_apoderado: z.string().optional(),
  // municipio_dir_pad_id: z.number().optional(),
  // municipio_dir_apo_id: z.number().optional(),
})


const FormDatoFamiliar = () => {
  const router = useRouter()
  const { formData, setFormData } = useFormContext()
  const [contactoPadres, setContactoPadres] = useState<boolean>(formData.dato_familiar?.en_contacto_padres)
  const [apoderado, setApoderado] = useState<boolean>(formData.dato_familiar?.tiene_apoderado)

  const form = useForm<FormValues>({
    resolver: zodResolver(baseSchema),
    defaultValues: {
      ...formData.dato_familiar,
    }
  })

  const onSubmit = (values: FormValues) => {
    const updateData = (prevData: any) => ({
      ...prevData,
      dato_familiar: values
    })
    setFormData(updateData)
    router.push("/form/datos-integrantes")
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-11/12 max-w-xl3 bg-[#F3F4F7]">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Datos Familiares</CardTitle>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-3">
              <FormRadioGroup
                form={form}
                name="en_contacto_padres"
                label="¿Vive con sus padres?"
                onValueChange={(value: string) => {
                  const isContactoPadres = value === "true"
                  setContactoPadres( isContactoPadres )
                  form.setValue("en_contacto_padres", isContactoPadres)

                  if (!isContactoPadres) {
                    form.setValue("direccion_padres", "")
                    form.setValue("telefono_padres", "")
                    form.setValue("celular_padres", "")
                    form.setValue("referencia_padres", "")
                    form.setValue("tipo_vivienda_pad", "")
                  }
                }}
              >
                <FormRadioValue
                  value="true"
                  label="Si, estoy en contacto con mis padres"
                  disabled={apoderado}
                />
                <FormRadioValue
                  value="false"
                  label="No, no estoy en contacto con mis padres"
                />
              </FormRadioGroup>

              <FormRadioGroup
                form={form}
                name="tiene_apoderado"
                label="¿Tiene apoderado?"
                onValueChange={(value: string) => {
                  const isApoderado = value === "true"
                  setApoderado(isApoderado)
                  form.setValue("tiene_apoderado", isApoderado)

                  if (!isApoderado) {
                    form.setValue("nombres_apellido_apoderado", "")
                    form.setValue("direccion_apoderado", "")
                    form.setValue("telefono_apoderado", "")
                    form.setValue("celular_apoderado", "")
                    form.setValue("referencia_apoderado", "")
                  }
                }}
              >
                <FormRadioValue
                  value="true"
                  label="Si, tengo apoderado"
                  disabled={contactoPadres}
                />
                <FormRadioValue
                  value="false"
                  label="No, no tengo apoderado"
                />
              </FormRadioGroup>

              {contactoPadres && (
                <DatosPadres form={form} />
              )}
              {apoderado && (
                <DatosApoderado form={form} />
              )}

              <Navigation 
                previous={router.back}	 
              />
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default FormDatoFamiliar