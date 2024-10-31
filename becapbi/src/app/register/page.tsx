"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
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
	SelectValue
} from "@/components/ui/select"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

interface Datos {
	id: number;
	descripcion: string;
	sigla: string;
}

interface DatosP {
	[key: string]: string;
}

const FormularioRegistro: React.FC = () => {

	const [date, setDate] = React.useState<Date | undefined>(new Date())
	const [descripcionPaises, setDescripcionPaises] = useState<Datos[]>([]);
	const [tipoColegio, setTipoColegio] = useState<Datos[]>([]);
	const [estadoCivil, setEstadoCivil] = useState<DatosP>({});
	const [sexos, setSexos] = useState<DatosP>({});

	useEffect(() => {
		const fetchDatos = async () => {
			try {
				const respuesta = await fetch('http://sispos.dev.umss.net/api/postulacion/clasificadores-crea');
				const datos = await respuesta.json();
				console.log(datos);
				console.log(datos.lista_sexos);

				setDescripcionPaises(datos.lista_pais);
				setTipoColegio(datos.lista_tipo_colegio);
				setSexos(datos.lista_sexo);
				setEstadoCivil(datos.lista_estado_civil);

			} catch (error) {
				console.error("Error al obtener los nombres: ", (error as Error).message);
			}
		}
		fetchDatos();
	}, []);



	return (
		<div className="relative w-full min-h-screen">
			<div className="fixed inset-0 bg-[url('/fondo.png')] bg-cover bg-center bg-fixed"
				style={{ zIndex: -1 }}>

			</div>
			<div className=" flex min-h-screen w-full items-center justify-center p-8">
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
										id="primerNombre"
										type="text"
										placeholder="primer nombre"
										required
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="segundoNombre">Segundo Nombre</Label>
									<Input
										id="segundoNombre"
										type="text"
										placeholder="segundo nombre"
										required
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="carnet">CI</Label>
								<Input
									id="carnet"
									type="text"
									placeholder="carnet"
									required
								/>
							</div>
							<div className="grid gap-2">
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
									<Label htmlFor="Tipo de colegio">Tipo de colegio</Label>
									<Select>
										<SelectTrigger >
											<SelectValue placeholder="Tipó de colegio" />
										</SelectTrigger>
										<SelectContent>
											{tipoColegio.map((item) => (
												<SelectItem value={item.descripcion} key={item.id}>
													{item.descripcion}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<Label htmlFor="sexo">Sexo</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="sexo" />
										</SelectTrigger>
										<SelectContent>
											{Object.entries(sexos).map(([key, value]) => (
												<SelectItem value={key} key={key}>
													{value} ({key})
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
								<div >
									<Label htmlFor="estadoCivil">Estado Civil</Label>
									<Select>
										<SelectTrigger >
											<SelectValue placeholder="Estado civil" />
										</SelectTrigger>
										<SelectContent>
											{Object.entries(estadoCivil).map(([key, value]) => (
												<SelectItem value={key} key={key}>
													{value} ({key})
												</SelectItem>
											))}

										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div >
									<Label htmlFor="nacionalidad">Fecha de Nacimiento</Label>
									<Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className={cn(
													"w-[280px] justify-start text-left font-normal",
													!date && "text-muted-foreground"
												)}
											>
												<CalendarIcon className="mr-2 h-4 w-4" />
												{date ? format(date, "dd/MM/yyyy") : <span>Pick a date</span>}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0">
											<Calendar
												mode="single"
												captionLayout="dropdown-buttons"
												fromYear={1990}
												toYear={2024}
												selected={date}
												onSelect={setDate}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div >
									<Label htmlFor="Nacionalidad">Nacionalidad</Label>
									<Select>
										<SelectTrigger >
											<SelectValue placeholder="Nacionalidad" />
										</SelectTrigger>
										<SelectContent>
											{descripcionPaises.map((item) => (
												<SelectItem value={item.descripcion} key={item.id}>
													{item.descripcion}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</div>

							<div className="grid gap-2">
								<Label htmlFor="email">Correo electronico</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</div>

							{/* CREAR PASSWORD Y CONFIRMAR
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
								Registrarse
							</Button> */}

							{/* Iniciar con google */}
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


export default FormularioRegistro;