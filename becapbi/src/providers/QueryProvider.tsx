"use client"

import { queryClient } from "@/lib/utils"
import { QueryClientProvider } from "@tanstack/react-query"

export const QueryProvider = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
