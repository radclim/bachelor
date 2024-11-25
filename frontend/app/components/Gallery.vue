<template>
	<div class="c-gallery">
		<div
			v-for="(image, index) in images"
			:key="index"
			class="relative"
			:class="{
				'w-33% h-[30em]': images.length == 3,
				'w-50% h-[40em]': images.length == 2,
			}"
		>
			<img
				:src="image.url"
				:alt="image.alt"
				class="h-full w-full object-cover"
			/>
			<div class="absolute inset-0 z-1 bg-blue/25"></div>
		</div>
	</div>
</template>
<script setup>
defineProps({
	images: Array,
});
</script>
<style lang="postcss">
:where(.c-gallery) {
	@apply flex flex-row w-100vw  gap-[0.5em] justify-center;
}
</style>
