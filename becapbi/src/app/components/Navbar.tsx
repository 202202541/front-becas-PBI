"use client"; // Asegúrate de que este componente sea un componente de cliente

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Cambia aquí
import React from 'react';

function Navbar() {
  const pathname = usePathname(); // Obtener la ruta actual

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-900 to-red-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">UMSS</h1>
        <ul className="flex space-x-4">
          
            <Link
              className={`text-white hover:text-gray-300 ${pathname === '/form' ? 'text-orange-500' : ''}`}
              href="/form"
            >
              Formulario
            </Link>

            <Link
              className={`text-white hover:text-gray-300 ${pathname === '/contact' ? 'text-orange-500' : ''}`}
              href="/contact"
            >
              Contacto
            </Link>
            
            <Link
              className={`text-white hover:text-gray-300 ${pathname === '/inicio' ? 'text-orange-500' : ''}`}
              href="/inicio"
            >
              Inicio
            </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
