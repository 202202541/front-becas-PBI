import AuthProvider from "@/providers/AuthProvider"
import QueryProvider from "@/providers/QueryProvider"
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
            <main className="w-full min-h-screen bg-[url('/PBI.svg')] bg-cover bg-fixed bg-center">
              {children}
            </main>
          </body>
        </html>
      </AuthProvider>
    </QueryProvider>
  )
}
