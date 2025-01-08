"use client"

import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination"
import { usePathname, useRouter } from "next/navigation"
import { useFormContext } from "@/app/components/formProvider"

const PaginationForm = ({ routes }: { routes: string[] }) => {
  const router = useRouter()
  const pathname = usePathname()
  const formContext = useFormContext()

  if (!formContext) return null

  const currentIndex = routes.indexOf(pathname)

  const handleNavigation = (direction: "next" | "previous") => {
    const nextIndex = currentIndex + (direction === "next" ? 1 : -1)
    if (nextIndex >= 0 && nextIndex < routes.length) {
      router.push(routes[nextIndex])
    }
  }

  return (
    <Pagination className="py-2 bg-[#EFF1F3]">
      <PaginationContent>
        <PaginationPrevious
          onClick={() => handleNavigation("previous")}
          className={currentIndex <= 0 ? "pointer-events-none opacity-50" : ""}
        />
        <PaginationNext
          onClick={() => handleNavigation("next")}
          className={currentIndex >= routes.length - 1 ? "pointer-events-none opacity-50" : ""}
        />
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationForm
