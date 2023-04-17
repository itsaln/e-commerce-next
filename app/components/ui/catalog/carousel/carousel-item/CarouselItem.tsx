import cn from 'clsx'
import { motion } from 'framer-motion'
import { FC, useState } from 'react'

import { useCarousel } from '@/ui/catalog/carousel/useCarousel'

import { useActions } from '@/hooks/useActions'

import styles from '../Carousel.module.scss'

import CarouselButton from './CarouselButton'
import CarouselVariations from './CarouselVariations'
import { ICarouselItem } from './carousel-item.interface'
import CarouselNavigation from './carousel-navigation/CarouselNavigation'
import { TypeSize } from '@/store/cart/cart.types'

const CarouselItem: FC<ICarouselItem> = ({ product, index }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	const { selectedItemIndex } = useCarousel()
	const { selectSlide } = useActions()

	const isActive = index === selectedItemIndex

	return (
		<motion.div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
			onClick={() => selectSlide(index)}
			aria-label='Select item'
			role='button'
			initial={{ scale: 1 }}
			animate={isActive ? { scale: 1.1 } : {}}
			transition={{ type: 'spring', duration: 0.5 }}
		>
			<CarouselNavigation product={product} isActive={isActive} />
			<div className={styles.body}>
				<div className={styles.heading}>{product.name}</div>
				{isActive ? (
					<>
						<CarouselVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<CarouselButton product={product} selectedSize={selectedSize} />
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}

export default CarouselItem
