import Joi, { type ObjectSchema } from 'joi'
import { type IKamachiqCreate } from '@/interfaces/kamachiq'
import { ubigeoSchemaValidate } from '@/common/schemas'
import { INVOICE, CURRENCY } from '@/common/constants'
import regex from '@/common/regex'

export const kamachiqSchema: ObjectSchema<IKamachiqCreate> = Joi.object({
	ruc: Joi.string().regex(regex.ruc).required(),
	name: Joi.string().required(),
	billingType: Joi.string()
		.valid(...INVOICE.TYPES)
		.required(),
	currencyCode: Joi.string()
		.valid(...CURRENCY.CODE)
		.required(),
	address: ubigeoSchemaValidate,
})
