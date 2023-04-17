import { FC } from 'react'

import styles from './Carousel.module.scss'
import CarouselItem from './carousel-item/CarouselItem'
import { IProduct } from '@/types/product.interface'

const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.carousel}>
			{products.map((product, index) => (
				<div className={styles.col} key={`${product.id}_${index}`}>
					<CarouselItem
						product={product}
						index={index}
					/>
				</div>
			))}
		</div>
	)
}

export default Carousel
