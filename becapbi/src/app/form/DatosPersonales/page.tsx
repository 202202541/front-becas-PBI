"use client"

import React from "react"
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
// import {
// 	Popover,
// 	PopoverContent,
// 	PopoverTrigger,
// } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Calendar } from "@/components/ui/calendar"
// import { format } from "date-fns"
// import { Calendar as CalendarIcon } from "lucide-react"
import { useForm } from "@/app/components/formProvider"


function DatosPersonales() {

	//const [date, setDate] = React.useState<Date | undefined>(new Date())
 	const form = useForm();
 	console.log("Formulario en DatosPersonales:", form);


	//tipo colegio

	return (
		<div className="relative w-full min-h-screen">
			<div className="fixed inset-0 bg-whait bg-cover bg-center bg-fixed"
				style={{ zIndex: -1 }}>

			</div>
			<div className=" flex min-h-screen w-full items-center justify-center p-2">
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
												defaultValue={form.apellido1}
												readOnly
											/>
										</div>
										<div>
											<Label htmlFor="apellidoMaterno">Apellido Materno</Label>
											<Input
												defaultValue={form.apellido2}
												readOnly
											/>
										</div>
									</div>
									<div className="grid grid-cols-2 gap-6">
										<div>
											<Label htmlFor="primerNombre">Primer Nombre</Label>
											<Input
												defaultValue={form.nombre1}
												readOnly
											/>
										</div>
										<div>
											<Label htmlFor="segundoNombre">Segundo Nombre</Label>
											<Input
												defaultValue={form.nombre1}
												readOnly
											/>
										</div>
									</div>
									<div className="grid grid-rows-2 gap-2">
										<div className="grid gap-2">
											<Label htmlFor="carnet">CI</Label>
											<Input
												defaultValue={form.ci}
												readOnly
											/>
										</div>
										{/* ver  */}
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
									defaultValue={form.nombre_colegio}
									readOnly
								/>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="grid gap-2">
									<Label htmlFor="gestionEgreso">Gestion de Egreso</Label>
									<Input
										defaultValue={form.gestion_egreso_colegio}
										readOnly
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
		</div >
	)
}


export default DatosPersonales;