"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AxiosServiceCiclo , AxiosServiceLogin} from '@/lib/Services/axios.service';

interface RespuestaValida {
    activo: boolean;
}

const Login : React.FC = () => {
    const router = useRouter();
    const [activo, setActivo] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const validarHabilitado = async () => {
            try {
                const respuesta = await AxiosServiceCiclo()
                const datos = respuesta.data as RespuestaValida;
                console.log("Respuesta del ciclo formulario ", datos)
                setActivo(datos.activo);
            } catch (error) {
                console.error("Error al verificar la disponibilidad: ", error);
                setErrorMessage("Error al verificar la disponibilidad, intenta más tarde.");
            }
        };
        validarHabilitado();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null);
        console.log({username, password})
        if (!username || !password) {
            setErrorMessage("Por favor, ingrese ambos campos.");
            return;
        }
        
        try {
            const respuesta= await AxiosServiceLogin({username, password})
            console.log("respuesta de login" , respuesta);
            const token = respuesta.data.token;
            console.log("token de autentificacion: ",token)
            router.push('/inicio')
        } catch (error) {
            console.error("Error durante el inicio de sesión: ", error);
            setErrorMessage("Error durante el inicion de sesion. verifique sus credenciales")
        }
    };
    
 

    return (
        <div className="bg-[#26313c] h-screen flex items-center justify-center p-1 bg-[url('/fondo.png')] bg-cover bg-center">
            <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-7 w-96 rounded-lg shadow-lg'>
                <div className='my-4'>
                    <h1 className='text-3xl font-semibold'>Login</h1>
                    <p className='mt-2 text-xs text-slate-400'>Iniciar sesión o registrarse</p>
                </div>

                
                {errorMessage && (
                    <div className="text-red-500 bg-red-100 p-3 rounded mb-4">
                        <strong>Error:</strong> {errorMessage}
                    </div>
                )}

                <form onSubmit={handleLogin}>
                    <Label htmlFor='username'>Usuario</Label>
                    <Input 
                        className='mt-2 mb-4 bg-transparent rounded-full'
                        type='text'
                        id='username'
                        placeholder='usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Label htmlFor='password'>Contraseña</Label>
                    <Input 
                        className='mt-2 mb-4 bg-transparent rounded-full'
                        type='password'
                        id='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button 
                        type="submit"
                        className="w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700"
                    >
                        Login
                    </Button>

                    <Button 
                        type='button'
                        className='w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700'
                        onClick={() => router.push('/register')}
                        disabled={!activo}
                    >
                        Registrarse
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Login;
