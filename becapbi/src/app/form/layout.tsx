import React from 'react'
import Navbar from '../components/Navbar'

interface LayoutProps{
    children: React.ReactNode;
}

const FormularioVentana: React.FC<LayoutProps> =({ children }) =>{
  return (
    
    <div>
        <Navbar/>
        <main>{children}</main>
    </div>
  )
}

export default FormularioVentana;