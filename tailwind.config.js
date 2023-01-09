const colors = require('tailwindcss/colors')

const constants = {
	red: '#f23c3d',
	green: '#008d64',
	'dark-green': '#006044',
	'light-green': '#e6f2ef',
	black: '#222222',
	'light-gray': '#e8e7e3',
	white: '#ffffff',
	beige: '#a49b8f'
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
			}
		}
	},
	plugins: []
}
