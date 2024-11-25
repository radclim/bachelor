<template>
	<div class="c-about">
		<h2 class="font-primary font-bold text-[2.5em] mb-[1em]">Om mig</h2>
		<p class="font-primary text-[1.2em]">
			Mit navn er Dennis Deleuran Okholm og jeg er uddannet fysioterapeut
			i 2018. <br /><br />
			Jeg har været elite-sportsudøver 2/3 af mit liv, først som
			fodboldspiller dernæst som amerikansk fodboldspiller både i Danmark
			(klub og landshold) og sidenhen 2 sæsoner i Finland. Derfor ved jeg
			hvordan det er, at have skader og smerter, som begrænser udførelse
			af sport eller bevægelse i dagligdagen.
		</p>
		<Watermark class="-top-[2em]" :name="'info'" />
	</div>
</template>
<script setup></script>
<style lang="postcss">
:where(.c-about) {
	@apply px-[5em] pb-[5em] relative;
}
</style>
