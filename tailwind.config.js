/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';

module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			maxWidth: {
				'8xl': '81.3rem'
			},
			fontFamily: {
				ProtestGuerrilla: ['"Protest Guerrilla"', 'sans-serif']
			}
		}
	},
	darkMode: 'class',
	plugins: [nextui()]
};
