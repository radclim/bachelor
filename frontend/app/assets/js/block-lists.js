import { defineAsyncComponent } from 'vue';
const BLOCK_LIST = {
	// Plop: block-list - add block
	blockExample: defineAsyncComponent(
		() => import('~/components/BlockList/blocks/BlockListExample.vue')
	),
};

export const getBlockNameFromAlias = (alias) => {
	const toPascalCase = (str) =>
		(str.match(/[a-zA-Z0-9]+/g) || [])
			.map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
			.join('');
	return `BlockList${toPascalCase(alias)}`;
};
export const getBlockList = () =>
	Object.entries(BLOCK_LIST).reduce(
		(acc, [alias, component]) => ({
			...acc,

			[getBlockNameFromAlias(alias)]: component,
		}),
		{}
	);
