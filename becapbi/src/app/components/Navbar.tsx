"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gradient-to-r from-blue-900 via-blue-900 to-red-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">UMSS</h1>
        <ul className="flex space-x-4">
          <li>
            {pathname === '/form' ? (
              <div className="border border-orange-500 rounded p-1">
                <Link className="text-orange-500" href="/form">
                  Formulario
                </Link>
              </div>
            ) : (
              <Link
                className="text-white hover:text-gray-300"
                href="/form"
              >
                Formulario
              </Link>
            )}
          </li>
          <li>
            {pathname === '/contact' ? (
              <div className="border border-orange-500 rounded p-1">
                <Link className="text-orange-500" href="/contact">
                  Contacto
                </Link>
              </div>
            ) : (
              <Link
                className="text-white hover:text-gray-300"
                href="/contact"
              >
                Contacto
              </Link>
            )}
          </li>
          <li>
            {pathname === '/inicio' ? (
              <div className="border border-orange-500 rounded p-1">
                <Link className="text-orange-500" href="/inicio">
                  Inicio
                </Link>
              </div>
            ) : (
              <Link
                className="text-white hover:text-gray-300"
                href="/inicio"
              >
                Inicio
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
