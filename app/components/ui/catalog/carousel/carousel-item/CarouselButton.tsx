import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/config/colors.config'

import { useActions } from '@/hooks/useActions'

import { TypeSize } from '@/store/types'
import { IProduct } from '@/types/product.interface'

interface ICarouselButton {
	product: IProduct
	selectedSize: TypeSize
}

const CarouselButton: FC<ICarouselButton> = ({ product, selectedSize }) => {
	const { addToCart } = useActions()

	// TODO: Change button to remove from cart

	return (
		<div className='text-center'>
			<Button
				onClick={() =>
					addToCart({
						product,
						quantity: 1,
						size: selectedSize
					})
				}
				color={COLORS.green}
				className='tracking-widest'
				marginTop={8}
				borderRadius={20}
				fontSize={12}
				fontWeight={500}
				textTransform='uppercase'
				textAlign='center'
			>
				Add to basket
			</Button>
		</div>
	)
}

export default CarouselButton
