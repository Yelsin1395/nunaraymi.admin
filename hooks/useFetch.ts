import { useEffect, useMemo, useState } from 'react'
import { type Observable } from 'rxjs'
import { toast } from 'react-hot-toast'
import { errorTranslate } from '@/common/errorHandler'

export const useFetch = (fetch$: Observable<any>) => {
	const [isLoading, setIsLoading] = useState(true)
	const [payload, setPayload] = useState<any>()

	useEffect(() => {
		fetch$.subscribe({
			next: (value) => {
				if (!value.sucess) {
					toast.error(errorTranslate(value.payload.code))
				}

				setPayload(value.payload)
			},
			complete: () => {
				setIsLoading(false)
			},
		})
	}, [])

	return useMemo(
		() => ({
			isLoading,
			payload,
		}),
		[isLoading, payload]
	)
}
