// import { hexToRgb } from './utilities/colors';

/*
	The default config should typically be set as the values of
	the main solution. These can then be overwritten by the values
	coming from backend or solution-specific files (handled in the
	ThemeConfiguration.vue component).

	Only the keys in this default file will be the grounds for unoCSS
	rules - overwriting configurations should never introduce new keys,
	unless they are added to this file too. Only the values of the keys
	are overwritten.
*/
export default {
	// Testing only - set to false when done testing
	minify: true, // Can be turned to false for a more readable output in the style tag

	// Setup
	baseFontSize: 16, // For rem conversion
	smViewport: 375, // Lowest value clamp
	mdViewport: 1440, // Midpoint (used for both low-clamp and high-clamp)
	lgViewport: 1920, // Highest value clamp

	// Rules
	colors: {
		/*
			CSS variables will be created and used for the colors,
			which will in turn be used in the unoCSS config as rules.

			If your color refer to a CSS variable, and the CSS variable
			is a comma-separated list of rgb values, you can set the
			color as an object instead as exemplified below.
		*/
		// color1: '#000000',
		// color2: hexToRgb('#000000'),
		// color3: {
		// 	value: 'var(--some-value)',
		// 	isListedRgb: true,
		// },
	},
	// You can also set background colors, text colors and border colors separately
	// backgroundColors: {},
	// textColors: {},
	// borderColors: {},

	// Layout rules are for the side margins, gutters, for generating column rules and for the layout max if any.
	layout: {
		margin: {
			sm: 0,
			md: 0,
			lg: 0,
		},

		gutter: {
			sm: 0,
			md: 0,
			lg: 0,
		},

		// These rules will be turned into `X/Ycol` rules, which can then be used like `w-3/12col`.
		// There should always be at least one column, both on sm, md and lg.
		columns: {
			sm: 12,
			md: 12,
			lg: 12,
		},

		// The max value that the design can be scaled to (single value, not sm-md-lg).
		// The max will impact columns max scaling as well.
		// undefined equals no max.
		max: undefined,
	},

	spacing: {
		// sm: {
		// 	sm: 16,
		// 	md: 16,
		// 	lg: 20,
		// },
	},
	// Specific horizontal and vertical spacing can be set
	// horizontalSpacing: {
	// 	sm: {
	// 		sm: 16,
	// 		md: 16,
	// 		lg: 20,
	// 	},
	// },
	// verticalSpacing: {
	// 	sm: {
	// 		sm: 16,
	// 		md: 16,
	// 		lg: 20,
	// 	},
	// },

	fontSize: {
		// 'simple-example-rule': { // Used as text-simple-example-rule
		// 	sm: 16,
		// 	md: 16,
		// 	lg: 20,
		// },
		// 'complex-example-rule': { // Used as text-complex-example-rule (will also set line height and letter spacing)
		// 	fontSize: {
		// 		sm: 30,
		// 		md: 48,
		// 		lg: 64,
		// 	},
		// 	lineHeight: {
		// 		sm: 1.2,
		// 		md: 1.2,
		// 		lg: 1.2,
		// 	},
		// 	letterSpacing: {
		// 		sm: -0.5,
		// 		md: -1,
		// 		lg: -0.5,
		// 	},
		// },
	},
};
