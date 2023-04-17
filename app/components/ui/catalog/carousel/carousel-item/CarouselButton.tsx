import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/config/colors.config'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { TypeSize } from '@/store/cart/cart.types'
import { IProduct } from '@/types/product.interface'

interface ICarouselButton {
	product: IProduct
	selectedSize: TypeSize
}

const CarouselButton: FC<ICarouselButton> = ({ product, selectedSize }) => {
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()

	const currentElement = cart.find(
		(cartItem) =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	)

	// TODO: Change button to remove from cart

	return (
		<div className='text-center'>
			<Button
				onClick={() =>
					currentElement
						? removeFromCart({ id: currentElement.id })
						: addToCart({
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
				{currentElement ? 'Remove from basket' : 'Add to basket'}
			</Button>
		</div>
	)
}

export default CarouselButton
