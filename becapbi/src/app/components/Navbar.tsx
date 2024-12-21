"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const routes = [
  { label: "Formulario", path: "form", destination: "/form" },
  { label: "Contacto", path: "contact", destination: "/contact" },
  { label: "Inicio", path: "inicio", destination: "/inicio" },
]

const Navbar = () => {
  const pathname = usePathname().split("/")[1]

  return (
    <header className="bg-customBlue text-white py-5 px-4">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-black">UMSS</h1>

        <div className="flex gap-2 sm:gap-5 lg:gap-8">
          {routes.map(({ label, path, destination }, idx) => {
            return (
              <Link
                key={idx}
                href={destination}
                className={`${path === pathname ? "border-b-white font-medium" : ""} mt-1 py-1 border-b border-b-transparent hover:border-b-white hover:opacity-70`}
              >{label}</Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
