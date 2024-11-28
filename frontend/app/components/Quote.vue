<template>
	<div class="c-quote">
		<p
			class="text-black font-quote italic text-[2em] leading-[1em] relative z-5"
		>
			{{ content.text }}
		</p>
		<Watermark class="-top-[20%]" :name="'bullseye'" />
	</div>
</template>
<script setup>
defineProps({
	content: Object,
});
</script>
<style lang="postcss">
:where(.c-quote) {
	@apply px-[10em] py-[5em] relative;
}
</style>
