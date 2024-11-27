<template>
	<header class="c-site-header bg-black">
		<nuxt-link to="#hero">
			<img
				src="../assets/svgs/logo.svg"
				alt=""
				class="flex-shrink-0 z-20"
			/>
		</nuxt-link>
		<!-- Regular menu -->
		<nav
			class="font-primary font-medium text-white >=1024:(flex flex-grow justify-center) hidden"
		>
			<ul class="flex gap-[5em]">
				<li>
					<nuxt-link
						class="cursor-pointer c-site-header__link"
						to="#services"
						>Ydelser</nuxt-link
					>
				</li>
				<li>
					<nuxt-link
						class="cursor-pointer c-site-header__link"
						to="#about"
						>Om mig</nuxt-link
					>
				</li>
				<li>
					<nuxt-link
						class="cursor-pointer c-site-header__link"
						to="#reviews"
						>Anmeldelser</nuxt-link
					>
				</li>
				<li>
					<nuxt-link
						class="cursor-pointer c-site-header__link"
						to="#contact"
						>Kontakt</nuxt-link
					>
				</li>
			</ul>
		</nav>
		<CTAButton
			class="bg-orange hover:bg-darkOrange hidden >=1024:(block)"
			:text="'Bestil tid'"
		/>

		<button v-if="!isVisible" @click="toggleMenu">
			<img
				src="../assets/svgs/bars.svg"
				alt=""
				class="w-2em cursor-pointer z-20 block relative >=1024:(hidden)"
			/>
		</button>
		<!-- Burger menu -->
		<div
			v-if="isVisible"
			class="absolute z-30 h-100vh w-100vw px-3em bg-white top-0 right-0 >=1024:hidden"
		>
			<div class="flex justify-between h-5em py-1em">
				<img
					src="../assets/svgs/logo_black.svg"
					alt=""
					class="flex-shrink-0 h-3.5em z-20"
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
				class="font-primary font-medium text-1.5em text-black pt-2em >=1024:hidden flex"
			>
				<ul class="flex flex-col gap-[2em] w-full">
					<li>
						<nuxt-link
							class="cursor-pointer c-site-header__link"
							to="#services"
							@click="toggleMenu"
							>Ydelser</nuxt-link
						>
					</li>
					<hr />
					<li>
						<nuxt-link
							class="cursor-pointer c-site-header__link"
							to="#about"
							@click="toggleMenu"
							>Om mig</nuxt-link
						>
					</li>
					<hr />

					<li>
						<nuxt-link
							class="cursor-pointer c-site-header__link"
							to="#reviews"
							@click="toggleMenu"
							>Anmeldelser</nuxt-link
						>
					</li>
					<hr />

					<li>
						<nuxt-link
							class="cursor-pointer c-site-header__link"
							to="#contact"
							@click="toggleMenu"
							>Kontakt</nuxt-link
						>
					</li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script setup>
import { onMounted } from 'vue';

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
			document.body.style.overflow = 'hidden'; // Disable scrolling
		} else {
			document.body.style.overflow = ''; // Restore default scrolling
		}
	}
});

watch(windowWidth, (newWidth) => {
	if (newWidth > 1024) {
		isVisible.value = false; // Hide menu if the window is larger than 1024px
	}
});

onMounted(() => {
	windowWidth.value = window.innerWidth; // Set initial window width

	const handleResize = () => {
		windowWidth.value = window.innerWidth; // Update windowWidth on resize
	};

	window.addEventListener('resize', handleResize);

	// Set initial state based on window size
	if (window.innerWidth > 1024) {
		isVisible.value = false; // Ensure isVisible is false on initial load for large screens
	}

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
	@apply flex justify-between items-center h-[5em] py-[1em] px-[3em] sticky top-0 z-10 transition-all duration-300 ease;
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
</style>
