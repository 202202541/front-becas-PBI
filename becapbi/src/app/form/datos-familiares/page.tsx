"use client"
import FormFieldInput from "@/app/components/FormFieldInput"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form } from "@/components/ui/form"
import { useAuth } from "@/hooks/useAuth"
import { AxiosServiceLogin, axiosGetServiceCiclo } from "@/lib/services/axios.service"
import { IStatusService } from "@/models/apiResponse"
import { zodResolver } from "@hookform/resolvers/zod"
import { useQuery } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { z } from "zod"
import FormRadioGroup from '@/app/components/FormRadioGroup'
import FormRadioValue from '@/app/components/FormRadioValue'
import { useState, useEffect } from 'react'
import DatosPadres from '@/app/components/DatosPadres'
import DatosApoderado from '@/app/components/DatosApoderado'

const FormDatoFamiliar = () => {

  const formSchema = z.object({
    en_contacto_padres: z.boolean(),
    tiene_apoderado: z.boolean(),

    direccion_padres: z.string(),
    telefono_padres: z.string(),
    celular_padres: z.string(),
    referencia_padres: z.string(),
    tipo_vivienda_pad: z.string(),

    nombres_apellido_apoderado: z.string(),
    direccion_apoderado: z.string(),
    telefono_apoderado: z.string(),
    celular_apoderado: z.string(),
    referencia_apoderado: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      en_contacto_padres: false,
      tiene_apoderado: false,
      direccion_padres: "",
      telefono_padres: "",
      celular_padres: "",
      referencia_padres: "",
      tipo_vivienda_pad: "",
      nombres_apellido_apoderado: "",
      direccion_apoderado: "",
      telefono_apoderado: "",
      celular_apoderado: "",
      referencia_apoderado: "",
    },
  })

  useEffect(() => {
    const subscription = form.watch((values) => {
      // console.log("Valores datos familiares:", values)
      console.log(form.getValues())
    })

    // return () => subscription.unsubscribe()
    
  }, [form.watch])

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
    
  }

  const [contactoPadres, setContactoPadres] = useState<boolean | null>(null)
  const [apoderado, setApoderado] = useState<boolean | null>(null)

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
                  value === "true" ? setContactoPadres(true) 
                  : setContactoPadres(false)
                }}
              >
                <FormRadioValue
                  value={"true"}
                  label="Si, estoy en contacto con mis padres"
                  disabled={apoderado === true}
                ></FormRadioValue>
                <FormRadioValue
                  value={"false"}
                  label="No, no estoy en contacto con mis padres"
                ></FormRadioValue>
              </FormRadioGroup>

              <FormRadioGroup
                form={form}
                name="tiene_apoderado"
                label="¿Tiene apoderado?"
                onValueChange={(value) => {
                  value === "true" ? setApoderado(true)
                  : setApoderado(false)
                }}>
                <FormRadioValue
                  value={"true"}
                  label="Si, tengo apoderado"
                  disabled={contactoPadres === true}
                ></FormRadioValue>
                <FormRadioValue
                  value={"false"}
                  label="No, no tengo apoderado"
                ></FormRadioValue>
              </FormRadioGroup>

              {contactoPadres !== null &&
                (contactoPadres &&
                  <DatosPadres
                    form={form} />
                )
              }
              {apoderado !== null &&
                (apoderado &&
                  <DatosApoderado
                    form={form} />
                )}
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}

export default FormDatoFamiliar