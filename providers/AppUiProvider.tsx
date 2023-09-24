import { Navigation } from '@/components/Navigation'
import Loading from '@/components/loading'
import { getKapucById } from '@/actions/kapuc/query'
import { useFetch } from '@/hooks/useFetch'

interface AppUiProvider {
	children: React.ReactNode
}

export const AppUiProvider: React.FC<AppUiProvider> = ({ children }) => {
	const { isLoading, payload } = useFetch(getKapucById())

	if (isLoading) {
		return <Loading />
	}

	return <Navigation kapuc={payload}>{children}</Navigation>
}
