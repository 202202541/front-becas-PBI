"use client"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { AxiosServiceCiclo, AxiosServiceLogin } from '@/lib/Services/axios.service'
import { Input } from '@/components/ui/input'
import { PasswordInput } from "@/components/ui/password-input"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useRouter } from 'next/navigation'
import { useAuth } from '@/context/AuthContext'
import { useEffect, useState } from 'react'

const UserLogin = () => {

  const router = useRouter()
  const { setAuthData } = useAuth()
  const [activo, setActivo] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const formSchema = z.object({
    username: z.string()
      .min(1, "Requerido")
      .regex(/^\d+$/, "El código SIS debe contener solo números")
      .max(50, "Este no es un codigo SIS correcto"),
    password: z.string()
      .min(1, "Requerido")
      .max(50, "La contraseña es demasiado larga"),
  })
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setErrorMessage(null)
    const { username, password } = values
    console.log({ username, password })
    try {
      const respuesta = await AxiosServiceLogin({ username, password })
      if (respuesta.statusCode === 200) {
        setAuthData(respuesta.token, respuesta.uuid)
        router.push("/inicio")
        console.log("token: ", respuesta.token)
        console.log("uuid: ", respuesta.uuid)
      } else {
        setErrorMessage(respuesta.message)
      }
    } catch (error) {
      setErrorMessage("Error en el servidor. Inténtelo de nuevo.")
    }
  }

  useEffect(() => {
    const validarHabilitado = async () => {
      try {
        const respuesta = await AxiosServiceCiclo()
        const datos = respuesta.data
        setActivo(datos.activo)
      } catch (error) {
        setErrorMessage("Error al verificar la disponibilidad, intenta más tarde.")
      }
    }
    validarHabilitado()
  }, [])

  return (
    <Card className="mx-auto max-w-xs w-full bg-[#F3F4F7]">
      <CardHeader>
        <CardTitle className="text-2xl">Inicio de Sesión</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-3">
            <FormField
              control={form.control}
              name="username"
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
                    <PasswordInput placeholder="Ingrese su contraseña" {...field} />
                  </FormControl>
                  <FormMessage />
                  {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full mt-3">Iniciar Sesión</Button>
          </form>
        </Form>
        <p className="text-center">¿Aún no tienes una cuenta?</p>
        <Button
          className="w-full my-3"
          onClick={() => router.push('/register')}
          disabled={!activo}
        >Registrarse</Button>
      </CardContent>
    </Card>
  )
}

export default UserLogin