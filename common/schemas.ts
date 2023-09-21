import Joi, { type ObjectSchema } from 'joi'
import { type IUbigeo, type ICurrency } from '@/interfaces/common'
import { CURRENCY } from '@/common/constants'

export const ubigeoSchemaValidate: ObjectSchema<IUbigeo> = Joi.object({
	name: Joi.string(),
	departament: Joi.string().required(),
	province: Joi.string().required(),
	district: Joi.string().required(),
	direction: Joi.string().required(),
	referenceNotes: Joi.string().required(),
	latitude: Joi.string().required(),
	longitude: Joi.string().required(),
})

export const currencySchemaValidate: ObjectSchema<ICurrency> = Joi.object({
	code: Joi.string()
		.valid(...CURRENCY.CODE)
		.required(),
	symbol: Joi.string()
		.valid(...CURRENCY.SYMBOL)
		.required(),
})
