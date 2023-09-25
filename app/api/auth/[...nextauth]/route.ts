import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
	secret: process.env.NEXTAUTH_SECRET,
	providers: [
		CredentialsProvider({
			name: 'Credentials',
			id: 'credentials',
			credentials: {
				email: { label: 'Email', type: 'text' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials) {
				const response = await fetch(
					`${process.env.NEXT_PUBLIC_BASE_URL}/private/usuario/auth/${credentials?.email}/${credentials?.password}`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
							'X-KAPUC-SITE': process.env.NEXT_PUBLIC_ID_KAPUC ?? '',
						},
					}
				)

				const result = await response.json()

				if (!result.success) {
					throw new Error(result.payload.code)
				} else {
					return result.payload.token
				}
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) token.value = user
			return token
		},
		async session({ session, token }) {
			session.user = token.value as any
			return session
		},
	},
	pages: {
		signIn: '/',
	},
	session: {
		strategy: 'jwt',
	},
})

export { handler as GET, handler as POST }
