<template>
	<div class="c-gallery">
		<div
			v-for="(image, index) in images"
			:key="index"
			class="relative"
			:class="{
				'>=1920:h-[30em] >=605:( h-[20em]) w-33%': images.length == 3,
				'>=1920:h-[50em] >=605:( h-[30em]) w-50%': images.length == 2,
			}"
		>
			<img
				:src="image.url"
				:alt="image.alt"
				class="h-full w-full object-cover object-center"
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
	@apply relative flex flex-row w-100vw z-2 gap-[0.5em] justify-center;
}
</style>
