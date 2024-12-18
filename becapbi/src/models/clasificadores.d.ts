export interface IClasificadoresCrea {
	lista_pais: IDatos[]
	lista_tipo_colegio: IDatos[]
	lista_sexo: IDatosP
	lista_estado_civil: IDatosP
}

export interface IDatos {
	id: number
	descripcion: string
	sigla: string
}

export interface IDatosP {
	[key: string]: string
}

export interface IOption {
	value: string
	label: string
}
