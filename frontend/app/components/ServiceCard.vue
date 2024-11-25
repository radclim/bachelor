<template>
	<div
		class="c-service-card"
		:class="{
			'rounded-l-[5px]': service.id == 0,
			'-mx-1px': service.id == 1,
			'rounded-r-[5px]': service.id == 2,
		}"
	>
		<div class="h-[6em]">
			<h3
				v-if="service.title"
				class="font-primary font-semibold text-[2em] mb-[0.5em]"
			>
				{{ service.title }}
			</h3>
			<p
				v-if="service.subtitle"
				class="font-quote font-semibold italic text-blue"
			>
				{{ service.subtitle }}
			</p>
		</div>
		<ul class="h-[12em]">
			<li
				v-for="(item, index) in service.description"
				:key="index"
				class="mb-[0.5em] font-primary text-wrap"
			>
				{{ item }}
			</li>
		</ul>
		<div class="h-[6em]">
			<p
				v-for="(price, index) in service.price"
				:key="index"
				class="font-primary"
				:class="{
					'text-[4.5em] mb-[0.35em]': index < 1 && service.id < 2,
					'italic font-medium': index == 1,
					'font-quote font-semibold italic text-[2.5em]':
						service.id == 2,
				}"
				v-html="price"
			></p>
		</div>
		<p
			v-if="service.insurance"
			class="h-[5em] font-primary italic"
			v-html="service.insurance"
		></p>
		<p v-else class="h-[5em]"></p>
		<CTAButton
			v-if="service.cta === 'bestil'"
			class="bg-orange hover:bg-darkOrange"
			:text="'Bestil tid'"
		/>
		<CTAButton
			v-else
			class="bg-black hover:bg-darkGray text-white"
			:text="'Kontakt'"
		/>
	</div>
</template>
<script setup>
defineProps({
	service: Object,
});
</script>
<style>
:where(.c-service-card) {
	@apply w-33%  flex flex-col border-1 border-solid border-black p-[2em];
}
</style>
