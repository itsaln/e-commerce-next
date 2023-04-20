import { IProduct } from '@/types/product.interface'
import { IReview } from '@/types/reviews.interface'

export const reviews: IReview[] = [
	{
		id: 1,
		product: {} as IProduct,
		rating: 4,
		text: 'Lorem ipsum dolor sit amet, consectetur adip 1'
	},
	{
		id: 2,
		product: {} as IProduct,
		rating: 2,
		text: 'Lorem ipsum dolor sit amet, consectetur adip 2'
	},
	{
		id: 3,
		product: {} as IProduct,
		rating: 3,
		text: 'Lorem ipsum dolor sit amet, consectetur adip 3'
	}
]
