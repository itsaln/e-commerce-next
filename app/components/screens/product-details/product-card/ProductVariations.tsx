import { FC, useState } from 'react'

import AddToCartButton from '@/ui/catalog/carousel/carousel-item/AddToCartButton'
import SizeVariations from '@/ui/catalog/carousel/carousel-item/SizeVariations'

import { IProduct } from '@/types/product.interface'

import { TypeSize } from '@/store/cart/cart.types'

import styles from './ProductCard.module.scss'
import ProductRating from './product-variations/ProductRating'

const ProductVariations: FC<{ product: IProduct }> = ({ product }) => {
	const [selectedSize, setSelectedSize] = useState<TypeSize>('SHORT')

	return (
		<div className={styles.variations}>
			<ProductRating product={product} />
			<SizeVariations
				selectedSize={selectedSize}
				setSelectedSize={setSelectedSize}
				variant='medium'
			/>
			<AddToCartButton
				product={product}
				selectedSize={selectedSize}
				variant='medium'
			/>
		</div>
	)
}

export default ProductVariations
