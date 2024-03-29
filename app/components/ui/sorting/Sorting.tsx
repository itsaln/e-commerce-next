import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { Dispatch, FC, SetStateAction } from 'react'

import { sortingData } from '@/ui/sorting/sorting.data'
import { EnumSorting } from '@/ui/sorting/sorting.interface'

interface ISorting {
	sortType: EnumSorting
	setSortType: Dispatch<SetStateAction<EnumSorting>>
}

const Sorting: FC<ISorting> = ({ sortType, setSortType }) => {
	return (
		<Menu placement='start-start'>
			<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
				{sortingData.find((sort) => sort.value === sortType)?.label}
			</MenuButton>
			<MenuList>
				{sortingData.map((sort, index) => (
					<MenuItem
						key={`${sort.value}_${index}`}
						onClick={() => setSortType(sort.value)}
					>
						{sort.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	)
}

export default Sorting
