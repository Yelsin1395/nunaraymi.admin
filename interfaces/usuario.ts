import { type IUbigeo, type IIdentificationDocument } from './common'

export interface IUsuario {
	kapucId: string
	kamachiqId?: string
	imageUrl?: string
	identificationDocument: IIdentificationDocument
	name: string
	lastName: string
	fullName: string
	gender: string
	birthdate?: string
	phone?: {
		code: string
		number: string
	}
	addresses?: IUbigeo[]
	email: {
		address: string
		isConfirmed: boolean
	}
	password: string
	role: string
	enabled?: boolean
	isDelete?: boolean
}

export interface IUsuarioCreate {
	identificationDocument: IIdentificationDocument
	name: string
	lastName: string
	gender: string
	email: {
		address: string
		isConfirmed?: boolean
	}
	password: string
	role?: string
}

export interface IUsuarioCreateUi {
	documentType: string
	documentNumber: string
	name: string
	lastName: string
	gender: string
	email: string
	password: string
	role?: string
}
