/** @type {import('tailwindcss').Config} */
export const content = [
	'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'
];
export const theme = {
	extend: {
		keyframes: {
			scale: {
			  '0%': { transform: 'scale(1)' },
			  '50%': { transform: 'scale(1.10)' },
			  '100%': { transform: 'scale(1.20)' },
			},
		  },
		  animation: {
			scale: 'scale 0.3s ease forwards',
		  },
	},
};
export const plugins = [
	require('flowbite/plugin')
];
