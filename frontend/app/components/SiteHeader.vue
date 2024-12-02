<template>
	<header class="c-site-header bg-black">
		<nuxt-link to="/#hero">
			<img
				src="../assets/svgs/logo.svg"
				alt=""
				class="flex-shrink-0 z-20 h-[4rem]"
			/>
		</nuxt-link>
		<!-- Regular menu -->
		<nav
			class="font-primary font-medium text-white >=1024:(flex flex-grow justify-center) hidden"
		>
			<ul class="flex gap-[5em]">
				<li v-for="(link, index) in links" :key="index">
					<nuxt-link
						:to="link.url"
						class="cursor-pointer c-site-header__link"
						>{{ link.title }}</nuxt-link
					>
				</li>
			</ul>
		</nav>
		<CTAButton
			class="bg-orange hover:bg-darkOrange hidden >=1024:(block)"
			:text="'Bestil tid'"
		/>
		<!-- Burger menu -->
		<button v-if="!isVisible" @click="toggleMenu">
			<img
				src="../assets/svgs/bars.svg"
				alt=""
				class="w-2em cursor-pointer z-20 block relative >=1024:(hidden)"
			/>
		</button>
		<Transition mode="out-in">
			<div
				v-if="isVisible"
				class="absolute z-10 min-h-fit h-120vh >=768:px-2em px-[1em] w-100vw bg-white top-0 right-0 overflow-hidden >=1024:hidden"
			>
				<div class="flex justify-between items-center h-5em py-1em">
					<img
						src="../assets/svgs/logo_black.svg"
						alt=""
						class="flex-shrink-0 h-[4rem] z-20"
					/>
					<button v-if="isVisible" @click="toggleMenu">
						<img
							src="../assets/svgs/bars_black.svg"
							alt=""
							class="w-2em cursor-pointer z-20 block relative >=1024:(hidden)"
						/>
					</button>
				</div>
				<nav
					class="font-primary font-medium text-1.25rem text-black pt-2rem >=1024:hidden flex"
				>
					<ul class="flex flex-col w-full">
						<div v-for="(link, index) in links" :key="index">
							<li>
								<nuxt-link
									:to="link.url"
									class="cursor-pointer py-1em c-site-header__link"
									@click="toggleMenu"
									>{{ link.title }}</nuxt-link
								>
							</li>
							<hr />
						</div>
					</ul>
				</nav>
			</div>
		</Transition>
	</header>
</template>

<script setup>
defineProps({
	links: Array,
});

const isVisible = ref(false);
const isScrolled = ref(0);
const windowWidth = ref(0);

function toggleMenu() {
	isVisible.value = !isVisible.value;
}

watch(isVisible, (newValue) => {
	// Only run this in the browser
	if (import.meta.client) {
		if (newValue) {
			document.body.style.overflow = 'hidden'; // Disable scrolling when burger menu is open
		} else {
			document.body.style.overflow = ''; // Restore default scrolling
		}
	}
});

watch(windowWidth, (newWidth) => {
	if (newWidth > 1024) {
		isVisible.value = false; // Hide burger menu if the window is larger than 1024px
	}
});

onMounted(() => {
	windowWidth.value = window.innerWidth;
	const handleResize = () => {
		windowWidth.value = window.innerWidth;
	};
	window.addEventListener('resize', handleResize);

	const handleScroll = () => {
		isScrolled.value = window.scrollY > 50;
	};
	window.addEventListener('scroll', handleScroll);
});
onUnmounted(() => {
	window.removeEventListener('resize', handleResize);
	window.removeEventListener('scroll', handleScroll);
});
</script>
<style lang="postcss">
:where(.c-site-header) {
	@apply flex justify-between items-center h-[20rem] py-[1em] >=768:px-2em px-[1em] sticky top-0 z-10 transition-all duration-300 ease;
}
.c-site-header__link {
	display: inline-block;
	position: relative;
}
@media (hover: hover) {
	.c-site-header__link::after {
		content: '';
		position: absolute;
		width: 100%;
		transform: scaleX(0);
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: #006183;
		transform-origin: bottom center;
		transition: transform 0.25s ease-out;
	}

	.c-site-header__link:hover::after {
		transform: scaleX(1);
		transform-origin: bottom center;
	}
}
.v-enter-active,
.v-leave-active {
	transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
