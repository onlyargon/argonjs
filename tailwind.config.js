/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				'hazy-twist': 'hazy-twist 10s ease infinite'
			},
			keyframes: {
				'hazy-twist': {
					'0%': {
						'background-size': '600% 100%',
						'background-position': 'left center',
						'background-image':
							'linear-gradient(to right, #FF9966, #4b0a8b, #FF5E62, #FF9966, #4b0a8b, #FF5E62, #FF9966)',
						filter: 'blur(0)'
					},
					'50%': {
						'background-size': '600% 100%',
						'background-position': 'right center',
						'background-image':
							'linear-gradient(to right, #FF9966, #4b0a8b, #FF5E62, #FF9966, #4b0a8b, #FF5E62, #FF9966)',
						filter: 'blur(0)'
					},
					'100%': {
						'background-size': '600% 100%',
						'background-position': 'left center',
						'background-image':
							'linear-gradient(to right, #FF9966, #4b0a8b, #FF5E62, #FF9966, #4b0a8b, #FF5E62, #FF9966)',
						filter: 'blur(0)'
					}
				}
			}
		}
	},
	plugins: []
};
