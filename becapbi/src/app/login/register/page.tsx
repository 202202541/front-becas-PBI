
import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
export default function formularioRegistro() {
	return (
		<div className="bg-[url('/fondo.png')] bg-cover bg-center bg-fixed min-h-screen py-8 ">
			<div className=" flex min-h-screen w-full items-center justify-center px-2">
				<Card className="mx-auto max-w-3xl w-full">
					<CardHeader>
						<CardTitle className="text-2xl">Registro</CardTitle>
						<CardDescription>
							Ingrese sus datos para ser registrado
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-3">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
									<Input
										id="apellidoPaterno"
										type="text"
										placeholder="apellido paterno"
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="apellidoMaterno">Apellido Materno</Label>
									<Input
										id="apellidoMaterno"
										type="text"
										placeholder="apellido materno"
										required
									/>
								</div>
							</div>
							
							
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="primerNombre">Primer Nombre</Label>
									<Input
										id="primer nombre"
										type="text"
										placeholder="primerNombre"
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="segundoNombre">Segundo Nombre</Label>
									<Input
										id="segundo nombre"
										type="text"
										placeholder="segundoNombre"
										required
									/>
								</div>
							</div>
							<div  className="grid gap-2">
									<Label htmlFor="carnet">CI</Label>
									<Input
										id="carnet"
										type="text"
										placeholder="carnet"
										required
									/>
							</div>
							<div  className="grid gap-2">
									<Label htmlFor="colegio">Colegio de Egreso</Label>
									<Input
										id="colegio"
										type="text"
										placeholder="colegio de egreso"
										required
									/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
										<Label htmlFor="gestionEgreso">Gestion de Egreso</Label>
										<Input
											id="gestionEgreso"
											type="text"
											placeholder="gestion de egreso"
											required
										/>
								</div>
								<div className="grid gap-2">
										<Label htmlFor="tipoColegio">Tipo de Colegio</Label>
										<Input
											id="tipoColegio"
											type="text"
											required
										/>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
										<Label htmlFor="sexo">Sexo</Label>
										<Input
											id="sexo"
											type="text"
											placeholder="sexo"
											required
										/>
								</div>
								<div >
										<Label htmlFor="estadoCivil">Estado Civil</Label>
										<Input
											id="estadoCivil"
											type="text"
											placeholder="estado civil"
											required
										/>
								</div>
							</div>
							<div >
									<Label htmlFor="nacionalidad">Nacionalidad</Label>
									<Input
										id="nacionalidad"
										type="text"
										placeholder="nacionalidad"
										required
									/>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="email">Email</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>
							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
								</div>
								<Input 
									id="password" 
									type="password" 
									placeholder="contraseña"
									required />
							</div>
							<div className="grid gap-1">
								<div className="flex items-center">
									<Label htmlFor="password">Porfavor confirme su contraseña</Label>
								</div>
								<div className="flex items-center">
								</div>
								<Input 
									id="passwordConfirm" 
									type="password" 
									placeholder="contraseña"
									required />
							</div>
							<Button type="submit" className="w-full">
								Login
							</Button>
							{/* <Button variant="outline" className="w-full">
								Login with Google
							</Button> */}
						</div>
					</CardContent>
				</Card>
			</div>
		</div>
	)
}





// import React from 'react'
// import { Input } from '@/components/ui/input'
// import { Button } from '@/components/ui/button'
// import { Label } from '@/components/ui/label'
// import { DatePickerDemo } from './DatePickerDemo';
// function FormularioRegistro() {
//   return (
//     <div className="bg-[url('/fondo.png')] text-white flex items-center justify-center flex-col p-8 rounded-lg shadow-lg min-h-screen">
//       <div className='bg-[#16202a] text-white flex items-center justify-center flex-col p-8 rounded-lg shadow-lg'>
//         <div className='my-4'>
//             <h1 className='text-3xl font-semibold '> Registro</h1>
//             <p className='mt-2 text-xs text-slate-400'>
//                 {' '}
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, excepturi.
//             </p>
//         </div>

//         <form action="">
//           <div className="flex items-center mb-4">
//             <Label htmlFor='apellido' className="mr-2">
//                             Apellido paterno
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent mr-2'  
//             />

//             <Label htmlFor='apellido' className="mr-2">
//                             Apellido Materno
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent'  
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <Label htmlFor='nombre' className="mr-2">
//                             Primer nombre
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent mr-2'  
//             />

//             <Label htmlFor='nombre' className="mr-2">
//                             Segundo nombre
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent'  
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <Label htmlFor='ci' className="mr-2">
//                             CI
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent mr-2'  
//             />

//             <Label htmlFor='nombre' className="mr-2">
//                             Fecha de Nacimiento
//             </Label>
//             {/* <Input type='text'
//                   className='mt-2 mb-4 bg-transparent'  
//             /> */}
//             <DatePickerDemo/>
//           </div>
					
//           <div className="flex items-center mb-4">

//             <Label htmlFor='sexo' className="mr-2">
//               Sexo
//             </Label>
//             <select
//               id='sexo'
//               className='mt-2 mb-4 bg-transparent mr-2 text-white border border-gray-400 rounded p-2' 
//             >
//               <option value="" disabled selected>
//                 Selecciona
//               </option>
//               <option value="femenino">Femenino</option>
//               <option value="masculino">Masculino</option>
//             </select>

//             <Label htmlFor='sexo' className="mr-2">
//               Estado civil
//             </Label>
//             <select
//               id='sexo'
//               className='mt-2 mb-4 bg-transparent mr-2 text-white border border-gray-400 rounded p-2' 
//             >
//               <option value="" disabled selected>
//                 Selecciona
//               </option>
//               <option value="femenino">Soltero</option>
//               <option value="masculino">Casado</option>
//               <option value="masculino">Viudo</option>
//               <option value="masculino">Divorciado</option>
//             </select>
//           </div>

//           <div className="flex items-center mb-4">
//             <Label htmlFor='nombre' className="mr-2">
//                             Nombre de Colegio
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent mr-2'  
//             />

//             <Label htmlFor='nombre' className="mr-2">
//                             GestionEgreso Colegio
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent'  
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <Label htmlFor='nombre' className="mr-2">
//                             Tipo de Colegio
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent mr-2'  
//             />

//             <Label htmlFor='nombre' className="mr-2">
//                             Nacionalidad
//             </Label>
//             <Input type='text'
//                   className='mt-2 mb-4 bg-transparent'  
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <Label htmlFor='email' className="mr-2">
//                             Correo
//             </Label>
//             <Input type='email'
//                     className='mt-2 mb-4 bg-transparent l' 
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <Label htmlFor='email' className="mr-2">
//                             Password
//             </Label>
//             <Input type='password'
//                     className='mt-2 mb-4 bg-transparent ' 
//             />
//           </div>

//           <div className="flex items-center mb-4">
//             <Label htmlFor='confirmPassword' className="mr-2">
//                             Confirmar password
//             </Label>
//             <Input type='confirmPassword'
//                     className='mt-2 mb-4 bg-transparent ' 
//             />
//           </div>
					
//           <Button>
//             Registrar
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default FormularioRegistro