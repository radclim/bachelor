export default () => {
	const width = ref(0);
	const height = ref(0);

	function update() {
		width.value = window?.innerWidth ?? width.value;
		height.value = window?.innerHeight ?? height.value;
	}

	onMounted(() => window.addEventListener('resize', update), resize());
	onUnmounted(() => window.removeEventListener('resize', update));

	return { width, height };
};
