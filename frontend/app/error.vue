<template>
	<ThemeConfiguration css-layer="theme-config" />
	<SiteHeader
		v-if="content && content.headerContent"
		:links="content.headerContent"
	/>
	<main id="main" class="py-10em text-center">
		<h1 class="font-quote italic text-3em leading-3em">
			Denne side findes ikke.
		</h1>
		<p class="font-primary text-1.2em">
			Vend tilbage til hjemmesiden
			<nuxt-link to="/" class="underline font-600">her</nuxt-link>.
			<br />Hvis du har spørgsmål eller støder på problemer, er du altid
			velkommen til at kontakte mig
			<nuxt-link
				to="https://www.facebook.com/messages/t/110707600446938"
				class="underline font-600"
				target="_blank"
				>her</nuxt-link
			>.
		</p>
	</main>
	<Footer
		v-if="content && content.footerContent"
		id="contact"
		:content="content.footerContent"
	/>
</template>

<script setup>
// Replaces the whole app, so if you need site data, you need to fetch it here as well
// https://nuxt.com/docs/getting-started/error-handling#example
import { useMainStore } from '~/store/main';
import content from '~/data/content.js';

const route = useRoute();

// Fetch site data
if (import.meta.server) {
	const { $umbracoClient } = useNuxtApp();
	let data = await $umbracoClient.fetchData({
		params: {
			...route.query,
			cache: false,
			parts: ['site'],
		},
		route: route.fullPath,
	});

	if (data.site) {
		const main = useMainStore();
		main.setSiteData(data.site);
	}
}

const props = defineProps({
	error: Object,
});
</script>
