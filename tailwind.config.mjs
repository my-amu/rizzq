/** @type {Config} */
/** @typedef {import('rippleui').Config} Config */
/** @typedef {import('tailwindcss').Config} Config */

const {
	iconsPlugin,
	getIconCollections,
} = require("@egoist/tailwindcss-icons");

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require('rippleui'),

		iconsPlugin({
			// Select the icon collections you want to use
			// You can also ignore this option to automatically discover all individual icon packages you have installed
			// If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
			collections: getIconCollections(["mdi", "hugeicons"]),
			// If you want to use all icons from @iconify/json, you can do this:
			// collections: getIconCollections("all"),
			// and the more recommended way is to use `dynamicIconsPlugin`, see below.
		}),
	],

	/** @type {Config} */
	rippleui: {
		// removeThemes: ["light", "dark"],
	},
};
