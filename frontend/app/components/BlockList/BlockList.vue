<template>
	<div v-if="blocks && blocks.length" class="c-block-list">
		<template v-for="block in blocks">
			<Component
				:is="getBlockNameFromAlias(block.alias)"
				v-if="blockExists(block.alias)"
				:key="block.key"
				v-bind="{
					settings: block.settings,
					...(block.content || {}),
				}"
			/>

			<BlockListPlaceholder
				v-else-if="isDevelopment"
				:key="block.key"
				v-bind="block"
			/>
		</template>
	</div>
</template>

<script>
import BlockListPlaceholder from './blocks/BlockListPlaceholder.vue';

import { getBlockNameFromAlias, getBlockList } from '~/assets/js/block-lists';

const blocks = getBlockList();
const blockNames = Object.keys(blocks);

export default {
	name: 'BlockList',

	components: {
		BlockListPlaceholder,
		...blocks,
	},

	props: {
		blockList: {
			type: Array,
			default: () => [],
		},
	},

	data() {
		return {
			isDevelopment: process.env.NODE_ENV === 'development',
		};
	},

	computed: {
		blocks() {
			return (this.blockList ?? []).filter((block) => {
				if (!block || block?.content?.deactivated === true) {
					return false;
				}

				if (block?.alias && block?.content && block?.key) {
					return true;
				} else if (process.env.NODE_ENV === 'development') {
					console.warn(
						`[BlockList] ${block.alias} has missing or faulty data:`,
						block
					);
				}

				return false;
			});
		},
	},

	methods: {
		getBlockNameFromAlias,

		blockExists(alias) {
			return blockNames.includes(getBlockNameFromAlias(alias));
		},
	},
};
</script>

<style lang="postcss">
.c-block-list {
}
</style>
