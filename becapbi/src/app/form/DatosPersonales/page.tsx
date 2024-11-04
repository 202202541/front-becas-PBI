"use client"

import React from "react"
import NavBar from "@/app/components/Navbar"
import FotoCargada from "@/app/components/FotoCargada"
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
	SelectValue,
} from "@/components/ui/select"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"


function DatosPersonales() {

	const [date, setDate] = React.useState<Date | undefined>(new Date())


	return (
		<div className="relative w-full min-h-screen">
			<NavBar />
			<div className="fixed inset-0 bg-whait bg-cover bg-center bg-fixed"
				style={{ zIndex: -1 }}>

			</div>
			<div className=" flex min-h-screen w-full items-center justify-center p-8">
				<Card className="mx-auto max-w-6xl w-full">
					<CardHeader className="flex flex-col items-center justify-center text-center">
						<CardTitle className="text-2xl">
							SOLICITUD DE BECA PBI-2024
						</CardTitle>
						<CardDescription>
							Ingrese sus datos para el formulario
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid gap-3">
							<div className="grid grid-cols-2 gap-4">
								<div className="grid grid-rows-2 gap-1">
									<div className="grid grid-cols-2 gap-6">
										<div>
											<Label htmlFor="apellidoPaterno">Apellido Paterno</Label>
											<Input
												id="apellidoPaterno"
												type="text"
												placeholder="apellido paterno"
												required
											/>
										</div>
										<div>
											<Label htmlFor="apellidoMaterno">Apellido Materno</Label>
											<Input
												id="apellidoMaterno"
												type="text"
												placeholder="apellido materno"
												required
											/>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<Label htmlFor="primerNombre">Primer Nombre</Label>
											<Input
												id="primerNombre"
												type="text"
												placeholder="primer nombre"
												required
											/>
										</div>
										<div>
											<Label htmlFor="segundoNombre">Segundo Nombre</Label>
											<Input
												id="segundoNombre"
												type="text"
												placeholder="segundo nombre"
												required
											/>
										</div>
									</div>
									<div className="grid grid-rows-2 gap-2">
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
											<Label htmlFor="carnet">CI Exp</Label>
											<Input
												id="carnet"
												type="text"
												placeholder="CI expedito"
												required
											/>
										</div>
									</div>
								</div>
								<FotoCargada />
							</div>
							<div className="grid grid-cols-2 gap-4">

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
									<Select>
										<SelectTrigger>
											<SelectValue placeholder="sexo" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="masculino">Masculino</SelectItem>
											<SelectItem value="femenino">Femenino</SelectItem>
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
											<SelectItem value="soltero">Soltero(a)</SelectItem>
											<SelectItem value="casado">Casado(a)</SelectItem>
											<SelectItem value="divorciado">Divorciado(a)</SelectItem>
											<SelectItem value="viudo">Viudo(a)</SelectItem>
											<SelectItem value="unido">Unido(a) de hecho</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div>
								<Label htmlFor="nacionalidad">Fecha de Nacimiento</Label>
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
								</div>
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
											<SelectItem value="Bolivia">Bolivia</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="col-span-1">
									<Label htmlFor="Provincia">Provincia</Label>
									<Select>
										<SelectTrigger >
											<SelectValue placeholder="Provincia" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="soltero">Bolivia</SelectItem>
										</SelectContent>
									</Select>
								</div>
								<div className="col-span-1">
									<Label htmlFor="Departamento">Departamento</Label>
									<Select>
										<SelectTrigger >
											<SelectValue placeholder="Departamento" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="soltero">Bolivia</SelectItem>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="grid gap-2">
								<Label htmlFor="email">Correo Electronico</Label>
								<Input
									id="email"
									type="email"
									placeholder="m@example.com"
									required
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
								<Input
									id="organizacion"
									type="text"
									placeholder="organizacion social patrocinadora"
									required
								/>
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

			<Pagination>
				<PaginationContent>
					<PaginationItem>
						<PaginationPrevious href="#" />
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/form/DatosPersonales">
							1
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="/form/DatosFamiliares" isActive>
							2
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationLink href="AntecedentesAcademicos">
							3
						</PaginationLink>
					</PaginationItem>
					<PaginationItem>
						<PaginationEllipsis />
					</PaginationItem>
					<PaginationItem>
						<PaginationNext href="#" />
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div >
	)
}


export default DatosPersonales;