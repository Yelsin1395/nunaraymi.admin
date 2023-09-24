import { of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { http } from '@/providers/ApiProvider'
import { cfg } from '@/configs/environment'

export const getKapucById = () => {
	return http.get(`/public/kapuc/${cfg.NEXT_PUBLIC_ID_KAPUC}`).pipe(
		mergeMap((response: any) => response.json()),
		catchError((error) => {
			console.error(error.message)
			return of(error)
		})
	)
}
