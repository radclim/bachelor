<template>
	<div class="c-services">
		<h2 class="font-primary font-bold text-[2.5em] mb-[1em]">
			Ydelser og priser
		</h2>
		<div class="flex">
			<ServiceCard
				v-for="(service, index) in services"
				:key="index"
				:service="service"
			/>
		</div>
	</div>
</template>
<script setup>
const services = [
	{
		id: 0,
		title: 'Fysioterapi',
		subtitle: '30 mins konsultation',
		description: [
			'Indledende samtale og bevægelsesscreening',
			'Specifikke tests til diagnosticering',
			'Planlægning af videre forløb',
		],
		price: ['490 kr.*', '*Efterfølgende behandlinger 375 kr.'],
		insurance:
			'Dækket af sundhedsforsikring<br>Tilskudsberettiget hos Sygeforsikring Danmark',
		cta: 'bestil',
	},
	{
		id: 1,
		title: 'Akupunktur',
		subtitle: '30 mins konsultation',
		description: [
			'Effektiv lindring af akutte og kroniske smerter',
			'Afspænder stive muskler og genopretter bevægelighed',
			'Hurtig og skånsom behandling',
			'Mulighed for el terapeutisk behandling',
		],
		price: ['375 kr.'],
		insurance: 'Dækket af sundhedsforsikring',
		cta: 'bestil',
	},
	{
		id: 2,
		title: 'Personlig træning',
		description: [
			'Effektiv løsning på bevægeapparatsproblemer',
			'Performance-optimering, stabilitet, mobilitet og genoptræning',
			'Skræddersyet træningsplan',
		],
		price: ['Kontakt for aftale'],
		cta: 'kontakt',
	},
];
</script>
<style>
:where(.c-services) {
	@apply px-[5em] py-[5em];
}
</style>
