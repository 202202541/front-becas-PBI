import React from 'react'
import UserLogin from '../components/UserLogin'

const Login = () => {
  return (
    <div className="relative h-screen bg-[url('/PBI.svg')] bg-cover bg-center">
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-customRed">Bienvenido Al</h2>
          <h2 className="text-5xl font-semibold text-customRed">Sistema de</h2>
          <h2 className="text-5xl font-semibold text-customRed">Becas <span className="text-customBlue">PBI</span>
          </h2>
        </div>
        <div className="w-full max-w-md">
          <UserLogin />
        </div>
      </div>
    </div>
  )
}
export default Login