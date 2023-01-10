import {
	Button,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay
} from '@chakra-ui/react'
import { FC, useRef, useState } from 'react'

import CartItem from '@/layout/header/cart/cart-item/CartItem'

import { useTypedSelector } from '@/hooks/useTypedSelector'

import styles from './Cart.module.scss'

// TODO: Add redux

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const btnRef = useRef<HTMLButtonElement>(null)

	const cart = useTypedSelector((state) => state.cart.items)

	return (
		<div className={styles['wrapper-cart']}>
			<button className={styles.heading} onClick={() => setIsOpen(!isOpen)}>
				<span className={styles.badge}>1</span>
				<span className={styles.text}>My Basket</span>
			</button>

			{isOpen && (
				<Drawer
					isOpen={isOpen}
					placement='right'
					onClose={() => setIsOpen(false)}
					finalFocusRef={btnRef}
				>
					<DrawerOverlay />
					<DrawerContent>
						<DrawerCloseButton />
						<DrawerHeader>My cart</DrawerHeader>

						<DrawerBody>
							<div className={styles.cart}>
								{cart.map((item) => (
									<CartItem key={item.id} item={item} />
								))}
							</div>
						</DrawerBody>

						<DrawerFooter
							justifyContent='space-between'
							borderTopWidth={1}
							borderTopColor='#f7f4f0'
						>
							<div className={styles.footer}>
								<div>Total:</div>
								<div>$100</div>
							</div>
							<Button colorScheme='green'>Checkout</Button>
						</DrawerFooter>
					</DrawerContent>
				</Drawer>
			)}
		</div>
	)
}

export default Cart
