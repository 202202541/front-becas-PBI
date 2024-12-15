"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from "@/components/ui/password-input"
import { useAuth } from "@/context/AuthContext"
import { AxiosServiceCiclo, AxiosServiceLogin } from "@/lib/Services/axios.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const UserLogin = () => {
  const router = useRouter()
  const { setAuthData } = useAuth()
  const [activo, setActivo] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string>("")

  const formSchema = z.object({
    username: z.string(),
    password: z.string(),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      username: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { username, password } = values

    try {
      const res = await AxiosServiceLogin({ username, password })

      if (res.statusCode === 200) {
        setAuthData(res.token, res.uuid)
        router.push("/inicio")
      } else {
        setErrorMessage(res.message)
      }
    } catch (error) {
      setErrorMessage("Error en el servidor. Inténtelo de nuevo.")
    }
  }

  useEffect(() => {
    const validarHabilitado = async () => {
      try {
        const res = await AxiosServiceCiclo()
        const datos = res.data
        setActivo(datos.activo)
      } catch (error) {
        setErrorMessage("Error al verificar la disponibilidad, intenta más tarde.")
      }
    }

    validarHabilitado()
  }, [])

  return (
    <Card className="mx-auto w-10/12 md:w-full bg-[#F3F4F7]">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Inicio de Sesión</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-3">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-medium">Codigo SIS</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="text"
                      maxLength={9}
                      placeholder="ingrese su codigo SIS"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "")
                        field.onChange(value)
                      }}
                      required
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
                  <FormLabel className="font-medium">Contraseña</FormLabel>
                  <FormControl>
                    <PasswordInput
                      {...field}
                      placeholder="Ingrese su contraseña"
                      maxLength={50}
                      required
                    />
                  </FormControl>
                  <FormMessage />

                </FormItem>
              )}
            />

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

            <Button type="submit" className="w-full mt-3 bg-customBlue">Iniciar Sesión</Button>
          </form>
        </Form>

        <p className="text-center">¿Aún no tienes una cuenta? <button
          className="font-medium text-customBlue hover:text-primary/90 hover:border-b border-b hover:border-primary/90 cursor-pointer disabled:opacity-50 disabled:border-none disabled:cursor-auto"
          onClick={() => router.push("/register")}
          disabled={!activo}
        >registrate</button>
        </p>
      </CardContent>
    </Card>
  )
}

export default UserLogin
