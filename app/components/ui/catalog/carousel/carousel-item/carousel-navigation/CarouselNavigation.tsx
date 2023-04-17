import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import cn from 'clsx'
import Image from 'next/image'
import { FC } from 'react'

import { useActions } from '@/hooks/useActions'

import { ICarouselNavigation } from '../carousel-item.interface'

import styles from './CarouselNavigation.module.scss'
import { products } from '@/data/product.data'

const CarouselNavigation: FC<ICarouselNavigation> = ({ product, isActive }) => {
	const { nextSlide, prevSlide } = useActions()

	return (
		<div className={styles.navigation}>
			{isActive && (
				<button
					onClick={() => prevSlide()}
					className={cn(styles.arrow, styles.prev)}
				>
					<ChevronLeftIcon />
				</button>
			)}
			<Image
				className={styles.image}
				src={product.images[0]}
				alt={product.name}
				width={300}
				height={300}
				priority
				draggable={false}
			/>
			{isActive && (
				<button
					onClick={() => nextSlide({ carouselLength: products.length })}
					className={cn(styles.arrow, styles.next)}
				>
					<ChevronRightIcon />
				</button>
			)}
		</div>
	)
}

export default CarouselNavigation
