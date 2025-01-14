"use client"
import Navbar from "@/app/components/Navbar"
import PaginationForm from "@/app/components/PaginationForm"
import { FormProvider } from "../components/formProvider"

const FormularioVentana = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      <FormProvider>
        <div className="flex items-center justify-center py-4">
          <main className="w-full max-w-4xl px-4">
            {children}
          </main>
        </div>
      </FormProvider>
    </div>
  )
}

export default FormularioVentana
