<template>
	<article class="d-content-page">
		<header>
			<h1 v-html="title"></h1>
		</header>

		Hey! ContentPage {{ id }} {{ header?.image?.cropUrl }}

		<BlockList :block-list="contentElements" class="w-full" />
	</article>
</template>

<script>
export default {
	inheritAttrs: false,
};
</script>

<script setup>
defineProps({
	id: Number,
	title: String,
	header: Object,
	contentElements: Array,
});
</script>
