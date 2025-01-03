"use client"

import {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationNext,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { usePathname, useRouter } from "next/navigation"
import { useForm } from "./formProvider"

const PaginationForm = ({ routes }: { routes: string[] }) => {
  const router = useRouter()
  const pathname = usePathname()
  const formContext = useForm()
  if (!formContext) {
    return null
  }
  const { isPageValid, setPageValidity } = formContext

  const currentIndex = routes.findIndex((route: string) => route === pathname)

  const handleNavigation = (direction: "next" | "previous") => {
    const nextIndex =
      direction === "next" ? currentIndex + 1 : currentIndex - 1
    if (nextIndex < 0 || nextIndex >= routes.length) {
      return
    }

    const nextRoute = routes[nextIndex]
    const currentPageIsValid = isPageValid[pathname]
    console.log(isPageValid)
    if (!currentPageIsValid) {
      return
    }
    router.push(nextRoute)
  }
  return (
    <Pagination className="py-2 bg-[#EFF1F3]">
      <PaginationContent>
        <PaginationPrevious
          onClick={() => handleNavigation("previous")}
          className={currentIndex <= routes.length - 1 ? "pointer-events-none opacity-50" : ""}>
        </PaginationPrevious>
        <PaginationNext
          onClick={() => handleNavigation("next")}
          className={currentIndex >= routes.length - 1 ? "pointer-events-none opacity-50" : ""}>
        </PaginationNext>
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationForm
