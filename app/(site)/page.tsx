'use client'
import { useState } from 'react'
import { useRouter, redirect } from 'next/navigation'
import { Input, Button } from '@nextui-org/react'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-hot-toast'
import { Section } from '@/components/Section'
import { auth } from '@/actions/usuario/auth'

export default function Home() {
	const { status } = useSession()
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: 'onBlur' })

	if (status === 'authenticated') {
		redirect('/dashboard')
	}

	const onSubmitForm = (data: any) => {
		setIsLoading(true)
		auth(data.email, data.password).subscribe({
			next: (value) => {
				if (value.error) {
					toast.error(value.error)
					return
				}

				toast.success('Redirigiendo')
				router.push('/dashboard')
			},
			complete: () => {
				setIsLoading(false)
			},
		})
	}

	return (
		<Section>
			<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
				<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
					<img
						className='mx-auto h-10 w-auto'
						src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
						alt='Your Company'
					/>
					<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
						Inicie sesión en su cuenta
					</h2>
				</div>

				<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
					<form className='space-y-6' onSubmit={handleSubmit(onSubmitForm)}>
						<div>
							<div className='mt-2'>
								<Input
									type='text'
									label='Correo electrónico'
									{...register('email', { required: true })}
									isInvalid={errors?.email && true}
									errorMessage={errors?.email && 'Este campo es requerido'}
								/>
							</div>
						</div>

						<div>
							<div className='mt-2'>
								<Input
									type='password'
									label='Contraseña'
									{...register('password', { required: true })}
									isInvalid={errors?.password && true}
									errorMessage={errors?.password && 'Este campo es requerido'}
								/>
							</div>
							<div className='flex items-center justify-between mt-4'>
								<div className='text-sm'>
									<a href='#' className='font-semibold text-indigo-600 hover:text-indigo-500'>
										¿Has olvidado tu contraseña?
									</a>
								</div>
							</div>
						</div>

						<div>
							<Button isLoading={isLoading} type='submit' color='primary' fullWidth>
								Iniciar sesión
							</Button>
						</div>
					</form>

					<p className='mt-10 text-center text-sm text-gray-500'>
						Not a member?{' '}
						<a href='#' className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'>
							Start a 14 day free trial
						</a>
					</p>
				</div>
			</div>
		</Section>
	)
}
