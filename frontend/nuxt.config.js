import { fileURLToPath } from 'node:url';
import breakpoints from './app/assets/js/breakpoints';

const mappedBreakpoints = {};
for (const [key, value] of Object.entries(breakpoints)) {
	mappedBreakpoints[`>=${key}`] = value.px;
}

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	extends: ['@limbo-works/theme-configuration', '@limbo-works/nuxt-core'],

	future: {
		compatibilityVersion: 4,
	},

	vite: {
		resolve: {
			alias: {
				path: 'path-browserify',
			},
		},
	},

	/* The fileURLToPath is necessary if the solution is to be extendable and keep that css */
	css: [
		fileURLToPath(new URL('./app/assets/css/index.css', import.meta.url)),
	],

	app: {
		head: {
			meta: [{ name: 'format-detection', content: 'telephone=no' }],
		},
	},

	modules: ['@limbo-works/umbraco-get-data', '@unocss/nuxt'],

	buildModules: [],
	plugins: [],

	image: {
		screens: {
			...mappedBreakpoints,
		},
	},

	nitro: {
		compressPublicAssets: true,
	},

	runtimeConfig: {
		// These values are protected
		formApiKey: '',
		// ...

		public: {
			apiDomain: '',
			appHost: '',
			// These values are not protected
			// ... (nuxt-core supplies apiDomain and appHost already)
		},
	},

	compatibilityDate: '2024-09-03',
});
