<template>
	<header class="c-site-header">
		<img src="../assets/svgs/logo.svg" alt="" />
		<nav class="font-primary font-medium text-white flex gap-[5em]">
			<nuxt-link class="cursor-pointer c-site-header__link" to=""
				>Ydelser</nuxt-link
			>
			<nuxt-link class="cursor-pointer c-site-header__link" to=""
				>Om mig</nuxt-link
			>
			<nuxt-link class="cursor-pointer c-site-header__link" to=""
				>Anmeldelser</nuxt-link
			>
			<nuxt-link class="cursor-pointer c-site-header__link" to=""
				>Kontakt</nuxt-link
			>
		</nav>
		<CTAButton class="bg-orange hover:bg-darkOrange" :text="'Bestil tid'" />
	</header>
</template>

<script setup></script>
<style lang="postcss">
:where(.c-site-header) {
	@apply flex justify-between items-center  py-[1em] px-[3em] relative z-10;
}
.c-site-header__link {
	display: inline-block;
	position: relative;
}
.c-site-header__link::after {
	content: '';
	position: absolute;
	width: 100%;
	transform: scaleX(0);
	height: 2px;
	bottom: 0;
	left: 0;
	background-color: #006183;
	transform-origin: bottom center;
	transition: transform 0.25s ease-out;
}

.c-site-header__link:hover::after {
	transform: scaleX(1);
	transform-origin: bottom center;
}
</style>
