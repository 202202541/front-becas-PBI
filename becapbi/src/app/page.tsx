// src/app/login/page.tsx
"use client"; // Marca el archivo como un componente de cliente

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // Cambia la importación aquí
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface RespuestaValida {
    activo: boolean;
}

const Login: React.FC = () => {
    const router = useRouter();
    const [activo, setActivo] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const validarHabilitado = async () => {
            try {
                const respuesta = await fetch('http://sispos.dev.umss.net/api/postulacion/ciclo-formulario');
                const datos: RespuestaValida = await respuesta.json();
                //modificar datos.activo
                setActivo(datos.activo);
            } catch (error) {
                console.error("Error al verificar la disponibilidad: ", error);
            }
        };
        validarHabilitado();
    }, []);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const respuesta = await fetch(
                'http://sispos.dev.umss.net/api/postulante/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password })
                });

            if (!respuesta.ok) {
                const errorData = await respuesta.json();
                throw new Error(errorData.message || 'Error en la autenticación');
            }

            const datos = await respuesta.json();
            setToken(datos.token);
            router.push('/inicio');
        } catch (error) {
            console.error("Error durante el inicio de sesión: ", error);
        }
    };

    return (
        <div className="bg-[#26313c] h-screen flex items-center justify-center p-1 bg-[url('/fondo.png')] bg-cover bg-center">
            <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-7 w-96 rounded-lg shadow-lg'>
                <div className='my-4'>
                    <h1 className='text-3xl font-semibold'>Login</h1>
                    <p className='mt-2 text-xs text-slate-400'>Iniciar sesión o registrarse</p>
                </div>

                <form onSubmit={handleLogin}>
                    <Label htmlFor='username'>Usuario</Label>
                    <Input className='mt-2 mb-4 bg-transparent rounded-full'
                        type='text'
                        id='username'
                        placeholder='usuario'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <Label htmlFor='password'>Password</Label>
                    <Input className='mt-2 mb-4 bg-transparent rounded-full'
                        type='password'
                        id='password'
                        placeholder='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type='submit'
                        className='w-full mt-6 bg-indigo-600 rounded-full hover:bg-indigo-700'
                        disabled={!activo}
                    >
                        Login
                    </Button>

                    <Button type='button'
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
