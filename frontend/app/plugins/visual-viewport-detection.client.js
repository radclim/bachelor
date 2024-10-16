// Last modified: 2023/10/23 11:29:02
const viewport = ref({
	width: 0,
	height: 0,
	offsetTop: 0,
	offsetLeft: 0,
	pinchZoom: 1,
});

export default defineNuxtPlugin(() => {
	const { visualViewport } = window;

	if (visualViewport) {
		let pendingUpdate = false;
		const viewportHandler = (e) => {
			if (pendingUpdate) {
				return;
			}
			pendingUpdate = true;

			requestAnimationFrame(() => {
				pendingUpdate = false;

				const { width, height, offsetTop, offsetLeft } = visualViewport;
				const { documentElement } = document;
				const { clientWidth, clientHeight } = documentElement;

				viewport.width = clientWidth;
				viewport.height = clientHeight;
				viewport.offsetTop = (offsetTop / width) * clientWidth;
				viewport.offsetLeft = (offsetLeft / height) * clientHeight;
				viewport.pinchZoom = (1 / width) * clientWidth;

				/* Always pixel values for now, dvw doesn't account for scrollbar */
				// if (CSS.supports('width', '100dvw')) {
				// 	documentElement.style.setProperty(
				// 		'--visual-viewport-width',
				// 		'100dvw'
				// 	);
				// 	documentElement.style.setProperty(
				// 		'--visual-viewport-height',
				// 		'100dvh'
				// 	);
				// } else {
				documentElement.style.setProperty(
					'--visual-viewport-width',
					`${width}px`
				);
				documentElement.style.setProperty(
					'--visual-viewport-height',
					`${height}px`
				);
				// }
				documentElement.style.setProperty(
					'--visual-viewport-offset-top',
					`${offsetTop}px`
				);
				documentElement.style.setProperty(
					'--visual-viewport-offset-left',
					`${offsetLeft}px`
				);
			});
		};

		viewportHandler();
		visualViewport.addEventListener('scroll', viewportHandler);
		visualViewport.addEventListener('resize', viewportHandler);
	}
});
export { viewport };
