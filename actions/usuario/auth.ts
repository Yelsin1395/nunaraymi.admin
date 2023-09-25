import { of, scheduled, asyncScheduler } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { signIn } from 'next-auth/react'

export const auth = (email: string, password: string) => {
	return scheduled(
		signIn('credentials', { email, password, redirect: false }),
		asyncScheduler
	).pipe(
		map((response: any) => response),
		catchError((error) => {
			console.error(error.message)
			return of(error)
		})
	)
}
