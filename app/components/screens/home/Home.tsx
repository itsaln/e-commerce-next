import { FC } from 'react'

import Layout from '@/layout/Layout'

import Catalog from '@/ui/catalog/Catalog'
import Heading from '@/ui/heading/Heading'

import { IHome } from '@/screens/home/home.interface'

const Home: FC<IHome> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Heading className='max-w-[600px] text-right ml-auto'>
				The happiest hour of the year
			</Heading>
			<Catalog products={products} />
		</Layout>
	)
}

export default Home
