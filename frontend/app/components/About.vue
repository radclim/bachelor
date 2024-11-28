<template>
	<div class="c-about">
		<h2 class="font-primary font-bold text-[2.5em] mb-[1em]">
			{{ content.title }}
		</h2>
		<p class="font-primary text-[1.2em]" v-html="content.text"></p>
		<Watermark class="-top-[2em]" :name="'info'" />
	</div>
</template>
<script setup>
defineProps({
	content: Object,
});
</script>
<style lang="postcss">
:where(.c-about) {
	@apply px-[5em] pb-[5em] relative;
}
</style>
