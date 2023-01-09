import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { Button, HStack, Input, useNumberInput } from '@chakra-ui/react'
import { FC } from 'react'

const CartActions: FC = () => {
	const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
		useNumberInput({
			step: 1,
			defaultValue: 1,
			min: 1
		})

	const inc = getIncrementButtonProps()
	const dec = getDecrementButtonProps()
	const input = getInputProps()

	return (
		<div className='mt-3'>
			<HStack maxW='320px'>
				<Button {...dec}>
					<MinusIcon fontSize={13} />
				</Button>

				<Input
					{...input}
					focusBorderColor='green.400'
					readOnly
					_hover={{
						cursor: 'default'
					}}
				/>

				<Button {...inc}>
					<AddIcon fontSize={13} />
				</Button>
			</HStack>

			<Button
				variant='unstyled'
				color='#f23c3d'
				marginTop={2}
				size='sm'
				opacity={0.8}
			>
				Remove
			</Button>
		</div>
	)
}

export default CartActions
