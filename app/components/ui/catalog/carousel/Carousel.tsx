import { FC, useState } from 'react'

import CarouselItem from '@/ui/catalog/carousel/carousel-item/CarouselItem'

import styles from './Carousel.module.scss'
import { IProduct } from '@/types/product.interface'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const [selectedItemIndex, setSelectedItemIndex] = useState(1)

	const nextHandler = () => {
		if (selectedItemIndex !== products.length - 1) setSelectedItemIndex(selectedItemIndex + 1)
	}
	const prevHandler = () => {
		if (selectedItemIndex > 0) setSelectedItemIndex(selectedItemIndex - 1)
	}

	return (
		<div className={styles.carousel}>
			{products.map((product, index) => (
				<CarouselItem
					key={`${product.id}_${index}`}
					product={product}
					isActive={index === selectedItemIndex}
					selectItem={() => setSelectedItemIndex(index)}
					nextHandler={nextHandler}
					prevHandler={prevHandler}
				/>
			))}
		</div>
	)
}

export default Carousel
