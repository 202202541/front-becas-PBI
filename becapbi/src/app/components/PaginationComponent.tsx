"use client"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter } from "next/navigation"

const PaginationComponent = () => {
  const router = useRouter()
  const pathname = usePathname()
  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => {router.push('/form/DatosPersonales')}} isActive={pathname === '/form/DatosPersonales'}>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => {router.push('/form/DatosFamiliares')}} isActive={pathname === '/form/DatosFamiliares'}>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => {router.push('/form/AntecedentesAcademicos')}} isActive={pathname === '/form/AntecedentesAcademicos'}>
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={() => {router.push('/form/DatosSocioeconomicos')}} isActive={pathname === '/form/DatosSocioeconomicos'}>
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  )
}

export default PaginationComponent