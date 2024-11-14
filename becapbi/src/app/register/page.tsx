"use client"

import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {Card,CardContent,CardDescription,CardHeader,CardTitle} from "@/components/ui/card"
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue} from "@/components/ui/select"
import {Popover,PopoverContent,PopoverTrigger} from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { useRouter } from 'next/navigation';
import { AxiosServiceClasificadoresCrea , AxiosServiceCreaCuenta} from "@/lib/Services/axios.service"

interface Datos {
	id: number;
	descripcion: string;
	sigla: string;
}

interface DatosP {
	[key: string]: string;
}

export interface FormData {
	apellido1: string;
	apellido2: string;
	nombre1: string;
	nombre2: string;
	ci: string;
	pais_nacionalidad_id: number; 
	fecha_nacimiento: string;
	sexo: string;
	estado_civil: string;
	email: string;
	telefono_celular: string;
	nombre_colegio: string;
	gestion_egreso_colegio: number;
	tipo_colegio_id: number; 
}

interface ClasificadoresData {
	lista_pais: Datos[];
	lista_tipo_colegio: Datos[];
	lista_sexo: DatosP;
	lista_estado_civil: DatosP;
  }
  

const FormularioRegistro: React.FC = () => {

	const router= useRouter();

	const [date, setDate] = React.useState<Date | undefined>(new Date())
	const [descripcionPaises, setDescripcionPaises] = useState<Datos[]>([]);
	const [tipoColegio, setTipoColegio] = useState<Datos[]>([]);
	const [estadoCivil, setEstadoCivil] = useState<DatosP>({});
	const [sexos, setSexos] = useState<DatosP>({});
	const [errorM, setErrorM]= useState<string | null>(null);

	const [formData, setFormData] = useState<FormData>({
		"apellido1":"",
		"apellido2":"",
		"nombre1":"",
		"nombre2":"",
		"ci":"",
		"pais_nacionalidad_id": 0 ,
		"fecha_nacimiento":"",
		"sexo":"",
		"estado_civil": "",
		"email":"",
		"telefono_celular":"",
		"nombre_colegio":"",
		"gestion_egreso_colegio":0,
		"tipo_colegio_id":0,
	});

	useEffect(() => {
		const fetchDatos = async () => {
			try {
				const respuesta = await AxiosServiceClasificadoresCrea();
				const datos = respuesta.data as ClasificadoresData;
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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const {name, value} = e.target;
		setFormData({...formData, [name]: value});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		const preparedData = {
			...formData,
			fecha_nacimiento: format(new Date(formData.fecha_nacimiento), "yyyy-MM-dd"),
			tipo_colegio_id : formData.tipo_colegio_id,
			pais_nacionalidad_id: formData.pais_nacionalidad_id,
			sexo: formData.sexo,
			estado_civil : formData.estado_civil,
		}

		console.log("Validando", preparedData);

		try{

			const respuesta = await AxiosServiceCreaCuenta(preparedData);

			console.log('Respuesta exitosa: ', respuesta.data);

			alert("Cuenta creada exitosaemnte")

			//router.push('../page.tsx');

		}catch(error){
			console.error("Error al crear la cuenta: " , error);
			alert("hubo un error al enviar el formulario. intentalo nuevamente.");
			setErrorM("Hubo un error al enviar el formulario. Inténtalo nuevamente.");
		}

	};



	return (
		<div className="relative w-full min-h-screen" >
			{errorM &&(
				<div className="text-red-500 bg-red-100 p-3 rounded mb-4">
					<strong>Error:</strong>{errorM}
				</div>
			)}
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

						<form onSubmit={handleSubmit} className="grid gap-3">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
									<Input
										id="apellido1"
										name="apellido1"
										type="text"
										placeholder="apellido paterno"
										required
										onChange={handleChange}
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="apellidoMaterno">Apellido Materno</Label>
									<Input
										id="apellido2"
										name="apellido2"
										type="text"
										placeholder="apellido materno"
										required
										onChange={handleChange}
									/>
								</div>
							</div>


							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="primerNombre">Primer Nombre</Label>
									<Input
										id="nombre1"
										name="nombre1"
										type="text"
										placeholder="primer nombre"
										required
										onChange={handleChange}
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="segundoNombre">Segundo Nombre</Label>
									<Input
										id="nombre2"
										name="nombre2"
										type="text"
										placeholder="segundo nombre"
										required
										onChange={handleChange}
									/>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="carnet">CI</Label>
								<Input
									id="ci"
									name="ci"
									type="text"
									placeholder="carnet"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="colegio">Colegio de Egreso</Label>
								<Input
									id="nombre_colegio"
									name="nombre_colegio"
									type="text"
									placeholder="colegio de egreso"
									required
									onChange={handleChange}
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="gestionEgreso">Gestion de Egreso</Label>
									<Input
										id="gestion_egreso_colegio"
										name="gestion_egreso_colegio"
										type="text"
										placeholder="gestion de egreso"
										required
										onChange={handleChange}
									/>
								</div>
								<div className="grid gap-2">
									<Label htmlFor="tipo_colegio_id">Tipo de colegio</Label>
									<Select onValueChange={(value) => setFormData({...formData, tipo_colegio_id:Number(value)})}>
										<SelectTrigger >
											<SelectValue placeholder="Tipó de colegio" />
										</SelectTrigger>
										<SelectContent>
											{tipoColegio.map((item) => (
												<SelectItem value={item.id.toString()} key={item.id}>
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
									<Select onValueChange={(value) => setFormData({...formData,sexo : value})}>
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
									<Select onValueChange={(value) => setFormData({...formData, estado_civil:value})}>
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
									<Label htmlFor="fecha_nacimiento">Fecha de Nacimiento</Label>
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
												{date ? format(date, "dd/MM/yyyy") : <span>Seleccionar fecha</span>}
											</Button>
										</PopoverTrigger>
										<PopoverContent className="w-auto p-0">
											<Calendar
												mode="single"
												captionLayout="dropdown-buttons"
												fromYear={1990}
												toYear={2024}
												selected={date}
												onSelect={(date) =>{
													setDate(date);
													setFormData({...formData, fecha_nacimiento: date ? format(date,"yyyy-MM-dd"): ""});
												}}
												initialFocus
											/>
										</PopoverContent>
									</Popover>
								</div>
								<div >
									<Label htmlFor="pais_nacionalidad_id">Nacionalidad</Label>
									<Select onValueChange={(value) => setFormData({...formData, pais_nacionalidad_id: Number(value)})}>
										<SelectTrigger >
											<SelectValue placeholder="Nacionalidad" />
										</SelectTrigger>
										<SelectContent>
											{descripcionPaises.map((item) => (
												<SelectItem value={item.id.toString()} key={item.id}>
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
									onChange={(e) =>setFormData({...formData, email : e.target.value})}
								/>
							</div>

							<div>
							<Button type="submit" className="w-full" onClick={handleSubmit}>
								Registrarse
							</Button>
						</div>
						</form>
						
					</CardContent>
				</Card>
			</div>
		</div>
	)
}


export default FormularioRegistro;