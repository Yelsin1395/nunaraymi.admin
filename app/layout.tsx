import './globals.scss'
import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import { NextUiProvider } from '@/providers/NextUiProvider'
import { Navigation } from '@/components/Navigation'

const nunito = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nuna Raymi',
	description: 'Red social de eventos',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en' className='light'>
			<body className={nunito.className}>
				<NextUiProvider>
					<Navigation>{children}</Navigation>
				</NextUiProvider>
			</body>
		</html>
	)
}
