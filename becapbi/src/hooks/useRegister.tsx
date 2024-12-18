"use client"

import { axiosGetServiceClasificadoresCrea, axiosPostServiceCreaCuenta } from "@/lib/services/axios.service"
import { IClasificadoresCrea } from "@/models/clasificadores"
import { useMutation, useQuery } from "@tanstack/react-query"
import { FormData } from "@/models/apiResponse"

export const useGetDataRegister = () => useQuery<IClasificadoresCrea>({
  queryKey: ["data-register"],
  queryFn: axiosGetServiceClasificadoresCrea,
})

export const usePostRegister = () => useMutation({
  mutationFn: (data: FormData) => axiosPostServiceCreaCuenta(data)
})
