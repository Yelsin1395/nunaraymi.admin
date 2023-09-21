import { useState } from 'react'
import { Input, Select, SelectItem, Button } from '@nextui-org/react'
import { useForm } from 'react-hook-form'
import { joiResolver } from '@hookform/resolvers/joi'
import { toast } from 'react-hot-toast'
import { createKamachiq } from '@/actions/kamachiq/createKamachiq'
import { INVOICE, CURRENCY } from '@/common/constants'
import { errorTranslate } from '@/common/errorHandler'
import { kamachiqSchema } from '../schemas/kamachiqSchema'

interface kamachiqFromProps {
	getKamachiqId: (id: string) => void
}

export const KamachiqFrom = ({ getKamachiqId }: kamachiqFromProps) => {
	const [isLoading, setIsLoading] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: joiResolver(kamachiqSchema),
		mode: 'onBlur',
	})

	const onSubmitForm = (data: any) => {
		setIsLoading(true)

		const CURRENCY_CODE: string = data.currencyCode

		const payload = {
			ruc: data.ruc,
			name: data.name,
			billingType: data.billingType,
			address: {
				name: null,
				...data.address,
			},
			currency: {
				code: CURRENCY_CODE,
				symbol: CURRENCY[CURRENCY_CODE],
			},
		}

		createKamachiq(payload).subscribe({
			next: (value) => {
				if (!value.sucess) {
					toast.error(errorTranslate(value.payload.code))
				}

				getKamachiqId(value.payload.newId)
			},
			complete: () => {
				setIsLoading(false)
			},
		})
	}

	return (
		<>
			<h1 className='text-5xl font-semibold text-center mb-6'>Register</h1>
			<form className='w-full max-w-lg mx-auto'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<div className='sm:col-span-3'>
						<Input
							type='text'
							label='Registro único contribuyente (RUC)'
							{...register('ruc')}
							isInvalid={errors?.ruc && true}
							errorMessage={errors?.ruc && `${JSON.stringify(errors?.ruc?.message)}`}
						/>
					</div>

					<div className='sm:col-span-3'>
						<Input
							type='text'
							label='Razón social'
							{...register('name')}
							isInvalid={errors?.name && true}
							errorMessage={errors?.name && `${JSON.stringify(errors?.name?.message)}`}
						/>
					</div>

					<div className='sm:col-span-4'>
						<Select
							label='Tipo de facturación'
							className='max-w-xs'
							{...register('billingType')}
							isInvalid={errors?.billingType && true}
							errorMessage={
								errors?.billingType && `${JSON.stringify(errors?.billingType?.message)}`
							}
						>
							{INVOICE.TYPES.map((type) => (
								<SelectItem key={type} value={type}>
									{type}
								</SelectItem>
							))}
						</Select>
					</div>

					<div className='sm:col-span-3'>
						<Select
							label='Tipo de moneda'
							className='max-w-xs'
							{...register('currencyCode')}
							isInvalid={errors?.currencyCode && true}
							errorMessage={
								errors?.currencyCode && `${JSON.stringify(errors?.currencyCode?.message)}`
							}
						>
							{CURRENCY.CODE.map((code) => (
								<SelectItem key={code} value={code}>
									{code}
								</SelectItem>
							))}
						</Select>
					</div>

					<div className='col-span-full'>
						<Input type='text' label='Departamento' {...register('address.departament')} />
					</div>
					<div className='col-span-full'>
						<Input type='text' label='Provincia' {...register('address.province')} />
					</div>
					<div className='col-span-full'>
						<Input type='text' label='Distrito' {...register('address.district')} />
					</div>
					<div className='col-span-full'>
						<Input type='text' label='Dirección' {...register('address.direction')} />
					</div>
					<div className='col-span-full'>
						<Input type='text' label='Referencia' {...register('address.referenceNotes')} />
					</div>
					<div className='col-span-full'>
						<Input type='text' label='Latitud' {...register('address.latitude')} />
					</div>
					<div className='col-span-full'>
						<Input type='text' label='Longitud' {...register('address.longitude')} />
					</div>

					<div className='sm:col-span-3'>
						<Button
							isLoading={isLoading}
							type='submit'
							radius='full'
							className='bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg'
							onClick={handleSubmit(onSubmitForm)}
						>
							Button
						</Button>
					</div>
				</div>
			</form>
		</>
	)
}
