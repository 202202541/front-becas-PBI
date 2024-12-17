import { AuthProvider } from "@/context/AuthContext"
import { QueryProvider } from "@/providers/QueryProvider"
import type { Metadata } from "next"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "UMSS",
  description: "Aplicación con Autentificación",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <QueryProvider>
      <AuthProvider>
        <html lang="es">
          <body>
            {children}
          </body>
        </html>
      </AuthProvider>
    </QueryProvider>
  )
}
