<template>
	<div class="c-reviews">
		<h2 class="font-primary font-bold text-[2.5em] mb-[1em]">
			Anmeldelser
		</h2>
		<Carousel :items="reviews" />
		<Watermark class="-top-[2em]" :name="'quote'" />
	</div>
</template>
<script setup>
const reviews = [
	{
		name: 'Jens Jacobsen',
		job: 'Crossfitter',
		text: '“Som crossfitter på højt niveau, er det for mig vigtig med professionel behandling. Hos Dennis har jeg mødt målrettet behandling og fået høj faglig vurdering af mine “skader”.”',
	},
	{
		name: 'Kira Møller-Hansen',
		job: 'Tandplejer',
		text: '“Jeg blev anbefalet Dennis, da jeg havde smerter fra min ene skulder. Dennis tog sig god tid til at undersøge skulderen, og lavede herefter et træningsprogram, hvor der kom progressioner, i takt med at skulderen blev bedre. Min skulder er nu symptomfri og jeg er blevet stærkere end før. Jeg vil helt sikkert anbefale Dennis til andre.”',
	},
	{
		name: 'Maria Eg',
		job: 'Stud. Bsc Idræt',
		text: '“Jeg var i 4-5 måneder i behandling hos Dennis i forbindelse med en ankelskade, som svækkede min mobilitet, der i højeste grad var til stor gene i mit hverdags- og træningsliv som crossfitter. Dennis fandt hurtigt den rette behandlingsmetode og medgav relevante træningsøvelser, som jeg kunne udføre sideløbende med behandlingsforløbet. Idag har jeg ingen gener og jeg bruger stadig øvelserne til min ankel. Jeg vil klart anbefale Dennis til andre, der vil godt og sikkert videre.”',
	},
];
</script>
<style lang="postcss">
:where(.c-reviews) {
	@apply px-[5em] py-[5em] relative;
}
</style>
