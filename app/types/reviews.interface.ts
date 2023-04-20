import { IProduct } from '@/types/product.interface'

export interface IReview {
	id: number
	// user
	product: IProduct
	text: string
	rating: number
}
