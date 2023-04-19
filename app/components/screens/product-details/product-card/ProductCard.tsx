import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

import styles from './ProductCard.module.scss'
import ProductImage from '@/screens/product-details/product-card/ProductImage'
import ProductInformation from '@/screens/product-details/product-card/ProductInformation'
import ProductVariations from '@/screens/product-details/product-card/ProductVariations'

const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.card}>
			<ProductInformation product={product} />
			<ProductImage product={product} />
			<ProductVariations />
		</div>
	)
}

export default ProductCard
