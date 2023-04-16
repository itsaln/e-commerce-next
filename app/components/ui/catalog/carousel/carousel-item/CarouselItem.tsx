import { ChevronLeftIcon, ChevronRightIcon, MinusIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import cn from 'clsx'
import Image from 'next/image'
import { FC, useState } from 'react'

import CarouselButton from '@/ui/catalog/carousel/carousel-item/CarouselButton'
import CarouselVariations from '@/ui/catalog/carousel/carousel-item/CarouselVariations'

import styles from '../Carousel.module.scss'

import { TypeSize } from '@/store/types'
import { IProduct } from '@/types/product.interface'

interface ICarouselItem {
	product: IProduct
	isActive: boolean
	selectItem: () => void
	nextHandler: () => void
	prevHandler: () => void
}

const CarouselItem: FC<ICarouselItem> = ({
	product,
	isActive,
	selectItem,
	nextHandler,
	prevHandler
}) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	return (
		<div
			className={cn(styles.item, {
				[styles.active]: isActive
			})}
			onClick={selectItem}
		>
			<div>
				<div className='flex items-center'>
					{isActive && (
						<Button onClick={prevHandler} className='absolute left-0'>
							<ChevronLeftIcon fontSize={13} />
						</Button>
					)}
					<Image
						className={styles.image}
						src={product.images[0]}
						alt={product.name}
						width={300}
						height={300}
					/>
					{isActive && (
						<Button onClick={nextHandler} className='absolute right-0'>
							<ChevronRightIcon fontSize={13} />
						</Button>
					)}
				</div>
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
