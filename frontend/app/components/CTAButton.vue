<template>
	<div class="c-cta-button">
		<nuxt-link
			:to="
				url
					? url
					: 'https://www.facebook.com/messages/t/110707600446938'
			"
			:target="internal ? '' : '_blank'"
			class="block pt-1em pb-1em min-w-8em"
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
	@apply flex justify-center font-primary font-semibold text-black block h-fit text-center rounded-5px transition-all duration-300 ease hover:(cursor-pointer scale-99);
}
</style>
