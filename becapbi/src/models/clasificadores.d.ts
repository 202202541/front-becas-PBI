export interface IClasificadoresCrea {
	lista_pais: Datos[]
	lista_tipo_colegio: Datos[]
	lista_sexo: DatosP
	lista_estado_civil: DatosP
}

export interface IDatos {
	id: number
	descripcion: string
	sigla: string
}

export interface IDatosP {
	[key: string]: string
}
