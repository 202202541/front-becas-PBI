"use client"

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { usePathname, useRouter } from "next/navigation"

const PaginationForm = ({ routes }: { routes: string[] }) => {
  const router = useRouter()
  const pathname = usePathname()

  const handleOnclick = (id: number, destination: string) => {
    router.push(destination)
  }

  return (
    <Pagination className="py-2 bg-[#EFF1F3]">
      <PaginationContent>
        {routes.map((route, idx) => {
          return (
            <PaginationItem key={idx} className="hover:cursor-pointer">
              <PaginationLink
                isActive={pathname === route}
                onClick={() => handleOnclick(idx, route)}
              >{idx + 1}</PaginationLink>
            </PaginationItem>
          )
        })}
      </PaginationContent>
    </Pagination>
  )
}

export default PaginationForm
