<template>
	<div class="c-carousel" @mouseenter="pauseTimer" @mouseleave="startTimer">
		<div class="w-full h-[18em] border-1 border-black rounded-5px">
			<transition :name="transitionName" mode="out-in">
				<div :key="isVisible" class="p-[2em]">
					<p class="font-primary font-semibold text-[2em] mb-[0.5em]">
						{{ items[isVisible].name }}
					</p>
					<p class="font-primary text-blue mb-[1em]">
						{{ items[isVisible].job }}
					</p>
					<p
						class="font-quote font-regular italic text-[1.5em] leading-[1.25em]"
					>
						{{ items[isVisible].text }}
					</p>
				</div>
			</transition>
		</div>
		<div class="flex gap-[2em]">
			<span
				v-for="(item, index) in items"
				:key="index"
				class="h-[2em] w-[2em] border-1 border-solid border-black rounded-50% flex items-center justify-center cursor-pointer"
				@click="setIndex(index)"
			>
				<transition name="dots">
					<span
						v-if="isVisible == index"
						class="h-[1.5em] w-[1.5em] bg-blue rounded-50% block"
					></span> </transition
			></span>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	items: Array,
});

const isVisible = ref(0);
let timer = null;
const transitionName = ref('fade');

function startTimer() {
	if (timer) clearTimeout(timer);
	timer = setTimeout(() => {
		if (isVisible.value < props.items.length - 1) {
			const oldValue = isVisible.value;
			isVisible.value += 1;
			updateTransition(oldValue, isVisible.value);
		} else {
			const oldValue = isVisible.value;
			isVisible.value = 0;
			updateTransition(oldValue, isVisible.value);
		}
		startTimer();
	}, 5000);
}

function pauseTimer() {
	if (timer) {
		clearTimeout(timer);
		timer = null;
	}
}

function setIndex(index) {
	pauseTimer();
	const oldValue = isVisible.value;
	isVisible.value = index;
	updateTransition(oldValue, index);
	startTimer();
}
function updateTransition(oldValue, newValue) {
	if ((oldValue == 2 && newValue == 0) || oldValue < newValue)
		transitionName.value = 'fade-left';
	else transitionName.value = 'fade-right';
}

onMounted(startTimer);
onUnmounted(() => {
	if (timer) clearTimeout(timer);
});
</script>

<style lang="postcss">
:where(.c-carousel) {
	@apply flex flex-col items-center gap-[2em] overflow-hidden;
}

.fade-left-enter-active,
.fade-left-leave-active,
.fade-right-enter-active,
.fade-right-leave-active,
.dots-enter-active,
.dots-leave-active {
	transition: all 0.5s ease;
}

.fade-left-enter-from,
.fade-right-leave-to {
	/* transform: translateX(100%); */
	opacity: 0;
}

.fade-right-enter-from,
.fade-left-leave-to {
	/* transform: translateX(-100%); */
	opacity: 0;
}

.dots-enter-from {
	opacity: 0;
}
.dots-leave-to {
	opacity: 0;
}
</style>
