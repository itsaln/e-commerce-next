import cn from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'

import styles from '../Carousel.module.scss'

import { TypeSize } from '@/store/cart/cart.types'

const SIZES: TypeSize[] = ['SHORT', 'TALL', 'GRANDE', 'VENTI']

interface ICarouselVariations {
	selectedSize: TypeSize
	setSelectedSize: Dispatch<SetStateAction<TypeSize>>
}

const CarouselVariations: FC<ICarouselVariations> = ({
	selectedSize,
	setSelectedSize
}) => {
	return (
		<div className={styles.variations}>
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

export default CarouselVariations
