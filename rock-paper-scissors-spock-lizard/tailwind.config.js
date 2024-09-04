/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'colors-dark-text': 'hsl(229, 25%, 31%)',
				'colors-score-text': 'hsl(229, 64%, 46%)',
				'colors-header-outline': 'hsl(217, 16%, 45%)',
			},
			backgroundImage: {
				'pentagon-background': "url('/src/assets/svg/bg-pentagon.svg')",
				'radial-background':
					'radial-gradient(circle at top,hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
				'scissors-gradient':
					'linear-gradient(hsl(39, 89%, 49%),hsl(40, 84%, 53%))',
				'paper-gradient':
					'linear-gradient(hsl(230, 89%, 62%),hsl(230, 89%, 65%))',
				'rock-gradient':
					'linear-gradient(hsl(349, 71%, 52%),hsl(349, 70%, 56%))',
				'lizard-gradient':
					'linear-gradient(hsl(261, 73%, 60%),hsl(261, 72%, 63%))',
				'cyan-gradient':
					'linear-gradient(hsl(189, 59%, 53%),hsl(189, 58%, 57%))',
			},
			screens: {
				'xxs': '0px',
				'sm': '375px',
				'2xl': '1366px',
			},
			fontFamily: {
				barlow: ['Barlow Semi Condensed', 'sans-serif'],
			},

			keyframes: {
				openModal: {
					'0%': {
						height: '0',
						width: '0',
						opacity: '0',
					},
					'1%': {
						height: '100%',
						width: '100%',
						opacity: '0',
					},
					'100%': {
						height: '100%',
						width: '100%',
						opacity: '1',
					},
				},
				closeModal: {
					'0%': {
						height: '100%',
						width: '100%',
						opacity: '1',
					},
					'99%': {
						height: '100%',
						width: '100%',
						opacity: '0',
					},
					'100%': {
						height: '0',
						width: '0',
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [],
}
