<script lang="ts">
	import { navItems } from '../../../routes/utils/constants';
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;

	// Function to check if a nav item is active
	function isActive(href: string): boolean {
		if (href === '/resources') {
			// For resources, check if current path starts with /resources
			return currentPath.startsWith('/resources');
		}
		// For other routes, exact match
		return currentPath === href;
	}
</script>

<nav class="flex gap-8">
	<nav class="flex gap-8">
		{#each navItems.filter((item) => item.href !== '/') as { label, href }}
			<a
				{href}
				class="inline-block border-b-2 py-4 text-lg text-gray-700 no-underline transition-colors hover:text-orange-500"
				class:border-orange-500={isActive(href)}
				class:border-transparent={!isActive(href)}
				class:text-orange-500={isActive(href)}
			>
				{label}
			</a>
		{/each}
	</nav>
</nav>

<style lang="postcss">
	@reference "tailwindcss";
</style>
