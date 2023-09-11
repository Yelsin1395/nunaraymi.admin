'use client'

import { NextUIProvider } from '@nextui-org/react'

interface NextUiProvider {
	children: React.ReactNode
}

export const NextUiProvider: React.FC<NextUiProvider> = ({ children }) => {
	return <NextUIProvider>{children}</NextUIProvider>
}
