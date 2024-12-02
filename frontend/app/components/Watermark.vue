<template>
	<div class="c-watermark">
		<img :src="`/_nuxt/assets/svgs/${name}.svg`" alt="" class="" />
	</div>
</template>
<script setup>
defineProps({
	name: String,
});
</script>
<style lang="postcss">
:where(.c-watermark) {
	@apply absolute w-[15em] inset-0 m-auto z-1 opacity-50  flex justify-center items-center;
}
</style>
