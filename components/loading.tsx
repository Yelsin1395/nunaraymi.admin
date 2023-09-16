'use client'
import { BounceLoader } from 'react-spinners'
import { Box } from '@/components/Box'

export default function Loading() {
	return (
		<Box className='h-screen flex items-center justify-center'>
			<BounceLoader color='#EC5853' size={40} />
		</Box>
	)
}
