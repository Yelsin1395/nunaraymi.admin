interface SectionProps {
	children: React.ReactNode
}

export const Section: React.FC<SectionProps> = ({ children }) => {
	return <section className='container max-w-screen-lg mx-auto py-2 px-6'>{children}</section>
}
