<script lang="ts">
	import Logo from './Logo.svelte';
	import NavBar from './NavBar.svelte';
	import Profile from './Profile.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
		dispatch('mobileMenuToggle', { open: mobileMenuOpen });
	}
</script>

<header class="border-b border-gray-200 bg-white">
	<!-- Mobile Header -->
	<div class="flex items-center justify-between px-4 py-3 md:hidden">
		<Logo />
		<div class="flex items-center gap-3">
			<Profile />
			<button
				on:click={toggleMobileMenu}
				class="flex h-8 w-8 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<!-- Close icon -->
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<!-- Hamburger icon -->
					<svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu (collapsed by default) -->
	{#if mobileMenuOpen}
		<div class="border-t border-gray-200 bg-white px-4 py-3 md:hidden">
			<NavBar mobile={true} />
		</div>
	{/if}

	<!-- Desktop Header -->
	<div class="hidden items-center justify-between px-6 py-4 md:flex lg:justify-around lg:px-8">
		<Logo />
		<NavBar />
		<Profile />
	</div>
</header>

<style lang="postcss">
	@reference "tailwindcss";
</style>
