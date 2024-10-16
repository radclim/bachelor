<template>
	<div :id="id" ref="$el" class="c-global-overlay"></div>
</template>

<script setup>
const observer = ref(null);

// To be able to set the right inert across multiple global overlays toggling inert on the same targets
const crossTargetList = useState(() => ({}));

const props = defineProps({
	id: {
		type: String,
		required: true,
	},
	targetList: {
		type: Array,
		default: () => [],
	},
});

const $el = ref(null);
const isOpen = useState(`${props.id}-state`, () => false);
watch(isOpen, (value) => {
	const __nuxt = document.body.querySelector('#__nuxt');
	if (value) {
		// Add targetList to crossTargetList
		props.targetList?.forEach?.((target) => {
			crossTargetList.value[target] ??= 0;
			crossTargetList.value[target]++;
		});
	} else {
		// Remove targetList to crossTargetList
		props.targetList?.forEach?.((target) => {
			crossTargetList.value[target] ??= 1;
			crossTargetList.value[target]--;
		});
	}

	// Toggle overflow to lock/unlock scroll
	const anyTarget = Object.values(crossTargetList.value).some(
		(value) => value
	);

	if (anyTarget) {
		if (__nuxt.style.overflow !== 'hidden') {
			const scrollTopPosition =
				document.body.scrollTop || document.documentElement.scrollTop;
			const scrollLeftPosition =
				document.body.scrollLeft || document.documentElement.scrollLeft;

			__nuxt.style.overflow = 'hidden';
			__nuxt.style.position = 'fixed';
			__nuxt.scrollTop = scrollTopPosition;
			__nuxt.scrollLeft = scrollLeftPosition;
		}
	} else if (__nuxt.style.overflow === 'hidden') {
		const scrollTopPosition = __nuxt.scrollTop;
		const scrollLeftPosition = __nuxt.scrollLeft;

		__nuxt.style.overflow = null;
		__nuxt.style.position = null;

		document.body.scrollTop = scrollTopPosition;
		document.documentElement.scrollTop = scrollTopPosition;

		document.body.scrollLeft = scrollLeftPosition;
		document.documentElement.scrollLeft = scrollLeftPosition;
	}

	// Toggle inert
	props.targetList.forEach((target) => {
		target &&
			[...document.querySelectorAll(target)].forEach((targetNode) => {
				if (targetNode) {
					targetNode.inert = crossTargetList.value[target]
						? true
						: false;
				}
			});
	});
});

onMounted(() => {
	const overlayNode = document.getElementById(props.id);

	observer.value = new MutationObserver(() => {
		const children = [...($el.value?.childNodes ?? [])].filter(
			(node) =>
				node?.nodeName !== '#text' && node?.nodeName !== '#comment'
		);
		if (children.length) {
			isOpen.value = true;
		} else {
			isOpen.value = false;
		}
	});

	observer.value.observe(overlayNode, {
		attributes: true,
		childList: true,
		subtree: false,
	});
});

onUnmounted(() => {
	isOpen.value = false;
	observer.value.disconnect();
});
</script>

<style lang="postcss">
.c-global-overlay {
	@apply overflow-y-scroll;
	overscroll-behavior: contain;
}
</style>
