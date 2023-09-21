export const INVOICE = {
	TYPES: ['bill', 'ticket', 'full'],
}

interface currency {
	CODE: string[]
	SYMBOL: string[]
	[key: string]: string | string[]
}

export const CURRENCY: currency = {
	CODE: ['PEN', 'USD'],
	SYMBOL: ['S/', '$'],
	PEN: 'S/',
	USD: '$',
}

export const HEADERS = {
	'X-KAPUC-SITE': 'x-kapuc-site',
}

export const USER = {
	ROLES: ['kapuc', 'kamachiq', 'usuario'],
	GENEDER: ['M', 'F'],
}

export const IDENTIFICATION_DOCUMENT = {
	TYPES: ['DNI', 'CE'],
}
