/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: { sans: ['Inter'] },
			colors: { bg: '#0C0E10' },
			keyframes: {
				wave: {
					'0%, 60%, 100%': { transform: 'rotate(0.0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10.0deg)' },
				},
				gradient: {
					'0%, 100%': {
						'background-size': '400% 400%',
						'background-position': 'left center',
					},
					'50%': {
						'background-size': '400% 400%',
						'background-position': 'right center',
					},
				},
			},
			animation: {
				'waving-hand': 'wave 2s infinite linear',
				gradient: 'gradient 5s infinite ease-in-out',
			},
			screens: {
				xs: '475px',
				'2xs': '320px',
			},
		},
	},
	plugins: [],
	future: {
		hoverOnlyWhenSupported: true,
	},
}
