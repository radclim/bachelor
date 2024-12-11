<template>
	<div class="c-services">
		<h2 class="font-primary font-bold text-1.5rem mb-[1em]">
			{{ content.title }}
		</h2>
		<div class="flex flex-col gap-1rem >=1024:(flex-row gap-0)">
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
<style lang="postcss">
:where(.c-services) {
	@apply >=1280:(p-[4em]) >=1024:px-[2em] px-[1em] py-[2em];
}
</style>
