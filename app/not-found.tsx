import { Section } from '@/components/Section'
import Link from 'next/link'

export default function NotFound() {
	return (
		<Section>
			<div className='items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16'>
				<div className='xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0'>
					<div className='relative'>
						<div className='absolute'>
							<div className=''>
								<h1 className='my-2 text-gray-800 font-bold text-2xl mb-4'>
									Parece que has encontrado la puerta a la gran nada.
								</h1>
								<p className='my-2 text-gray-800 mb-8'>
									¡Lo lamento! Visite nuestra página de inicio para llegar a donde necesita ir.
								</p>
								<Link
									className='sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50'
									href='/'
								>
									Llévame al inicio!
								</Link>
							</div>
						</div>
						<div>
							<img src='https://i.ibb.co/G9DC8S0/404-2.png' />
						</div>
					</div>
				</div>
				<div>
					<img src='https://i.ibb.co/ck1SGFJ/Group.png' />
				</div>
			</div>
		</Section>
	)
}
