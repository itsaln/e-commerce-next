import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import MenuItem from '@/layout/header/menu/menu-item/MenuItem'
import { menu } from '@/layout/header/menu/menu.data'

import styles from './Menu.module.scss'

const Menu: FC = () => {
	return (
		<div className={styles.menu}>
			<Link href='/'>
				<Image
					src='/images/logo.png'
					width={100}
					height={100}
					alt='Xmas shop'
				/>
			</Link>

			<nav>
				<ul>
					{menu.map((item) => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Menu
