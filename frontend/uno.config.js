import { defineConfig } from 'unocss';
import presetCore from '@limbo-works/nuxt-core/assets/js/unocss/preset-core.mjs';
import transformerVariantGroup from '@unocss/transformer-variant-group';
import transformerDirectives from '@limbo-works/nuxt-core/assets/js/unocss/TransformerDirectives/index.mjs';
import {
	makeThemeUtilities,
	makeRules,
} from '@limbo-works/theme-configuration/components/ThemeConfiguration/helpers.uno.js';
import defaultConfig from './app/assets/js/theme-configuration.default.js';
import breakpoints from './app/assets/js/breakpoints.js';

export default defineConfig({
	presets: [
		presetCore({
			breakpoints,
		}),
	],
	transformers: [transformerVariantGroup(), transformerDirectives()],

	theme: { ...makeThemeUtilities(defaultConfig) },
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
