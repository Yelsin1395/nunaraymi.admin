'use client'
import { useState } from 'react'
import { redirect } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { Section } from '@/components/Section'
import { KamachiqFrom } from './components/KamachiqForm'
import { UsuarioForm } from './components/UsuarioForm'

export default function Register() {
	const { status } = useSession()
	const [kamachiqId, setKamachiqId] = useState<string>('')

	if (status === 'authenticated') {
		redirect('/dashboard')
	}

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
