<template>
	<div class="c-about">
		<h2 class="font-primary font-bold text-[1.5rem] mb-[1em]">
			{{ content.title }}
		</h2>
		<p
			class="font-primary text-[1rem] relative z-2"
			v-html="content.text"
		></p>
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
	@apply >=1280:(px-[4em] pb-[4em]) >=1024:px-[2em] px-[1em] pb-[2em] relative;
}
</style>
