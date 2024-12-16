import React from 'react'
import FormRegister from '../components/FormRegister'

const page = () => {
  return (
    <div className="relative w-full min-h-screen">
      <div
        className="fixed inset-0 bg-[url('/PBI.svg')] bg-cover bg-center bg-fixed"
        style={{ zIndex: -1 }}
      />
      <div className="flex min-h-screen w-full items-center justify-center p-8">
      <FormRegister />
      </div>
    </div>
  )
}

export default page