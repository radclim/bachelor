<template>
	<div class="p-index">
		<SiteHeader />
		<Hero />
		<Quote />
		<Gallery :images="images" />
		<Services id="services" />
		<About id="about" />
		<Gallery :images="images2" />
		<Reviews id="reviews" />
		<Footer id="contact" />
	</div>
</template>
<script setup>
const images = [
	{
		url: '/_nuxt/assets/images/cycle.jpg',
		alt: 'To personer på indendørs cykler',
	},
	{
		url: '/_nuxt/assets/images/track.jpg',
		alt: 'Træningsudstyr liggende på en banemark',
	},
	{
		url: '/_nuxt/assets/images/stretch.jpg',
		alt: 'En person hjælper en anden med at strække ud',
	},
];
const images2 = [
	{
		url: '/_nuxt/assets/images/dennis.jpg',
		alt: 'Dennis Okholm fysioterapeut står smilende',
	},
	{
		url: '/_nuxt/assets/images/laying.jpg',
		alt: 'En person hjælper en anden liggende med at strække ud',
	},
];
</script>
<style lang="postcss">
* {
	scroll-behavior: smooth;
}
</style>
