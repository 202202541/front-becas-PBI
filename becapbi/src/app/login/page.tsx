import React from 'react'
import UserLogin from '../components/UserLogin'

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[url('/PBI.svg')] bg-cover bg-center">
      <UserLogin />
    </div>
  )
}

export default Login