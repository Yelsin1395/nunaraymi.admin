'use client'
import './globals.scss'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { NextUiProvider } from '@/providers/NextUiProvider'
import { ToasterProvider } from '@/providers/ToasterProvider'
import { Navigation } from '@/components/Navigation'
import { getKapucById } from '@/actions/queryKapuc'
import { useFetch } from '@/hooks/useFetch'
import Loading from './loading'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nuna Raymi',
	description: 'Red social de eventos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const { isLoading, payload } = useFetch(getKapucById())

	return (
		<html lang='en' className='light'>
			<body className={nunito.className}>
				<ToasterProvider />
				<Suspense fallback={<Loading />}>
					<NextUiProvider>
						{isLoading ? <Loading /> : <Navigation kapuc={payload}>{children}</Navigation>}
					</NextUiProvider>
				</Suspense>
			</body>
		</html>
	)
}
