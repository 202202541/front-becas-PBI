"use client"
import React, { useEffect } from "react"
import { z } from "zod"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import IntegranteFamiliar from "@/app/components/IntegranteFamiliar"
import { Button } from "@/components/ui/button"

const integranteSchema = z.object({
  nombres: z.string(),
  apellidos: z.string(),
  edad: z.string(),
  ocupacion: z.string(),
  estado_civil: z.string(),
  parentesco_id: z.string()
})
const formSchema = z.object({
  grupo_familiar: z.array(integranteSchema),
})
const DatosIntegrantesFamiliares = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grupo_familiar: [
        {
          nombres: "",
          apellidos: "",
          edad: "",
          ocupacion: "",
          estado_civil: "",
          parentesco_id: "",
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "grupo_familiar",
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }

  useEffect(() => {
    const subscription = form.watch((values) => {
      // console.log("Valores datos familiares:", values)
      console.log(values)
    })

    // return () => subscription.unsubscribe()

  }, [form.watch])

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-[#EFF1F3] mx-auto my-5 w-11/12 lg:max-w-screen-lg p-2 lg:p-4 grid grid-cols-2 gap-2 md:grid-cols-2 lg:gap-4"
      >
        {fields.map((field, index) => (
          <IntegranteFamiliar
            key={field.id}
            name={`Integrante ${index + 1}`}
            form={form}
            index={index}
            onRemove={() => remove(index)}
          />
        ))}
        <Button
          onClick={() => {
            append({
              nombres: "",
              apellidos: "",
              edad: "",
              ocupacion: "",
              estado_civil: "",
              parentesco_id: "",
            })
          }}
        >Añadir nuevo integrante</Button>
        <Button
          type="submit"
          className="bg-blue-600 text-white"
        >Enviar
        </Button>
      </form>
    </Form>
  )
}

export default DatosIntegrantesFamiliares