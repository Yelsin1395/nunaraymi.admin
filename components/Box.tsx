import { twMerge } from 'tailwind-merge'

interface BoxProps {
	children: React.ReactNode
	className?: string
}

export const Box: React.FC<BoxProps> = ({ children, className }) => {
	return <div className={twMerge(`bg-white h-fit w-full`, className)}>{children}</div>
}
