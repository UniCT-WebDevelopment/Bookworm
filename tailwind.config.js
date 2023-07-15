/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			"light",
			"dark",
			"cupcake",
			"coffee",
			"pastel",
			"halloween",
			{
				bookworm: {
					"primary": "#84A59D",
					"primary-focus": "#6C8B84",
					"primary-content": "#ffffff",
					"secondary": "#F28482",
					"secondary-focus": "#F28482",
					"secondary-content": "#ffffff",
					"accent": "#F6BD60",
					"accent-focus": "#F6BD60",
					"accent-content": "#F2F5FF",
					"neutral": "#f9f5f1",
					"neutral-focus": "#F2F5FF",
					"neutral-content": "#1f2937",
					"base-100": "#ffffff",
					"base-200": "#f9fafb",
					"base-300": "#d1d5db",
					"base-content": "#1f2937",
					"info": "#2094f3",
					"success": "#009485",
					"warning": "#ff9900",
					"error": "#ff5724"
				},
			},
		],
	},
}
