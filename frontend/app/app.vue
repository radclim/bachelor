<template>
	<div id="app">
		<ThemeConfiguration css-layer="theme-config" />
		<SiteHeader />

		<main id="main">
			<NuxtPage />
		</main>
	</div>

	<GlobalOverlay id="global-overlay" :target-list="['app']" />
</template>

<script setup>
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
</script>
