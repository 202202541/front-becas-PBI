"use client"
import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {Card,CardContent,CardHeader,CardTitle} from "@/components/ui/card"

const UserLogin = () => {
  const formSchema = z.object({
    codigoSis: z.string()
    .regex(/^\d+$/, "El código SIS debe contener solo números")
    .min(1, "Este campo no puede estar vacio")
    .max(50, "Este no es un codigo SIS correcto"),
    password: z.string()
    .min(1, "Este campo no puede estar vacio")
    .max(50, "La contraseña es demasiado larga"),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      codigoSis: "",
    },
  })
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <Card className="mx-auto max-w-sm p-2 w-full bg-[#F3F4F7]">
      <CardHeader>
        <CardTitle className="text-2xl">Inicio de Sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <FormField
              control={form.control}
              name="codigoSis"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Codigo SIS</FormLabel>
                  <FormControl>
                    <Input 
                      type="text" 
                      placeholder="ingrese su codigo SIS" {...field} 
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        field.onChange(value)
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contraseña</FormLabel>
                  <FormControl>
                    <Input placeholder="Ingrese su contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default UserLogin