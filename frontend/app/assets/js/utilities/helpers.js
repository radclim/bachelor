import breakpoints from '~/assets/js/breakpoints';

/**
 * Method to compare to URL paths.
 * @param {string} a First path.
 * @param {string} b Second path.
 * @param {boolean} [ignoreQueryParams=true]
 * @returns {boolean}
 */
export function comparePaths(a, b, ignoreQueryParams = true) {
	if (a?.length && b?.length) {
		const splitRegex = /([^?]*)\??(.*)/;
		let [, aPath, aQuery] = a.match(splitRegex);
		let [, bPath, bQuery] = b.match(splitRegex);
		aPath = aPath.split('/').filter(Boolean);
		bPath = bPath.split('/').filter(Boolean);

		const aCompare = [aPath, !ignoreQueryParams && aQuery];
		const bCompare = [bPath, !ignoreQueryParams && bQuery];
		return aCompare.join('') === bCompare.join('');
	}

	return false;
}

/**
 * Helper to smartly fill in responsive sizes for images.
 * @param {string} sizes The sizes to fill in between.
 */
export function nuxtImgSizes(sizes) {
	let breakpointList = Object.entries(breakpoints)
		.map(([key, value]) => parseInt(value?.px))
		.filter((val) => Boolean(val) || val === 0);
	if (sizes) {
		const splitSizes = sizes.split(' ').filter((val) => {
			return Boolean(val) && val.split(':').filter(Boolean).length === 2;
		});
		splitSizes.sort((a, b) => {
			a = parseInt(a.split(':')[0].replace(/\D/g, ''), 10);
			b = parseInt(b.split(':')[0].replace(/\D/g, ''), 10);

			return a - b;
		});

		if (sizes.includes('vw') && breakpointList.length) {
			const output = [];

			for (let i = 0; i < splitSizes.length; i++) {
				const size = splitSizes[i].split(':')[1];
				const breakpoint = parseInt(
					splitSizes[i].split(':')[0].replace(/\D/g, ''),
					10
				);

				if (splitSizes[i].includes('vw')) {
					const midList = breakpointList
						.filter((val) => val < breakpoint)
						.map((val) => {
							return `<${val}:${size}`;
						});
					midList.length && output.push(...midList);
				}

				breakpointList = breakpointList.filter(
					(val) => val > breakpoint
				);
				output.push(splitSizes[i]);
			}
			return output.join(' ');
		}
		return splitSizes.join(' ');
	}
	return sizes;
}

// And here we export all the helpers as well
export default { comparePaths, nuxtImgSizes };
