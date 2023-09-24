import { useState } from 'react'
import { redirect } from 'next/navigation'
import { Input, Select, SelectItem, Button } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-hot-toast'
import { create } from '@/actions/usuario/create'
import { IDENTIFICATION_DOCUMENT, USER } from '@/common/constants'
import { errorTranslate } from '@/common/errorHandler'
import { usuarioSchema } from '../schemas/usuarioSchema'

export const UsuarioForm: React.FC<{ kamachiqId: string }> = ({ kamachiqId }) => {
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: joiResolver(usuarioSchema),
		mode: 'onBlur',
	})

	const onSubmitForm = (data: any) => {
		setIsLoading(true)

		const payload = {
			kamachiqId,
			identificationDocument: {
				type: data.documentType,
				number: data.documentNumber,
			},
			name: data.name,
			lastName: data.lastName,
			gender: data.gender,
			email: {
				address: data.email,
			},
			password: data.password,
			role: 'kamachiq',
		}

		create(payload).subscribe({
			next: (value) => {
				if (!value.sucess) {
					toast.error(errorTranslate(value.payload.code))
					return
				}
				toast.success('Se ha registrado correctamente')
				redirect('/')
			},
			complete: () => {
				setIsLoading(false)
			},
		})
	}

	console.log({ errors })

	return (
		<form className='w-full max-w-lg mx-auto'>
			<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
				<div className='sm:col-span-4'>
					<Select
						label='Tipo de documento de identidad'
						className='max-w-xs'
						{...register('documentType')}
						isInvalid={errors?.documentType && true}
						errorMessage={
							errors?.documentType && `${JSON.stringify(errors?.documentType?.message)}`
						}
					>
						{IDENTIFICATION_DOCUMENT.TYPES.map((type) => (
							<SelectItem key={type} value={type}>
								{type}
							</SelectItem>
						))}
					</Select>
				</div>

				<div className='sm:col-span-3'>
					<Input
						type='text'
						label='Número de documento de identidad'
						{...register('documentNumber')}
						isInvalid={errors?.documentNumber && true}
						errorMessage={
							errors?.documentNumber && `${JSON.stringify(errors?.documentNumber?.message)}`
						}
					/>
				</div>

				<div className='sm:col-span-3'>
					<Input
						type='text'
						label='Nombre'
						{...register('name')}
						isInvalid={errors?.name && true}
						errorMessage={errors?.name && `${JSON.stringify(errors?.name?.message)}`}
					/>
				</div>

				<div className='sm:col-span-3'>
					<Input
						type='text'
						label='Apellidos'
						{...register('lastName')}
						isInvalid={errors?.lastName && true}
						errorMessage={errors?.lastName && `${JSON.stringify(errors?.lastName?.message)}`}
					/>
				</div>

				<div className='sm:col-span-4'>
					<Select
						label='Género'
						className='max-w-xs'
						{...register('gender')}
						isInvalid={errors?.gender && true}
						errorMessage={errors?.gender && `${JSON.stringify(errors?.gender?.message)}`}
					>
						{USER.GENEDER.map((gender) => (
							<SelectItem key={gender} value={gender}>
								{gender}
							</SelectItem>
						))}
					</Select>
				</div>

				<div className='col-span-full'>
					<Input
						type='email'
						label='Correo electrónico'
						{...register('email')}
						isInvalid={errors?.email && true}
						errorMessage={errors?.email && `${JSON.stringify(errors?.email?.message)}`}
					/>
				</div>

				<div className='col-span-full'>
					<Input
						type='password'
						label='Contraseña'
						{...register('password')}
						isInvalid={errors?.password && true}
						errorMessage={errors?.password && `${JSON.stringify(errors?.password?.message)}`}
					/>
				</div>

				<div className='col-span-full hidden'>
					<Input type='text' label='Rol' {...register('role', { value: 'kamachiq' })} isDisabled />
				</div>

				<div className='sm:col-span-3'>
					<Button
						isLoading={isLoading}
						type='submit'
						radius='full'
						className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
						onClick={handleSubmit(onSubmitForm)}
					>
						Finalizar registro
					</Button>
				</div>
			</div>
		</form>
	)
}
