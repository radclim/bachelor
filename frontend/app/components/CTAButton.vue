<template>
	<div class="c-cta-button">
		<nuxt-link
			:to="
				url
					? url
					: 'https://www.facebook.com/messages/t/110707600446938'
			"
			:target="internal ? '' : '_blank'"
			class="block py-1em w-10em"
			>{{ text }}</nuxt-link
		>
	</div>
</template>
<script setup>
defineProps({
	text: String,
	url: String,
	internal: Boolean,
});
</script>
<style lang="postcss">
:where(.c-cta-button) {
	@apply font-primary font-semibold text-black block w-[10em] h-fit text-center rounded-5px transition-all duration-300 ease hover:cursor-pointer;
}
</style>
