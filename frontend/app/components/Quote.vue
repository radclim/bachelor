<template>
	<div class="c-quote">
		<p
			class="text-black font-quote italic text-[2em] leading-[1em] relative z-5"
		>
			Jeg hjælper dig med at forbedre din præstation, overkomme
			begrænsende smerter i bevægeapparatet eller opnå en hurtigere
			recovery imellem dine træninger.
		</p>
		<Watermark class="-top-[20%]" :name="'bullseye'" />
	</div>
</template>
<script setup></script>
<style lang="postcss">
:where(.c-quote) {
	@apply px-[10em] py-[5em] relative;
}
</style>
