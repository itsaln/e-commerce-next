import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import { TypeSize } from '@/store/cart/cart.types'

import styles from '../Carousel.module.scss'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

interface ISizeVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
	variant?: 'small' | 'medium'
}

const SizeVariations: FC<ISizeVariations> = ({
	selectedSize,
	setSelectedSize,
	variant = 'small'
}) => {
	return (
		<div
			className={cn(styles.variations, {
				[styles.medium]: variant === 'medium'
			})}
		>
			{SIZES.map((size, index) => (
				<button
					className={cn({
						[styles.active]: selectedSize === size
					})}
					key={`${size}_${index}`}
					onClick={() => setSelectedSize(size)}
				>
					{size}
				</button>
			))}
		</div>
	)
}

export default SizeVariations
