import React from 'react'
import Navbar from '../components/Navbar'
import { FormProvider } from '../components/formProvider';
import PaginationComponent from '../components/PaginationComponent';

interface LayoutProps{
    children: React.ReactNode;
}

const FormularioVentana: React.FC<LayoutProps> =({ children }) =>{
  return (
  
    <div>
        <Navbar/>
        <FormProvider>
          <main>{children}</main>
        </FormProvider>
        <PaginationComponent/>
    </div>
  )
}

export default FormularioVentana;