import { type Observable } from 'rxjs'

export interface ApiProviderImpl {
	get: (url: string, headers?: Record<string, string>) => Observable<Response>
	post: (url: string, body: any, headers?: Record<string, string>) => Observable<Response>
	put: (url: string, body: any, headers?: Record<string, string>) => Observable<Response>
	patch: (url: string, body: any, headers?: Record<string, string>) => Observable<Response>
	delete: (url: string, headers?: Record<string, string>) => Observable<Response>
}
