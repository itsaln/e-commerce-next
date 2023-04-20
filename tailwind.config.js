const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

const constants = {
	red: '#f23c3d',
	green: '#008d64',
	'dark-green': '#006044',
	'light-green': '#e6f2ef',
	black: '#222222',
	'light-gray': '#e8e7e3',
	white: '#ffffff',
	beige: '#a49b8f',
	'dark-beige': '#6B655D',
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		colors: {
			transparent: colors.transparent,
			...constants
		},
		extend: {
			fontSize: {
				xs: '0.82rem',
				sm: '0.98rem',
				base: '1.15rem',
				lg: '1.22rem',
				xl: '1.36rem',
				'1.5xl': '1.5rem',
				'2xl': '1.725rem',
				'3xl': '2.155rem',
				'4xl': '2.58rem',
				'5xl': '3.45rem',
				'6xl': '4.3rem',
				'7xl': '5.17rem',
				'8xl': '6.9rem',
				'9xl': '9.2rem'
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3'
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .6s',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.truncate-1': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '1',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-2': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '2',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-3': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '3',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				},
				'.truncate-4': {
					display: '-webkit-box !important',
					'-webkit-line-clamp': '4',
					'-webkit-box-orient': 'vertical',
					textOverflow: 'ellipsis',
					overflow: 'hidden'
				}
			})
			addUtilities({})
		})
	]
}
