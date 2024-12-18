"use client"

import { queryClient } from "@/lib/utils"
import { QueryClientProvider } from "@tanstack/react-query"

const QueryProvider = ({ children, }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export default QueryProvider
