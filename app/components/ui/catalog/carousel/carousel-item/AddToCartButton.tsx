import { Button } from '@chakra-ui/react'
import { FC } from 'react'

import { COLORS } from '@/config/colors.config'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { IProduct } from '@/types/product.interface'

import { TypeSize } from '@/store/cart/cart.types'

interface IAddToCartButton {
	product: IProduct
	selectedSize: TypeSize
	variant?: 'small' | 'medium'
}

const AddToCartButton: FC<IAddToCartButton> = ({
	product,
	selectedSize,
	variant = 'small'
}) => {
	const { addToCart, removeFromCart } = useActions()
	const { cart } = useCart()

	const currentElement = cart.find(
		(cartItem) =>
			cartItem.product.id === product.id && cartItem.size === selectedSize
	)

	const isSmall = variant === 'small'

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
				color={isSmall ? COLORS.green : COLORS.white}
				backgroundColor={isSmall ? undefined : COLORS.green}
				className='tracking-widest'
				marginTop={8}
				borderRadius={20}
				fontSize={isSmall ? 12 : 16}
				fontWeight={500}
				textTransform='uppercase'
				textAlign='center'
				_hover={{
					backgroundColor: isSmall ? undefined : COLORS['dark-green']
				}}
			>
				{currentElement ? 'Remove from basket' : 'Add to basket'}
			</Button>
		</div>
	)
}

export default AddToCartButton
