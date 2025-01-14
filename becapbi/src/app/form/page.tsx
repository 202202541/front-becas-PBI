"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter();

  const onClick = () => {
    router.push('/form/datos-personales')
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Button onClick={onClick}>Comenzar Formulario de Beca PBI</Button>
    </div>
  )
}

export default Page;
