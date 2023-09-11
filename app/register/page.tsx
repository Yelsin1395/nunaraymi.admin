'use client'

import { Section } from '@/components/Section'
import { Input, Select, SelectItem } from '@nextui-org/react'

export default function Register() {
	return (
		<Section>
			<h1 className='text-5xl font-semibold text-center mb-6'>Register</h1>
			<form className='w-full max-w-lg mx-auto'>
				<div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
					<div className='sm:col-span-3'>
						<Input type='text' label='First name' />
					</div>

					<div className='sm:col-span-3'>
						<Input type='text' label='Second name' />
					</div>

					<div className='sm:col-span-4'>
						<Input type='email' label='Email address' />
					</div>

					<div className='sm:col-span-3'>
						<Select label='Select an animal' className='max-w-xs'>
							<SelectItem key='United States' value='United States'>
								United States
							</SelectItem>
						</Select>
					</div>

					<div className='col-span-full'>
						<Input type='text' label='Steed address' />
					</div>

					<div className='sm:col-span-2 sm:col-start-1'>
						<label htmlFor='city' className='block text-sm font-medium leading-6 text-gray-900'>
							City
						</label>
						<div className='mt-2'>
							<input
								type='text'
								name='city'
								id='city'
								autoComplete='address-level2'
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div className='sm:col-span-2'>
						<label htmlFor='region' className='block text-sm font-medium leading-6 text-gray-900'>
							State / Province
						</label>
						<div className='mt-2'>
							<input
								type='text'
								name='region'
								id='region'
								autoComplete='address-level1'
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='postal-code'
							className='block text-sm font-medium leading-6 text-gray-900'
						>
							ZIP / Postal code
						</label>
						<div className='mt-2'>
							<input
								type='text'
								name='postal-code'
								id='postal-code'
								autoComplete='postal-code'
								className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
				</div>
			</form>
		</Section>
	)
}
