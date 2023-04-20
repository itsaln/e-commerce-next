import { FC, useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import { IProductDetails } from '@/types/product.interface'

import styles from '../ProductCard.module.scss'

const ProductRating: FC<IProductDetails> = ({ product }) => {
	const [rating, setRating] = useState(
		Math.round(
			product.reviews.reduce((acc, review) => acc + review.rating, 0) /
				product.reviews.length
		) || 0
	)

	return (
		<div className={styles.rating}>
			<span>Review:</span>
			<Rating
				readonly
				initialValue={rating}
				SVGstyle={{
					display: 'inline-block'
				}}
				size={30}
				allowFraction
				transition
			/>
		</div>
	)
}

export default ProductRating
