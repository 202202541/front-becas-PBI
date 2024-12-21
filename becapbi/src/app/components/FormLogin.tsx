"use client"

import FormFieldInput from "@/app/components/FormFieldInput"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { useAuth } from "@/hooks/useAuth"
import { axiosGetServiceCiclo, axiosPostServiceLogin } from "@/lib/services/axios.service"
import { IStatusService } from "@/models/apiResponse"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
})

const FormLogin = () => {
  const router = useRouter()
  const { setAuthData } = useAuth()
  const [errorMessage, setErrorMessage] = useState<string>("")
  const { data } = useQuery<IStatusService>({
    queryKey: ["status-register"],
    queryFn: axiosGetServiceCiclo
  })
  const { mutate, isPending } = useMutation({
    mutationFn: (user: z.infer<typeof formSchema>) => axiosPostServiceLogin(user),
    onSuccess: (response) => {
      if (response.statusCode === 200) {
        setAuthData(response.token, response.uuid)
        router.push("/inicio")
      } else {
        setErrorMessage(response.message)
      }
    },
    onError: (error) => {
      setErrorMessage("Error en el servidor. Inténtelo de nuevo.")
    }
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { password: "", username: "" },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => mutate(values)

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 mb-3">
          <FormFieldInput
            control={form.control}
            name="username"
            label="Nombre de Usuario"
            maxLength={15}
            placeholder="Ingrese su nombre de usuario"
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
          <Button
            type="submit"
            className="w-full mt-3 font-bold bg-customBlue disabled:cursor-auto disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? "Iniciando Sesión..." : "Iniciar Sesión"}
          </Button>
        </form>
      </Form>

      <p className="text-center">¿Aún no tienes una cuenta? <button
        className="font-medium text-customBlue hover:text-primary/90 hover:border-b border-b hover:border-primary/90 cursor-pointer disabled:opacity-50 disabled:cursor-auto disabled:border-transparent"
        onClick={() => router.push("/register")}
        disabled={!data?.activo}
      >registrate</button>
      </p>
    </>
  )
}

export default FormLogin
