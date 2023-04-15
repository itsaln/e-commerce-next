import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import CarouselButton from '@/ui/catalog/carousel/carousel-item/CarouselButton'
import CarouselVariations from '@/ui/catalog/carousel/carousel-item/CarouselVariations'

import styles from '../Carousel.module.scss'

import { TypeSize } from '@/store/types'
import { IProduct } from '@/types/product.interface'

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')
	const isActive = product.id === 2

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
		>
			<div>
				<Image
					className={styles.image}
					src={product.images[0]}
					alt={product.name}
					width={300}
					height={300}
				/>
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
		</div>
	)
}

export default CarouselItem
