<script lang="ts">
	import Logo from './Logo.svelte';
	import NavBar from './NavBar.svelte';
	import Profile from './Profile.svelte';
</script>

<header class="flex items-center justify-around border-b border-gray-200 bg-white">
	<Logo />
	<NavBar />
	<Profile />
</header>

<style lang="postcss">
	@reference "tailwindcss";
</style>
