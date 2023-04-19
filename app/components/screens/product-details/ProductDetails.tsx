import { FC } from 'react'

import Layout from '@/layout/Layout'

import Heading from '@/ui/heading/Heading'

import { IProduct } from '@/types/product.interface'

import Breadcrumbs from '@/screens/product-details/product-breadcrumbs/Breadcrumbs'
import ProductCard from '@/screens/product-details/product-card/ProductCard'
import ProductNavigation from '@/screens/product-details/product-navigation/ProductNavigation'

const ProductDetails: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading className='text-right'>{product.name}</Heading>
			<div>
				<Breadcrumbs product={product} />
				<ProductNavigation productId={product.id} />
			</div>

			<ProductCard product={product} />
		</Layout>
	)
}

export default ProductDetails
