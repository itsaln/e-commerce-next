import { ICartItem } from '@/types/cart.interface'
import { products } from '@/data/product.data'

export const cart: ICartItem[] = [
	{
		id: 1,
		quantity: 1,
		product: products[0]
	},
	{
		id: 2,
		quantity: 1,
		product: products[1]
	},
	{
		id: 3,
		quantity: 1,
		product: products[2]
	},
	{
		id: 4,
		quantity: 1,
		product: products[3]
	}
]
