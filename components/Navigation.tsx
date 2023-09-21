'use client'

// import { useMemo } from 'react'
// import { usePathname } from 'next/navigation'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from '@nextui-org/react'
import { type Kapuc } from '@/interfaces/kamachiq'

interface NavigationProps {
	children: React.ReactNode
	kapuc: Kapuc
}

export const Navigation = ({ children, kapuc }: NavigationProps) => {
	// const pathname = usePathname()

	// const routes = useMemo(
	// 	() => [
	// 		{
	// 			// icon: BiSearch,
	// 			label: 'Register',
	// 			href: '/register',
	// 			active: pathname === '/register',
	// 		},
	// 	],
	// 	[pathname]
	// )

	return (
		<>
			<Navbar>
				<NavbarBrand>
					<p className='font-bold text-inherit'>{kapuc.name}</p>
				</NavbarBrand>
				<NavbarContent className='hidden sm:flex gap-4' justify='center'>
					<NavbarItem></NavbarItem>
					{/* <NavbarItem>
						<Link color='foreground' href='/'>
							Features
						</Link>
					</NavbarItem>
					<NavbarItem isActive>
						<Link href='#' aria-current='page'>
							Customers
						</Link>
					</NavbarItem>
					<NavbarItem>
						<Link color='foreground' href='#'>
							Integrations
						</Link>
					</NavbarItem> */}
				</NavbarContent>
				<NavbarContent justify='end'>
					<NavbarItem className='hidden lg:flex'>
						<Link href='#'>Login</Link>
					</NavbarItem>
					<NavbarItem>
						<Button as={Link} color='primary' href='/register' variant='flat'>
							Sign Up
						</Button>
					</NavbarItem>
				</NavbarContent>
			</Navbar>
			{children}
		</>
	)
}
