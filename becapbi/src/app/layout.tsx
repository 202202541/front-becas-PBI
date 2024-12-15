import { AuthProvider } from "@/context/AuthContext"
import type { Metadata } from "next"
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "UMSS",
  description: "Aplicacion con Autentifucacion",
}

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <AuthProvider>
      <html lang="es">
        <body>
          {children}
        </body>
      </html>
    </AuthProvider>
  )
}
