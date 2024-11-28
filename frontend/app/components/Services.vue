<template>
	<div class="c-services">
		<h2 class="font-primary font-bold text-[2.5em] mb-[1em]">
			{{ content.title }}
		</h2>
		<div class="flex">
			<ServiceCard
				v-for="(service, index) in content.services"
				:key="index"
				:service="service"
			/>
		</div>
	</div>
</template>
<script setup>
defineProps({
	content: Object,
});
</script>
<style>
:where(.c-services) {
	@apply px-[5em] py-[5em];
}
</style>
