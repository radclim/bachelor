<template>
	<section
		class="relative z-2 h-[25rem] >=605:h-[35rem] w-[100vw] flex items-center justify-center bg-[url('/assets/images/hero.png')] bg-cover bg-center"
		style="background-image: url('/_nuxt/assets/images/hero.png')"
	>
		<div class="absolute inset-0 z-1 bg-blue/25"></div>
		<div
			class="absolute inset-0 z-2 bg-gradient-to-b from-black to-transparent/60"
		></div>

		<div class="flex flex-col gap-[1rem] items-center z-3">
			<h1
				class="text-white font-primary font-bold text-2rem >=1920:text-[5rem] >=1280:text-[4rem] >=605:text-3.5rem leading-100%"
			>
				{{ content.title }}
			</h1>
			<p
				class="text-white font-quote text-center font-semibold px-[2rem] text-1rem >=1920:text-[2.5rem] >=1280:text-[2rem] >=605:text-1.6rem leading-100% italic"
			>
				{{ content.subtitle }}
			</p>
			<div class="flex gap-[2rem] pt-2rem">
				<CTAButton
					class="bg-black hover:bg-darkGray text-white"
					:text="'Se ydelser'"
					:url="'/#services'"
					internal
				/>
				<CTAButton
					class="bg-orange hover:bg-darkOrange"
					:text="'Bestil tid'"
				/>
			</div>
		</div>
	</section>
</template>
<script setup>
defineProps({
	content: Object,
});
</script>
<style></style>
