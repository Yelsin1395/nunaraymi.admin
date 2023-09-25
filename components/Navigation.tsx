'use client'
import { useSession, signOut } from 'next-auth/react'
import jwt from 'jsonwebtoken'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { type IKapuc } from '@/interfaces/kapuc'
import { type IUsuario } from '@/interfaces/usuario'

interface NavigationProps {
	children: React.ReactNode
	kapuc: IKapuc
}

const NavigationControllersUser = () => {
	const { data: session, status } = useSession()

	if (status === 'authenticated') {
		const token: string = String(session?.user)
		const user: IUsuario | any = jwt.decode(token, { complete: true })?.payload

		return (
			<NavbarContent justify='end'>
				<NavbarItem>{user.name}</NavbarItem>
				<NavbarItem>
					<Button
						color='primary'
						variant='flat'
						onClick={() => {
							signOut()
						}}
					>
						Cerrar sesión
					</Button>
				</NavbarItem>
			</NavbarContent>
		)
	} else {
		return (
			<NavbarContent justify='end'>
				<NavbarItem className='hidden lg:flex'>
					<Link href='/'>Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color='primary' href='/register' variant='flat'>
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		)
	}
}

export const Navigation = ({ children, kapuc }: NavigationProps) => {
	return (
		<>
			<Navbar>
				<NavbarBrand>
					<Link href='/'>
						<p className='font-bold text-inherit'>{kapuc.name}</p>
					</Link>
				</NavbarBrand>
				<NavigationControllersUser />
			</Navbar>
			{children}
		</>
	)
}
