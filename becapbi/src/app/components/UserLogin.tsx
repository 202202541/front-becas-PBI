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
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const UserLogin = () => {
  const router = useRouter()
  const { setAuthData } = useAuth()
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { data } = useQuery<IStatusService>({
    queryKey: ["status-register"],
    queryFn: axiosGetServiceCiclo
  })

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

  return (
    <Card className="w-11/12 max-w-md bg-[#F3F4F7]">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Inicio de Sesión</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-3">
            <FormFieldInput
              control={form.control}
              name="username"
              label="Codigo SIS"
              maxLength={9}
              placeholder="ingrese su codigo SIS"
              onlyNumber
              isRequired
            />

            <FormFieldInput
              control={form.control}
              name="password"
              label="Contraseña"
              maxLength={50}
              placeholder="Ingrese su contraseña"
              isRequired
              type="password"
            />

            {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
            <Button type="submit" className="w-full mt-3 font-bold bg-customBlue">Iniciar Sesión</Button>
          </form>
        </Form>

        <p className="text-center">¿Aún no tienes una cuenta? <button
          className="font-medium text-customBlue hover:text-primary/90 hover:border-b border-b hover:border-primary/90 cursor-pointer disabled:opacity-50 disabled:cursor-auto disabled:border-transparent"
          onClick={() => router.push("/register")}
          disabled={!data?.activo}
        >registrate</button>
        </p>
      </CardContent>
    </Card>
  )
}

export default UserLogin
