<template>
	<ThemeConfiguration css-layer="theme-config" />
	<SiteHeader />

	<main id="main">
		<h1>{{ error.statusCode }}, {{ error.message }}</h1>
		<p>{{ error.statusMessage }}</p>
	</main>
</template>

<script setup>
// Replaces the whole app, so if you need site data, you need to fetch it here as well
// https://nuxt.com/docs/getting-started/error-handling#example
import { useMainStore } from '~/store/main';
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
