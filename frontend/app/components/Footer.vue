<template>
	<div class="c-footer">
		<div class="bg-black text-white font-primary p-3.5em">
			<h2 class="text-2em mb-1em font-semibold">Kontakt</h2>
			<p class="text-1.25em font-semibold">Send en besked</p>
			<nuxt-link to="" class="flex gap-0.5em items-center py-1.25em">
				<img
					src="../assets/svgs/messenger.svg"
					alt="messenger logo"
					class="w-[1.5em]"
				/>
				<p>Skriv i Messenger chat</p>
			</nuxt-link>
			<hr />
			<p class="text-1.25em font-semibold pt-1em">Send en email</p>
			<nuxt-link
				to="mailto:kontakt@muskelmekanikeren.dk"
				class="flex gap-0.5em items-center py-1.25em w-fit"
			>
				<img
					src="../assets/svgs/mail.svg"
					alt="messenger logo"
					class="w-[1.5em]"
				/>
				<p>kontakt@muskelmekanikeren.dk</p>
			</nuxt-link>

			<hr />
			<p class="text-1.25em font-semibold pt-1em">Find mig på</p>
			<div class="flex relative">
				<div class="flex gap-2em">
					<nuxt-link
						to="https://www.facebook.com/profile.php?id=100057581943834"
						target="_blank"
						class="flex gap-[0.5em] items-center h-fit pt-1em"
					>
						<img
							src="../assets/svgs/facebook.svg"
							alt="facebook logo"
							class="w-[1.5em]"
						/>
						<p>Facebook</p>
					</nuxt-link>
					<nuxt-link
						to="https://www.instagram.com/muskelmekanikeren?fbclid=IwY2xjawGxMXJleHRuA2FlbQIxMAABHdhN3tAkHSxa1V_1SZhXc6GV4HUsfRcpKbaNmD4KA3a1F4tqCvTh2h9R_A_aem_qEphyaW2X4FBPLSZBMLWOA"
						target="_blank"
						class="flex gap-[0.5em] items-center h-fit pt-1em"
					>
						<img
							src="../assets/svgs/instagram.svg"
							alt="instagram logo"
							class="w-[1.5em]"
						/>
						<p>Instagram</p>
					</nuxt-link>
				</div>
				<img
					src="../assets/svgs/logo.svg"
					alt="brand logo"
					class="w-6em absolute right-0 -top-1.25em"
				/>
			</div>
		</div>
		<div></div>
	</div>
</template>
<script setup></script>
<style lang="postcss"></style>
