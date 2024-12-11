<template>
	<div class="c-reviews">
		<h2 class="font-primary font-bold text-[1.5rem] mb-[1em]">
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
	@apply >=1280:p-[4em] >=1024:px-[2em] px-[1em] py-[2em] relative overflow-hidden;
}
</style>
