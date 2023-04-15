import { ICartItem } from '@/types/cart.interface'
import { products } from '@/data/product.data'

export const cart: ICartItem[] = [
	{
		id: 1,
		quantity: 1,
		product: products[0],
		size: 'GRANDE'
	},
	{
		id: 2,
		quantity: 1,
		product: products[1],
		size: 'TALL'
	},
	{
		id: 3,
		quantity: 1,
		product: products[2],
		size: 'SHORT'
	},
	{
		id: 4,
		quantity: 1,
		product: products[3],
		size: 'VENTI'
	}
]
