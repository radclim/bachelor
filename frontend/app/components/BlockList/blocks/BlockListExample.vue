<template>
	<div class="c-block-list-example">
		<h2 v-html="title"></h2>
		<div v-html="text"></div>
	</div>
</template>

<script setup>
defineProps({
	title: String,
	text: String,
});
</script>

<style lang="postcss"></style>
