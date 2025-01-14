"use client"
import React, { useState } from "react"
import { z } from "zod"
import { useForm, useFieldArray } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form } from "@/components/ui/form"
import IntegranteFamiliar from "@/app/components/IntegranteFamiliar"
import { Button } from "@/components/ui/button"
import Navigation from "@/app/components/Navigation"
import { useFormContext } from "@/app/components/formProvider"
import { useRouter } from "next/navigation"

const integranteSchema = z.object({
  id: z.number(),
  nombres: z.string(),
  apellidos: z.string(),
  edad: z.string(),
  ocupacion: z.string(),
  estado_civil: z.string(),
  parentesco_id: z.string(),
})
const formSchema = z.object({
  grupo_familiar: z.array(integranteSchema),
})
const DatosIntegrantesFamiliares = () => {
  const router = useRouter()
  const { formData, setFormData } = useFormContext()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      grupo_familiar: [
        {
          id: 1,
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
  const [message, setMessage] = useState("")
  const [idx, setIdx] = useState(1)

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "grupo_familiar",
  })
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    setFormData({ ...formData, grupo_familiar: values.grupo_familiar })
    router.push("/form/datos-socioeconomicos")
  }

  const handleValidation = async (values: z.infer<typeof formSchema>) => {
    const isEmpty = values.grupo_familiar.some((integrante) => 
      Object.values(integrante).some((value) => String(value).trim() === "")
    )
    if (isEmpty) {
      setMessage("Porfavor llene todos los campos")
      return
    }
    setMessage("")
    form.handleSubmit(onSubmit)()
  }

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleValidation(form.getValues())
        }}
      >
        <div
          className="bg-[#EFF1F3] mx-auto my-5 w-11/12 pb-2"
        >
          <div className="lg:max-w-screen-lg p-2 lg:p-4 grid grid-cols-2 gap-2 md:grid-cols-2 lg:gap-4">
            {fields.map((field, index) => (
              <IntegranteFamiliar
                key={field.id}
                name={`Integrante ${index + 1}`}
                form={form}
                index={index}
                onRemove={() => remove(index)}
              />
            ))}
          </div>
          <div className="flex flex-col items-center">
            <Button
              onClick={() => {
                setIdx(idx + 1)
                append({
                  id: idx,
                  nombres: "",
                  apellidos: "",
                  edad: "",
                  ocupacion: "",
                  estado_civil: "",
                  parentesco_id: "",
                })
              }}
            >
              Añadir nuevo integrante
            </Button>
            {message && <p className="mt-2 text-red-500 text-sm">{message}</p>}
          </div>
        </div>
        <Navigation
          previous="/form/datos-familiares"

        />
      </form>
    </Form>
  )
}

export default DatosIntegrantesFamiliares