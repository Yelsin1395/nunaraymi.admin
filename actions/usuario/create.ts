import { of } from 'rxjs'
import { catchError, mergeMap } from 'rxjs/operators'
import { http } from '@/providers/ApiProvider'
import { type IUsuarioCreate } from '@/interfaces/usuario'

export const create = (payload: IUsuarioCreate) => {
	return http.post('/private/usuario/create', payload).pipe(
		mergeMap((response: any) => response.json()),
		catchError((error) => {
			console.error(error.message)
			return of(error)
		})
	)
}
