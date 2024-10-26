import Link from 'next/link'
import React from 'react'
import { buttonVariants } from "@/components/ui/button"
const Header = () => {
    return (
        <div className='border-b py-4'>
            <div className='container mx-auto flex justify-between items-center px-8'>
                <div className='flex gap-8 items-center'>
                    <Link href='formulario'>Formulario</Link>
                    <Link href='postulacion'>Postulación</Link>
                </div>
                <Link 
                    href='postulante'
                    className={buttonVariants({ variant: 'default' })}
                >Postulante</Link>
            </div>
        </div>
    );
}

export default Header