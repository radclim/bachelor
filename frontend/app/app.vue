<template>
	<div id="app">
		<ThemeConfiguration css-layer="theme-config" />
		<main id="main">
			<NuxtPage />
		</main>
	</div>

	<GlobalOverlay id="global-overlay" :target-list="['app']" />
</template>
