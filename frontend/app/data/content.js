export default {
	headerContent: [
		{
			title: 'Ydelser',
			url: '/#services',
		},
		{
			title: 'Om mig',
			url: '/#about',
		},
		{
			title: 'Anmeldelser',
			url: '/#reviews',
		},
		{
			title: 'Kontakt',
			url: '/#contact',
		},
	],
	heroContent: {
		title: 'Muskelmekanikeren',
		subtitle: 'Fysioterapi, akupunktur og personlig træning i Vejle',
	},
	quoteContent: {
		text: 'Jeg hjælper dig med at forbedre din præstation, overkomme begrænsende smerter i bevægeapparatet eller opnå en hurtigere recovery imellem dine træninger.',
	},
	gallery1: [
		{
			url: '/_nuxt/assets/images/cycle.webp',
			alt: 'To personer på indendørs cykler',
		},
		{
			url: '/_nuxt/assets/images/track.webp',
			alt: 'Træningsudstyr liggende på en banemark',
		},
		{
			url: '/_nuxt/assets/images/stretch.webp',
			alt: 'En person hjælper en anden med at strække ud',
		},
	],
	serviceContent: {
		title: 'Ydelser og priser',
		services: [
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
		],
	},
	aboutContent: {
		title: 'Om mig',
		text: 'Mit navn er Dennis Deleuran Okholm og jeg er uddannet fysioterapeut i 2018. <br /><br /> Jeg har været elite-sportsudøver 2/3 af mit liv, først som fodboldspiller dernæst som amerikansk fodboldspiller både i Danmark (klub og landshold) og sidenhen 2 sæsoner i Finland. Derfor ved jeg hvordan det er, at have skader og smerter, som begrænser udførelse af sport eller bevægelse i dagligdagen.',
	},
	gallery2: [
		{
			url: '/_nuxt/assets/images/dennis.webp',
			alt: 'Dennis Okholm fysioterapeut står smilende',
		},
		{
			url: '/_nuxt/assets/images/laying.webp',
			alt: 'En person hjælper en anden liggende med at strække ud',
		},
	],
	reviewsContent: [
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
	],
	footerContent: [
		{
			title: 'Kontakt',
		},
		{
			title: 'Send en besked',
			subtitle: 'Skriv i Messenger chat',
			url: 'https://www.facebook.com/messages/t/110707600446938',
		},
		{
			title: 'Send en mail',
			subtitle: 'kontakt@muskelmekanikeren.dk',
			url: 'mailto:kontakt@muskelmekanikeren.dk',
		},
		{
			title: 'Find mig på',
			subtitle: [
				{
					name: 'Facebook',
					url: 'https://www.facebook.com/profile.php?id=100057581943834',
				},
				{
					name: 'Instagram',
					url: 'https://www.instagram.com/muskelmekanikeren?fbclid=IwY2xjawGxMXJleHRuA2FlbQIxMAABHdhN3tAkHSxa1V_1SZhXc6GV4HUsfRcpKbaNmD4KA3a1F4tqCvTh2h9R_A_aem_qEphyaW2X4FBPLSZBMLWOA',
				},
			],
		},
	],
};
