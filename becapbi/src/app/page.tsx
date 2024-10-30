"use client"
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link  from "next/link"

interface RespuestaValida{
    activo: boolean;
}

const Login: React.FC = () => {

    const[activo, setActivo] = useState<boolean>(false);
    
    useEffect(() => {
        const validarHabilitado = async () =>{
            try{
                const respuesta = await fetch('http://sispos.dev.umss.net/api/postulacion/ciclo-formulario');
                const datos: RespuestaValida = await respuesta.json();

                setActivo(datos.activo);
            }catch (error){
                console.error("error al verificar la dispoopnivilidad: ", error)
            }
        };
        validarHabilitado();
    },[])

    
  return (
    <div className="bg-[#26313c] h-screen flex items-center justify-center p-1 h-screen flex items-center justify-center p-1 bg-[url('/fondo.png')] bg-cover bg-center min-h-screen">
            <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-7 w-96 rounded-lg shadow-lg'>
                <div className='my-4'>
                    <h1 className='text-3xl font-semibold'>Login</h1>
                    <p className='mt-2 text-xs text-slate-400'>
                        {' '}
                        Iniciar Secion o regiostrarse
                    </p>
                </div>

                <form >
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

                    <Link href="/inicio">
                      <Button type='submit' className='w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700'>
                          Login
                      </Button>
                    </Link>

                   
                <Button type='button' 
                        className={`w-full mt-6 $ {activo ? ' bg-indigo-600 rounded-full hover:bg-indigo-700':'bg-gray-500 cursor-not-allowed'}`}
                        disabled = {!activo}
                        onClick={()=>{<Link href='/register'/>}}
                >
                    Registrarse
                </Button>
                </form>
            </div>
        
    </div>
  )
}

export default Login