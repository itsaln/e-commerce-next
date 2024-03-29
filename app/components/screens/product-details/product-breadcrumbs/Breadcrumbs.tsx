import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'

import { IProduct } from '@/types/product.interface'

const Breadcrumbs: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<Breadcrumb display='flex' justifyContent='end' marginTop={8} color='#555'>
			<BreadcrumbItem>
				<BreadcrumbLink as={Link} href='/'>
					Catalog
				</BreadcrumbLink>
			</BreadcrumbItem>
			<BreadcrumbItem isCurrentPage>
				<BreadcrumbLink
					_hover={{
						textDecoration: 'none'
					}}
					cursor='default'
					color='#666'
				>
					{product.name}
				</BreadcrumbLink>
			</BreadcrumbItem>
		</Breadcrumb>
	)
}

export default Breadcrumbs
