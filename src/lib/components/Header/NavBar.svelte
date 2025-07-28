<script lang="ts">
	import { navItems } from '../../../routes/utils/constants';
	import { page } from '$app/stores';

	$: currentPath = $page.url.pathname;

	function isActive(href: string): boolean {
		if (href === '/resources') {
			return currentPath.startsWith('/resources');
		}
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
