import { defineConfig } from 'unocss';
import presetWebFonts from '@unocss/preset-web-fonts';
import presetCore from '@limbo-works/nuxt-core/assets/js/unocss/preset-core.mjs';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@limbo-works/nuxt-core/assets/js/unocss/TransformerDirectives/index.mjs';
import {
	makeThemeUtilities,
	makeRules,
} from '@limbo-works/theme-configuration/components/ThemeConfiguration/helpers.uno.js';
import defaultConfig from './app/assets/js/theme-configuration.default.js';
import breakpoints from './app/assets/js/breakpoints.js';

console.log('Breakpoints:', breakpoints);

export default defineConfig({
	presets: [
		presetCore({
			breakpoints,
		}),
		presetWebFonts({
			fonts: {
				primary: [
					{
						name: 'Familjen Grotesk',
						weights: ['400', '500', '600', '700'],
					},
				],
				quote: [
					{
						name: 'Source Serif Pro',
						weights: ['300', '400', '600'],
						italic: true,
					},
				],
			},
		}),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: {
		...makeThemeUtilities(defaultConfig),
		colors: {
			blue: '#006183',
			orange: '#F7A941',
			darkOrange: '#fa920a',
			gray: '#CDCDCD',
			white: '#F2F2F2',
			black: '#1A1A1A',
			darkGray: '#212121',
		},
	},
	rules: [...makeRules(defaultConfig)],

	content: {
		pipeline: {
			exclude: [
				/* Something here is wreaking havoc with unoCSS */
				'**/ThemeConfiguration.vue',
			],
		},
	},
});
