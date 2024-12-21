import Navbar from "@/app/components/Navbar"
import PaginationForm from "@/app/components/PaginationForm"

const routesPagination = [
  "/form2/datos-personales",
  "/form2/datos-familiares",
  "/form2/datos-socieconomicos",
  "/form2/antecedentes-academicos",
]

const FormularioVentana = ({ children }: { children: Readonly<React.ReactNode> }) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar />
      {/* <FormProvider> */}
        <main>{children}</main>
      {/* </FormProvider> */}
      <PaginationForm routes={routesPagination} />
    </div>
  )
}

export default FormularioVentana
