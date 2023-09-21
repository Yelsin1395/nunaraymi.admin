import { type IUbigeo, type ICurrency } from './common'

export interface IKamachiq {
	kapucId: string
	ruc: string
	name: string
	logoUrl?: string
	billingType: string
	address: IUbigeo
	currency: ICurrency
	published?: string
	isVerify?: boolean
	enabled?: boolean
	isDelete?: boolean
}

export interface IKamachiqCreate {
	ruc: string
	name?: string
	billingType: string
	address: IUbigeo
	currency: ICurrency
	currencyCode?: string
}
