import { GetStaticProps, NextPage } from 'next'

import Home from '@/screens/home/Home'
import { IHome } from '@/screens/home/home.interface'
import { ProductService } from '@/services/product.service'

const HomePage: NextPage<IHome> = ({ products }) => {
	return <Home products={products} />
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const { data: products } = await ProductService.getAll()

		return {
			props: {
				products
			} as IHome,
			revalidate: 60
		}
	} catch (error) {
		return {
			props: {
				products: []
			}
		}
	}
}

export default HomePage
