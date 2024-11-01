<template>
	<Component :is="doctype" v-if="doctype" v-bind="content" />
</template>

<script setup>
import { useMainStore } from '~/store/main';
import doctypes, { getDoctypeFromTemplate } from '~/assets/js/doctypes';
const main = useMainStore();
const route = useRoute();

// Nuxt meta information for component
definePageMeta({
	// Set whatever layout you want the page to use or get it based on the template
	layout: false,
	key: (route) => route.path,
});

// Fetch data for the page
const { $umbracoClient } = useNuxtApp();
let data = await $umbracoClient.fetchData({
	params: {
		...route.query,
		cache: false,
		parts: ['content'],
	},
	route: route.path,
});

// Process the data
let { content } = reactive($umbracoClient.processData(data));

// Error handling
if (data?.meta?.code === 301 || data?.meta?.code === 302) {
	// Redirects – we replace the url as to not repeat the redirect in the browser history
	const url = new URL(data.data.url, 'https://www.example.com');
	navigateTo(url.pathname, {
		redirectCode: data.meta.code,
		replace: true,
	});
} else if (data?.meta?.code >= 400 && data.meta.code < 500) {
	// Standard 404 error
	setResponseStatus(data?.meta?.code ?? 404);
	throw createError({
		statusCode: data?.meta?.code ?? 404,
		statusMessage: 'Page Not Found',
		fatal: true,
	});
} else if (!content) {
	// Catch-all for all other errors
	setResponseStatus(data?.meta?.code ?? 500);
	throw createError({
		statusCode: data?.meta?.code ?? 500,
		statusMessage: 'Internal Server Error',
		fatal: true,
	});
}

// Page meta information
const templateName = getDoctypeFromTemplate(content?.template);

main.setPageId(content?.id);

useHead({
	...(content?.meta || {}),
	htmlAttrs: {
		...(content?.meta?.htmlAttrs || {}),
	},
});

const doctype = templateName
	? doctypes[
		Object.keys(doctypes).includes(templateName)
			? templateName
			: 'placeholderPage' // Fallback
	]
	: undefined;
</script>
