"use client"

import React, { useEffect, useState } from "react"
import FotoCargada from "@/app/components/FotoCargada"
// import { Button } from "@/components/ui/button"
// import { cn } from "@/lib/utils"
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
import { TypographyH1 } from "@/components/ui/TypographyH1"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "@/app/components/formProvider"
import { useAuth } from "@/context/AuthContext"
import { Datos, DatosPr, Datos_departamento, Datos_provincia, Oferta_Fac_Carr} from '@/Models/ClasificadoresPostula'
import { AxiosServiceClasificadoresPostula } from "@/lib/Services/axios.service"
import { number } from "zod"
import { id } from "date-fns/locale"


function DatosPersonales() {

	//const [date, setDate] = React.useState<Date | undefined>(new Date())
	const form = useForm();
	console.log("Formulario en DatosPersonales:", form);

	   const { token,  } = useAuth()
	
		const [tipoColegio, setTipoColegio] = useState<Datos[]>([])
		const [departamento, setDepartamento] = useState<Datos[]>([])
		const [provincia, setProvincia] = useState <Datos_departamento[]>([])
		const [municipio, setMunicipio] = useState <Datos_provincia[]>([])
		const [organizacionSocial, setOrganizacionSocial] = useState <Datos[]>([])
	  
		const [selectedDepartamento, setSelectedDepartamento] = useState(null);
		const [filteredProvincias, setFilteredProvincias] = useState([]);
		const [selectedProvincia, setSelectedProvincia] = useState(null);
		const [filteredMunicipios, setFilteredMunicipios] = useState([]);

		useEffect(() => {
		  const fetchInitialData = async () => {
			try{
			const responseClasificadores = await AxiosServiceClasificadoresPostula(token)
			  const clasificadores = responseClasificadores.data
			  console.log(clasificadores)
			  setTipoColegio(clasificadores.lista_tipo_colegio)
			  setDepartamento(clasificadores.lista_departamento)
			  setProvincia(clasificadores.lista_provincia)
			  setMunicipio(clasificadores.lista_municipio)
			  setOrganizacionSocial(clasificadores.lista_organizacion_social)
			}catch(error){
			  console.log(error)
			}
			}
			fetchInitialData();
		  
		},[token]);
		
		const handleDepartamentoChange = (departamentoId: number) => {
			setSelectedDepartamento(departamentoId);
	
			const provinciasFiltradas = provincia.filter(
				(item) => item.departamento_id === departamentoId
			);
			setFilteredProvincias(provinciasFiltradas);
	
		
		};
		
		const handleProvinciaChange = (provinciaId: number) => {
			setSelectedProvincia(provinciaId);
		
			const municipiosFiltrados = municipio.filter(
				(item) => item.provincia_id === provinciaId
			);
			setFilteredMunicipios(municipiosFiltrados);
		};

	return (
		<div className="relative w-full min-h-screen p-2">
			<div className="fixed inset-0 bg-whait bg-cover bg-center bg-fixed"
				style={{ zIndex: -1 }}>

			</div>
			<div className=" flex min-h-screen w-full items-center justify-center p-2">
				<Card className="mx-auto max-w-6xl w-full">
					<CardHeader className="flex flex-col items-center justify-center text-center">
						<CardTitle className="text-2xl">
							Datos Personales
						</CardTitle>
						<CardDescription className=" text-left p-4">
							Ingrese sus datos para el formulario
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-2">
							<div className="flex flex-wrap lg:flex-nowrap gap-4">
								{/* <div className="flex w-full lg:w-1/2 justify-center items-center order-1 lg:order-2">
									<FotoCargada />
								</div> */}
								<div className="flex flex-col w-full lg:w-1/2 gap-4 order-2 lg:order-1">
									<div className="flex gap-6">
										<div className="flex flex-col flex-1 gap-2">
											<Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
											<Input defaultValue={form.apellido1} readOnly />
										</div>
										<div className="flex flex-col flex-1 gap-2">
											<Label htmlFor="apellidoMaterno">Apellido Materno</Label>
											<Input defaultValue={form.apellido2} readOnly />
										</div>
									</div>
									<div className="flex gap-6">
										<div className="flex flex-col flex-1 gap-2">
											<Label htmlFor="primerNombre">Primer Nombre</Label>
											<Input defaultValue={form.nombre1} readOnly />
										</div>
										<div className="flex flex-col flex-1 gap-2">
											<Label htmlFor="segundoNombre">Segundo Nombre</Label>
											<Input defaultValue={form.nombre2} readOnly />
										</div>
									</div>
									<div className="flex flex-col gap-4">
										<div className="flex flex-col gap-2">
											<Label htmlFor="carnet">CI</Label>
											<Input defaultValue={form.ci} readOnly />
										</div>
										<div className="flex flex-col gap-2">
											<Label htmlFor="carnetExp">CI Exp</Label>
											<Input id="carnetExp" type="text" placeholder="CI expedito" required />
										</div>
										<div className="flex flex-col gap-2">
											<Label htmlFor="colegio">Colegio de Egreso</Label>
											<Input defaultValue={form.nombre_colegio} readOnly />
										</div>
									</div>
								</div>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="gestionEgreso">Gestion de Egreso</Label>
									<Input
										defaultValue={form.gestion_egreso_colegio}
										readOnly
									/>
								</div>
								{/* recuperar los datos necesarios para q esto funcione */}
								<div className="grid gap-2">
									<Label htmlFor="tipoColegio">Tipo de Colegio</Label>
									<Input
										id="tipoColegio"
										type="text"
										required
										value={
											tipoColegio.find((item) => item.id === form.tipo_colegio_id)?.descripcion || ""
										}
										readOnly
									/>
								</div>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<Label htmlFor="sexo">Sexo</Label>
									<Input
										defaultValue={form.sexo}
										readOnly
									/>
								</div>
								<div >
									<Label htmlFor="estadoCivil">Estado Civil</Label>
									<Input
										defaultValue={form.estado_civil}
										readOnly
									/>
								</div>
							</div>
							<div>
								<Label htmlFor="nacionalidad">Fecha de Nacimiento</Label>
								<Input
									defaultValue={form.fecha_nacimiento}
									readOnly
								/>
								{/* pregutar si es editable
									<div className="w-auto ">
									 <Popover>
										<PopoverTrigger asChild>
											<Button
												variant={"outline"}
												className={cn(
													"max-w-[500px] justify-start text-left font-normal",
													!date && "text-muted-foreground"
												)}
											>
												<CalendarIcon className="h-4 w-4" />
												{date ? format(date, "PPP") : <span>Pick a date</span>}
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
								</div>*/}
							</div>
							<Label className="text-lg" > Lugar de Nacimiento:</Label>
							<div className="grid grid-cols-3 gap-4">
								<div className="col-span-1">
									<Label htmlFor="Municipio">Municipio</Label>
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="Municipio" />
										</SelectTrigger>
										<SelectContent>
											{filteredMunicipios.map((item) => (
												<SelectItem value={item.id.toString()} key={item.id}>
													{item.descripcion}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>

								<div className="col-span-1">
									<Label htmlFor="Provincia">Provincia</Label>
									<Select onValueChange={(value) => handleProvinciaChange(Number(value))}>
										<SelectTrigger>
											<SelectValue placeholder="Provincia" />
										</SelectTrigger>
										<SelectContent>
											{filteredProvincias.map((item) => (
												<SelectItem value={item.id.toString()} key={item.id}>
													{item.descripcion}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>



								<div className="col-span-1">
									<Label htmlFor="Departamento">Departamento</Label>
									<Select onValueChange={(value) => handleDepartamentoChange(Number(value))}>
										<SelectTrigger>
											<SelectValue placeholder="Departamento" />
										</SelectTrigger>
										<SelectContent>
											{departamento.map((item) => (
												<SelectItem value={item.id.toString()} key={item.id}>
													{item.descripcion}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Correo Electronico</Label>
								<Input
									defaultValue={form.email}
									readOnly
								/>
							</div>
							<div className="grid grid-cols-4 gap-4">
								<div className="col-span-3">
									<Label htmlFor="vivienda">Calle/Avenida/Parque/Pasaje</Label>
									<Input
										id="vivienda"
										type="text"
										placeholder="Calle/Avenida/Parque/Pasaje"
										required
									/>
								</div>
								<div className="col-span-1">
									<Label htmlFor="nro">Nro</Label>
									<Input
										id="nro"
										type="text"
										placeholder="nro"
										required
									/>
								</div>
							</div>
							<div >
								<Label htmlFor="telefono">Telefono - Celular</Label>
								<Input
									id="telefono"
									type="text"
									placeholder="telefono - celular"
									required
								/>
							</div>
							<div >
								<Label htmlFor="organizacion">Organizacion social patrocinadora</Label>
								<Select>
									<SelectTrigger>
										<SelectValue placeholder= "Organizacion"/>
									</SelectTrigger>
									<SelectContent>
										{organizacionSocial.map((item) =>(
											<SelectItem value={item.nombre} key={item.id}>
												{item.nombre}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
							</div>
							<div >
								<Label htmlFor="organizacion">Otra Referencia</Label>
								<Input
									id="organizacion"
									type="text"
									placeholder="organizacion social patrocinadora"
									required
								/>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</div >
	)
}


export default DatosPersonales;