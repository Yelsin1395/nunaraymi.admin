import { of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { http } from '@/providers/ApiProvider'
import { type IKamachiqCreate } from '@/interfaces/kamachiq'

export const create = (payload: IKamachiqCreate) => {
	return http.post('/private/kamachiq/create', payload).pipe(
		mergeMap((response: any) => response.json()),
		catchError((error) => {
			console.error(error.message)
			return of(error)
		})
	)
}
