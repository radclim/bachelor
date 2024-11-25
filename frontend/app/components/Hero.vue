<template>
	<section
		class="relative -top-[5em] -mb-[5em] z-0 h-[40em] w-[100vw] flex items-center justify-center bg-[url('/assets/images/hero.png')] bg-cover bg-center"
		style="background-image: url('/_nuxt/assets/images/hero.png')"
	>
		<div class="absolute inset-0 z-1 bg-blue/25"></div>
		<div
			class="absolute inset-0 z-2 bg-gradient-to-b from-black to-transparent/60"
		></div>

		<div class="flex flex-col gap-[3em] items-center z-3">
			<h1 class="text-white font-primary font-bold text-[4.5em]">
				Muskelmekanikeren
			</h1>
			<p class="text-white font-quote font-semibold text-[2em] italic">
				Fysioterapi, akupunktur og personlig træning i Vejle
			</p>
			<div class="flex gap-[2em]">
				<CTAButton
					class="bg-black hover:bg-darkGray text-white"
					:text="'Se ydelser'"
				/>
				<CTAButton
					class="bg-orange hover:bg-darkOrange"
					:text="'Bestil tid'"
				/>
			</div>
		</div>
	</section>
</template>
<script setup></script>
<style></style>
