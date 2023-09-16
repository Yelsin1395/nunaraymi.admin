import { type Observable } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { type ApiProviderImpl } from '@/interfaces/apiProvider'
import { cfg } from '@/configs/environment'

class ApiProvider implements ApiProviderImpl {
	constructor(
		public baseUrl: string = cfg.NEXT_PUBLIC_BASE_URL as string,
		public kapucId: string = cfg.NEXT_PUBLIC_ID_KAPUC as string
	) {}

	private readonly isAbsoluteUrl = (url: string): boolean => {
		const path = /^https?:\/\//i
		return path.test(url)
	}

	private readonly getUrl = (url: string) => {
		if (this.isAbsoluteUrl(url)) return url
		return `${this.baseUrl}${url}`
	}

	get = <T>(url: string, headers?: Record<string, string>): Observable<Response | T> =>
		fromFetch(this.getUrl(url), {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'X-KAPUC-SITE': this.kapucId,
				...headers,
			},
		})

	post = <T>(url: string, body: any, headers?: Record<string, string>): Observable<Response | T> =>
		fromFetch(this.getUrl(url), {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-KAPUC-SITE': this.kapucId,
				...headers,
			},
			body,
		})

	put = <T>(url: string, body: any, headers?: Record<string, string>): Observable<Response | T> =>
		fromFetch(this.getUrl(url), {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'X-KAPUC-SITE': this.kapucId,
				...headers,
			},
			body,
		})

	patch = <T>(url: string, body: any, headers?: Record<string, string>): Observable<Response | T> =>
		fromFetch(this.getUrl(url), {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'X-KAPUC-SITE': this.kapucId,
				...headers,
			},
			body,
		})

	delete = <T>(
		url: string,
		body?: any,
		headers?: Record<string, string> | undefined
	): Observable<Response | T> =>
		fromFetch(this.getUrl(url), {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'X-KAPUC-SITE': this.kapucId,
				...headers,
			},
			body,
		})

	setBaseUrl = (url: string) => {
		this.baseUrl = url
	}
}

export const http = new ApiProvider()
