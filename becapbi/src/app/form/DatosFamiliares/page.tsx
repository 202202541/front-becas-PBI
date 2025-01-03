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
import { useState } from 'react'
import DatosApoderado from '@/app/components/DatosApoderado'
import DatosPadres from '@/app/components/DatosPadres'


const FormDatoFamiliar = () => {

  const formSchema = z.object({
    en_contacto_padres: z.boolean(),
    direccion_padres: z.string(),
    telefono_padres: z.string(),
    celular_padres: z.string(),
    referencia_padres: z.string(),
    tipo_vivienda_pad: z.string(),
    tiene_apoderado: z.boolean(),

    nombres_apellido_apoderado: z.string(),
    direccion_apoderado: z.string(),
    telefono_apoderado: z.string(),
    celular_apoderado: z.string(),
    referencia_apoderado: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      en_contacto_padres: true,
      direccion_padres: "",
      telefono_padres: "",
      celular_padres: "",
      referencia_padres: "",
      tipo_vivienda_pad: "",

      tiene_apoderado: false,
      nombres_apellido_apoderado: "",
      direccion_apoderado: "",
      telefono_apoderado: "",
      celular_apoderado: "",
      referencia_apoderado: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  const [apoderado, setApoderado] = useState<boolean | null>(null)

  return (
    <Card className="w-11/12 max-w-xl3 justify-center bg-[#F3F4F7]">
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
              onValueChange={(value) => { value === "true" ? setApoderado(true) : setApoderado(false) }}
            >
              <FormRadioValue
                value={"true"}
                label="Si, soy dependiente economicamente"
              ></FormRadioValue>
              <FormRadioValue
                value={"false"}
                label="No, soy independientes economicamente"
              ></FormRadioValue>
            </FormRadioGroup>

            {apoderado !== null && 
              (apoderado ?
                <DatosPadres
                  form={form} />
                :
                <DatosApoderado
                  form={form} />
              )
            }
            <Button type="submit" className="w-full mt-3 font-bold bg-customBlue">Iniciar Sesión</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default FormDatoFamiliar