'use client'
import { useState } from 'react'
import { Section } from '@/components/Section'
import { KamachiqFrom } from './components/KamachiqForm'

export default function Register() {
	const [idKamachiq, setIdKamachiq] = useState<string>('')

	return (
		<Section>
			<KamachiqFrom
				getKamachiqId={(id) => {
					setIdKamachiq(id)
				}}
			/>
			<p>{idKamachiq}</p>
		</Section>
	)
}
