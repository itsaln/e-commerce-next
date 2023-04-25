import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { IProduct } from '@/types/product.interface'

import ProductDetails from '@/screens/product-details/ProductDetails'
import { IProductDetails } from '@/screens/product-details/product-details.interface'
import { ProductService } from '@/services/product.service'

const ProductDetailsPage: NextPage<IProductDetails> = ({
	product,
	products
}) => {
	return <ProductDetails product={product} products={products} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	try {
		const { data: products } = await ProductService.getAll()

		const paths = products.map((product) => {
			return {
				params: { slug: product.slug }
			}
		})

		return {
			paths,
			fallback: 'blocking'
		}
	} catch (error) {
		return {
			paths: [],
			fallback: false
		}
	}
}

export const getStaticProps: GetStaticProps<IProductDetails> = async ({
	params
}) => {
	try {
		const { data: product } =
			(await ProductService.getBySlug(String(params?.slug))) || ({} as IProduct)

		const { data: products } =
			(await ProductService.getAll()) || ([] as IProduct[])

		return {
			props: {
				product,
				products
			}
		}
	} catch (error) {
		return {
			notFound: true
		}
	}
}

export default ProductDetailsPage
