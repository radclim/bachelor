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
	@apply absolute right-[15em] w-[20em] -z-1 opacity-20;
}
</style>
