<template>
	<div class="c-reviews">
		<h2 class="font-primary font-bold text-[2.5em] mb-[1em]">
			Anmeldelser
		</h2>
		<Carousel :items="reviews" />
		<Watermark class="-top-[2em]" :name="'quote'" />
	</div>
</template>
<script setup>
defineProps({
	reviews: Array,
});
</script>
<style lang="postcss">
:where(.c-reviews) {
	@apply px-[5em] py-[5em] relative;
}
</style>
