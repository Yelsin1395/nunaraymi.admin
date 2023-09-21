export interface IUbigeo {
	name?: string | null
	departament: string
	province: string
	district: string
	direction: string
	referenceNotes?: string | null
	latitude: string
	longitude: string
	default?: boolean
}

export interface ICurrency {
	code: string | any
	symbol: string | any
}

export interface IIdentificationDocument {
	type: string
	number: string
}
