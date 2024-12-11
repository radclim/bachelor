<template>
	<div
		class="c-service-card w-100% rounded-[5px] >=1024:rounded-none"
		:class="{
			'>=1024:rounded-l-[5px]': service.id == 0,
			'>=1024:-mx-1px': service.id == 1,
			'>=1024:rounded-r-[5px]': service.id == 2,
		}"
	>
		<div class=">=1024:h-[4em] mb-[1rem]">
			<h3
				v-if="service.title"
				class="font-primary font-semibold text-1.25rem mb-[0.5em]"
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
		<ul class=">=1280:h-[11em] >=1024:h-[14em] mb-[1rem]">
			<li
				v-for="(item, index) in service.description"
				:key="index"
				class="mb-[0.5em] font-primary text-wrap"
			>
				{{ item }}
			</li>
		</ul>
		<div class=">=1024:h-[5em] mb-[1rem]">
			<p
				v-for="(price, index) in service.price"
				:key="index"
				class="font-primary"
				:class="{
					'>=1024:text-[4.5rem] text-2.5rem mb-[0.35em]':
						index < 1 && service.id < 2,
					'italic font-medium ': index == 1,
					'font-quote font-semibold italic leading-100% >=1024:text-[2rem] text-1.5rem':
						service.id == 2,
				}"
				v-html="price"
			></p>
		</div>
		<p
			v-if="service.insurance"
			class=">=1280:h-[3em] >=1024:h-[5em] mb-[2rem] font-primary italic"
			v-html="service.insurance"
		></p>
		<p v-else class=">=1280:h-[3em] >=1024:h-[5em] mb-[2rem]"></p>
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
	@apply bg-white w-33% relative z-2 flex flex-col border-1 border-solid border-black p-[2em];
}
:where(.c-cta-button a) {
	@apply w-full;
}
</style>
