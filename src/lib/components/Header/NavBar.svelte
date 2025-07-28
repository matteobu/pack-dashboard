<script lang="ts">
	import { navItems } from '../../../routes/utils/constants';
	import { page } from '$app/stores';

	export let mobile = false;

	$: currentPath = $page.url.pathname;

	function isActive(href: string): boolean {
		if (href === '/resources') {
			return currentPath.startsWith('/resources');
		}
		return currentPath === href;
	}
</script>

<nav class={mobile ? 'flex flex-col gap-2' : 'flex gap-8'}>
	{#each navItems.filter((item) => item.href !== '/') as { label, href } (href)}
		<a
			{href}
			class={mobile
				? 'block rounded-md px-3 py-2 text-base font-medium text-gray-700 no-underline transition-colors hover:bg-gray-100 hover:text-orange-500'
				: 'inline-block border-b-2 py-4 text-lg text-gray-700 no-underline transition-colors hover:text-orange-500'}
			class:border-orange-500={!mobile && isActive(href)}
			class:border-transparent={!mobile && !isActive(href)}
			class:text-orange-500={isActive(href)}
			class:bg-orange-50={mobile && isActive(href)}
		>
			{label}
		</a>
	{/each}
</nav>

<style lang="postcss">
	@reference "tailwindcss";
</style>
