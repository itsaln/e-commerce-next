import { FC } from 'react'

import Layout from '@/layout/Layout'

import Heading from '@/ui/heading/Heading'

import Breadcrumbs from '@/screens/product-details/product-breadcrumbs/Breadcrumbs'
import { IProduct } from '@/types/product.interface'

const ProductDetails: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Layout title={product.name} description={product.description}>
			<Heading className='text-center'>{product.name}</Heading>
			<div>
				<Breadcrumbs product={product} />
			</div>
		</Layout>
	)
}

export default ProductDetails
