const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,css}'],
	theme: {
    fontFamily: {
      sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
    },
		extend: {
      backgroundImage: {
        'blockchain-image': 'url(/background.png)',
      },
    }
	},
	plugins: []
};
