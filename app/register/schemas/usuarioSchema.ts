import Joi, { type ObjectSchema } from 'joi'
import { type IUsuarioCreateUi } from '@/interfaces/usuario'
import { IDENTIFICATION_DOCUMENT, USER } from '@/common/constants'
import regex from '@/common/regex'

export const usuarioSchema: ObjectSchema<IUsuarioCreateUi> = Joi.object({
	documentType: Joi.string()
		.valid(...IDENTIFICATION_DOCUMENT.TYPES)
		.required(),
	documentNumber: Joi.string().required(),
	name: Joi.string().trim().required(),
	lastName: Joi.string().trim().required(),
	gender: Joi.string()
		.valid(...USER.GENEDER)
		.required(),
	email: Joi.string().regex(regex.email).required(),
	password: Joi.string().required(),
	role: Joi.string()
		.valid(...USER.ROLES)
		.required(),
})
