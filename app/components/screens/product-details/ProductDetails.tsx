import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/heading/Heading'

import { IProductDetails } from '@/types/product.interface'

import Breadcrumbs from './product-breadcrumbs/Breadcrumbs'
import ProductCard from './product-card/ProductCard'
import ProductNavigation from './product-navigation/ProductNavigation'
import { products } from '@/data/product.data'

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading className='text-right'>Product details</Heading>
			<div>
				<Breadcrumbs product={product} />
				<ProductNavigation productId={product.id} />
			</div>

			<ProductCard product={product} />

			<Catalog products={products} />
		</Layout>
	)
}

export default ProductDetails
