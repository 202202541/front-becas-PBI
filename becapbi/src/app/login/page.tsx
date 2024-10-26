import React from 'react'
import { Button } from '@/components/ui/button'
// import { FcGoogle } from "react-icons/fc";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

function Login() {
  return (
    <div className="bg-[#26313c] h-screen flex items-center justify-center p-1 h-screen flex items-center justify-center p-1 bg-[url('/fondo.png')] bg-cover bg-center min-h-screen">
            <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-8 rounded-lg shadow-lg'>
                <div className='my-4'>
                    <h1 className='text-3xl font-semibold'>Login</h1>
                    <p className='mt-2 text-xs text-slate-400'>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, excepturi.
                    </p>
                </div>

                <form >
                    {/* <Button className='flex mb-4 items-center w-full gap-4 px-12 bg-trasparent rounded-full'
                             variant="outline"
                            
                             >
                        <FcGoogle/>
                        <p>Iniciar con google</p>
                    </Button> */}
                    <Label htmlFor='email'>
                        Email
                    </Label>
                    <Input className='mt-2 mb-4 bg-transparent rounded-full'
                            type='email' 
                            id='email' 
                            placeholder='Email'
                    />

                    <Label htmlFor='email'>
                        Password
                    </Label>
                    <Input className='mt-2 mb-4 bg-transparent rounded-full'
                            type='password' 
                            id='password' 
                            placeholder='Password'
                    />

                    <Button type='submit' className='w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700'>
                        Login
                    </Button>
                    
                    <Button type='submit' className='w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700'>
                        Registrarse
                    </Button>
                </form>
            </div>
        
    </div>
  )
}

export default Login