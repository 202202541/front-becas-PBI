
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'

import "../style.css"
import { DatePickerDemo } from './DatePickerDemo';
function FormularioRegistro() {

  return (
    <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-8 rounded-lg shadow-lg fondo min-h-screen'>
      <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-8 rounded-lg shadow-lg'>
        <div className='my-4'>
            <h1 className='text-3xl font-semibold '> Registro</h1>
            <p className='mt-2 text-xs text-slate-400'>
                {' '}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, excepturi.
            </p>
        </div>

        <form action="">
          <div className="flex items-center mb-4">
            <Label htmlFor='apellido' className="mr-2">
                            Apellido paterno
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent mr-2'  
            />

            <Label htmlFor='apellido' className="mr-2">
                            Apellido Materno
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent'  
            />
          </div>

          <div className="flex items-center mb-4">
            <Label htmlFor='nombre' className="mr-2">
                            Primer nombre
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent mr-2'  
            />

            <Label htmlFor='nombre' className="mr-2">
                            Segundo nombre
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent'  
            />
          </div>

          <div className="flex items-center mb-4">
            <Label htmlFor='ci' className="mr-2">
                            CI
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent mr-2'  
            />

            <Label htmlFor='nombre' className="mr-2">
                            Fecha de Nacimiento
            </Label>
            {/* <Input type='text'
                  className='mt-2 mb-4 bg-transparent'  
            /> */}
            <DatePickerDemo/>
          </div>
          
          <div className="flex items-center mb-4">
            <Label htmlFor='nombre' className="mr-2">
                            Sexo
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent mr-2'  
            />

            <Label htmlFor='nombre' className="mr-2">
                            Estado Civil
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent'  
            />
          </div>

          <div className="flex items-center mb-4">
            <Label htmlFor='nombre' className="mr-2">
                            Nombre de Colegio
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent mr-2'  
            />

            <Label htmlFor='nombre' className="mr-2">
                            GestionEgreso Colegio
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent'  
            />
          </div>

          <div className="flex items-center mb-4">
            <Label htmlFor='nombre' className="mr-2">
                            Tipo de Colegio
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent mr-2'  
            />

            <Label htmlFor='nombre' className="mr-2">
                            Nacionalidad
            </Label>
            <Input type='text'
                  className='mt-2 mb-4 bg-transparent'  
            />
          </div>

          <div className="flex items-center mb-4">
            <Label htmlFor='email' className="mr-2">
                            Correo
            </Label>
            <Input type='email'
                    className='mt-2 mb-4 bg-transparent l' 
            />
          </div>

          <div className="flex items-center mb-4">
            <Label htmlFor='email' className="mr-2">
                            Password
            </Label>
            <Input type='password'
                    className='mt-2 mb-4 bg-transparent ' 
            />
          </div>

          <div className="flex items-center mb-4">
            <Label htmlFor='confirmPassword' className="mr-2">
                            Confirmar password
            </Label>
            <Input type='confirmPassword'
                    className='mt-2 mb-4 bg-transparent ' 
            />
          </div>
          
          <Button>
            Registrar
          </Button>
        </form>
      </div>
    </div>
  )
}

export default FormularioRegistro