<template>
	<div class="c-footer">
		<div
			class="bg-black text-white font-primary >=1280:px-[4em] >=1024:px-[2em] px-1em py-3em"
		>
			<h2 class="text-2em mb-1em font-semibold">
				{{ content[0].title }}
			</h2>
			<p class="text-1.25em font-semibold">{{ content[1].title }}</p>
			<nuxt-link
				:to="content[1].url"
				target="_blank"
				class="flex gap-0.5em items-center my-1.25em w-fit h-fit"
			>
				<img
					src="/svg/messenger.svg"
					alt="messenger logo"
					class="w-[1.5em]"
				/>
				<p
					class="hover:(text-orange cursor-pointer) transition duration-300"
				>
					{{ content[1].subtitle }}
				</p>
			</nuxt-link>
			<hr />
			<p class="text-1.25em font-semibold pt-1em">
				{{ content[2].title }}
			</p>
			<nuxt-link
				:to="content[2].url"
				class="flex gap-0.5em items-center my-1.25em w-fit"
			>
				<img
					src="/svg/mail.svg"
					alt="messenger logo"
					class="w-[1.5em]"
				/>
				<p
					class="hover:(text-orange cursor-pointer) transition duration-300"
				>
					{{ content[2].subtitle }}
				</p>
			</nuxt-link>

			<hr />
			<p class="text-1.25em font-semibold pt-1em">
				{{ content[3].title }}
			</p>
			<div class="flex relative">
				<div class="flex gap-2em">
					<nuxt-link
						:to="content[3].subtitle[0].url"
						target="_blank"
						class="flex gap-[0.5em] items-center h-fit mt-1em"
					>
						<img
							src="/svg/facebook.svg"
							alt="facebook logo"
							class="w-[1.5em]"
						/>
						<p
							class="hover:(text-orange cursor-pointer) transition duration-300"
						>
							{{ content[3].subtitle[0].name }}
						</p>
					</nuxt-link>
					<nuxt-link
						:to="content[3].subtitle[1].url"
						target="_blank"
						class="flex gap-[0.5em] items-center h-fit pt-1em"
					>
						<img
							src="/svg/instagram.svg"
							alt="instagram logo"
							class="w-[1.5em]"
						/>
						<p
							class="hover:(text-orange cursor-pointer) transition duration-300"
						>
							{{ content[3].subtitle[1].name }}
						</p>
					</nuxt-link>
				</div>
				<img
					src="/svg/logo.svg"
					alt="brand logo"
					class="w-6em absolute right-0 -top-1.25em invisible >=605:visible"
				/>
			</div>
		</div>
		<div
			class="font-primary text-0.85rem flex >=1280:(pl-[4em] pr-[4em]) >=1024:(pl-[2em] pr-[2em]) >=605:(flex-row justify-between) flex-col items-center text-center gap-1em p-1em"
		>
			<nuxt-link
				to="https://www.google.com/maps/dir//Blegbanken+3,+7100+Vejle,+Denmark/@55.7076697,9.5280872,17z/data=!4m18!1m8!3m7!1s0x464c82511d52dbbf:0x3776fb6c29611e9b!2sBlegbanken+3,+7100+Vejle,+Denmark!3b1!8m2!3d55.7076697!4d9.5306621!16s%2Fg%2F11bw4081px!4m8!1m0!1m5!1m1!1s0x464c82511d52dbbf:0x3776fb6c29611e9b!2m2!1d9.5306621!2d55.7076697!3e3?entry=ttu&g_ep=EgoyMDI0MTIwOC4wIKXMDSoASAFQAw%3D%3D"
				target="_blank"
				>Muskelmekanikeren Blegbanken 3, 7100 Vejle</nuxt-link
			>
			<p>Copyright © 2024 Muskelmekanikeren</p>
		</div>
	</div>
</template>
<script setup>
defineProps({
	content: Array,
});
</script>
<style lang="postcss"></style>
