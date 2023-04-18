import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

const Heading: FC<PropsWithChildren<{ className?: string }>> = ({
	className,
	children
}) => {
	return (
		<h1 className={cn('font-black text-green text-6xl leading-tight', className)}>
			{children}
		</h1>
	)
}

export default Heading
