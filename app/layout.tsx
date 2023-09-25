import './globals.scss'
import { Suspense } from 'react'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { NextUiProvider } from '@/providers/NextUiProvider'
import { NextAuthProvider } from '@/providers/NextAuthProvider'
import { AppUiProvider } from '@/providers/AppUiProvider'
import { ToasterProvider } from '@/providers/ToasterProvider'
import Loading from '@/components/loading'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nuna Raymi',
	description: 'Red social de eventos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='light'>
			<body className={nunito.className}>
				<ToasterProvider />
				<Suspense fallback={<Loading />}>
					<NextUiProvider>
						<NextAuthProvider>
							<AppUiProvider>{children}</AppUiProvider>
						</NextAuthProvider>
					</NextUiProvider>
				</Suspense>
			</body>
		</html>
	)
}
