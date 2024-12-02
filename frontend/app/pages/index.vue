<template>
	<div class="p-index">
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
</script>
<style lang="postcss">
* {
	scroll-behavior: smooth;
}
:where(.p-index) {
	@apply bg-white;
}
</style>
