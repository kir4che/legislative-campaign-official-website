/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			height: {
				screen: 'calc(100vh - 40px)',
			},
			padding: {
				22: '5.5rem',
				26: '6.5rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			fontFamily: {
				MantouSans: ['MantouSans', 'sans-serif'],
			},
			fontSize: {
				'2.5xl': '1.75rem',
				'3xl': '2rem',
				'4xl': '2.5rem',
				'5.5xl': '3.25rem',
				'6xl': '4rem',
			},
			colors: {
				'primary-color': '#DA7D4A',
				'gradient-color-1': '#E5793B',
				'gradient-color-2': '#FF4185',
				'text-color': '#334155',
				'text-color-secondary': '#94A3B8',
				'bg-color-1': '#FDFCFB',
				'bg-color-2': '#F7ECE1',
			},
			keyframes: {
				overlayShow: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				contentShow: {
					from: { opacity: 0, transform: 'translate(-50%, -48%) scale(0.96)' },
					to: { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
				},
			},
			animation: {
				overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
				contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
			},
		},
	},
	plugins: [],
}
