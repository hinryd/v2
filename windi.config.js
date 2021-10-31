import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	darkMode: 'class',
	attributify: {
		prefix: 'w-'
	},
	theme: {
		extend: {
			animation: {
				gradx: 'gradx 3s ease infinite',
				blob: 'blob 7s infinite'
			},
			keyframes: {
				gradx: {
					'0%, 100%': {
						'background-size': '400% 400%',
						'background-position': '0% 50%'
					},
					'50%': {
						'background-size': '400% 400%',
						'background-position': '100% 50%'
					}
				},
				blob: {
					'0%': {
						transform: 'translate(0px, 0px) scale(1)'
					},
					'33%': {
						transform: 'translate(30px, -50px) scale(1.1)'
					},
					'66%': {
						transform: 'translate(-20px, 20px) scale(0.9)'
					},
					'100%': {
						transform: 'tranlate(0px, 0px) scale(1)'
					}
				}
			}
		}
	}
});
