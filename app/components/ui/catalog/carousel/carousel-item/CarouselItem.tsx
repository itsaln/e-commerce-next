import cn from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useState } from 'react'

import { useCarousel } from '@/ui/catalog/carousel/useCarousel'

import { useActions } from '@/hooks/useActions'

import { TypeSize } from '@/store/cart/cart.types'

import styles from '../Carousel.module.scss'

import AddToCartButton from './AddToCartButton'
import SizeVariations from './SizeVariations'
import { ICarouselItem } from './carousel-item.interface'
import CarouselNavigation from './carousel-navigation/CarouselNavigation'

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
						<SizeVariations
							selectedSize={selectedSize}
							setSelectedSize={setSelectedSize}
						/>
						<AddToCartButton product={product} selectedSize={selectedSize} />
						<Link href={`/product/${product.slug}`} className={styles.link}>
							More information
						</Link>
					</>
				) : (
					<div className={styles.description}>{product.description}</div>
				)}
			</div>
		</motion.div>
	)
}

export default CarouselItem
