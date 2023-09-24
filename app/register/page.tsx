'use client'
import { useState } from 'react'
import { Section } from '@/components/Section'
import { KamachiqFrom } from './components/KamachiqForm'
import { UsuarioForm } from './components/UsuarioForm'

export default function Register() {
	const [kamachiqId, setKamachiqId] = useState<string>('')

	return (
		<Section>
			<h1 className='text-5xl font-semibold text-center mb-6'>Register</h1>
			<KamachiqFrom
				getKamachiqId={(id) => {
					setKamachiqId(id)
				}}
			/>
			<UsuarioForm kamachiqId={kamachiqId} />
		</Section>
	)
}
