<template>
	<div class="p-index">
		<Title
			>Muskelmekanikeren - Fysioterapi, akupunktur og personlig træning i
			Vejle</Title
		>
		<SiteHeader :links="content.headerContent" />
		<Hero id="hero" :content="content.heroContent" />
		<Quote :content="content.quoteContent" />
		<Gallery :images="content.gallery1" />
		<Services id="services" :content="content.serviceContent" />
		<About id="about" :content="content.aboutContent" />
		<Gallery :images="content.gallery2" />
		<Reviews id="reviews" :reviews="content.reviewsContent" />
		<Footer id="contact" :content="content.footerContent" />
	</div>
</template>
<script setup>
import content from '~/data/content.js';
useHead({
	htmlAttrs: {
		lang: 'en',
	},
	meta: [
		{
			name: 'description',
			content:
				'Muskelmekanikeren tilbyder professionel fysioterapi, massage og genoptræning i Vejle. Effektiv behandling til smerter og skader. Book tid i dag!',
		},
	],
});
</script>
<style lang="postcss">
* {
	scroll-behavior: smooth;
}
:where(.p-index) {
	@apply bg-white;
}
</style>
