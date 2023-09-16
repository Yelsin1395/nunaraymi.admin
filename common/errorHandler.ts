type ErrorObject = Record<string, string>

export const errorTranslate = (errorCode: string): string => {
	const errorMessage: ErrorObject = {
		INTERNAL_SERVER_ERROR: 'Error del servidor',
		ERROR_NOT_FOUND_KAPUC_ENTITY: 'Kapuc no encontrado',
	}

	const defaultMessage = 'Error inespirado'

	return errorMessage[errorCode] || defaultMessage
}
