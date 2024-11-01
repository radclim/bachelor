<template>
	<!-- Just an example -->
	<header class="c-site-header">
		<nav class="flex gap-10 py-10 px-8 justify-center">
			<div v-for="navItem in site?.navigation?.main" :key="navItem.id">
				<NuxtLink
					class="underline hover:underline-offset-4 transition-all"
					:to="navItem.url"
					:target="navItem.target"
				>
					{{ navItem.name }}
				</NuxtLink>
			</div>
			<div>
				<NuxtLink
					class="underline hover:underline-offset-4 transition-all"
					to="/skodURL"
				>
					Bad linK
				</NuxtLink>
			</div>
		</nav>
	</header>
</template>

<script setup>
import { useMainStore } from '~/store/main';

const main = useMainStore();
const { site } = main;
</script>
