<template>
	<div class="c-cta-button">
		<button v-html="text"></button>
	</div>
</template>
<script setup>
defineProps({
	text: String,
});
</script>
<style lang="postcss">
:where(.c-cta-button) {
	@apply font-primary font-semibold text-black py-[1em] w-[10em] h-fit text-center rounded-5px transition-all duration-300 ease hover:cursor-pointer;
}
</style>
