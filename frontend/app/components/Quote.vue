<template>
	<div class="c-quote">
		<p
			class="text-black font-quote relative text-center italic text-1.25rem z-5 >=1280:(px-15em) p-1em >=605:(py-2em px-5em)"
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
	@apply relative overflow-hidden;
}
</style>
