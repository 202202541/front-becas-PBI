export interface ClasificadoresCrea {
	lista_pais: Datos[]
	lista_tipo_colegio: Datos[]
	lista_sexo: DatosP
	lista_estado_civil: DatosP
}

export interface Datos {
	id: number
	descripcion: string
	sigla: string
}

export interface DatosP {
	[key: string]: string
}

