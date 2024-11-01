<template>
	<div class="c-block-list-placeholder">
		<span>[block] {{ alias }}</span>

		<p class="c-block-list-placeholder__content">
			{{ content }}
		</p>
	</div>
</template>

<script>
export default {
	name: 'BlockListPlaceholder',

	props: {
		alias: String,
		content: Object,
	},
};
</script>

<style>
.c-block-list-placeholder {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	color: black;
	font-family: monospace;
	background: white;
	border: 1px dashed black;
}

.c-block-list-placeholder__content {
	width: 100%;
	max-width: 800px;
	max-height: 240px;
	overflow: scroll;
	background-color: rgb(235, 235, 235);
	border: 1px dashed rgb(115, 115, 115);
}
</style>
