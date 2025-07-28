<script lang="ts">
	import { ChartNoAxesColumn } from '@lucide/svelte/icons';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let mobile = false;

	const tabs = [
		{ id: 'icon', label: '', isIcon: true, href: '/resources/metrics' },
		{ id: 'All', label: 'All', isIcon: false, href: '/resources/all' },
		{ id: 'Videos', label: 'Videos', isIcon: false, href: '#', disabled: true },
		{ id: 'Documents', label: 'Documents', isIcon: false, href: '#', disabled: true },
		{ id: 'Lessons', label: 'Lessons', isIcon: false, href: '#', disabled: true },
		{ id: 'Archive', label: 'Archive', isIcon: false, href: '#', disabled: true }
	];

	$: currentPath = $page.url.pathname;

	function handleTabClick(
		tab:
			| { id: string; label: string; isIcon: boolean; href: string; disabled?: undefined }
			| { id: string; label: string; isIcon: boolean; href: string; disabled: boolean }
	) {
		if (!tab.disabled) {
			goto(tab.href);
		}
	}
</script>

<nav class={mobile ? 'flex flex-wrap items-center gap-3' : 'flex items-center gap-8'}>
	{#each tabs as tab}
		<button
			class={mobile
				? 'rounded-md px-3 py-2 text-sm font-medium transition-colors ' +
					(currentPath === tab.href
						? 'bg-gray-100 text-gray-700'
						: tab.disabled
							? 'cursor-not-allowed text-gray-300'
							: 'text-gray-500 hover:bg-gray-50 hover:text-gray-700')
				: 'mb-[-1px] border-b-2 px-1 py-3 text-sm font-medium ' +
					(currentPath === tab.href
						? 'border-gray-500 text-gray-600'
						: tab.disabled
							? 'cursor-not-allowed border-transparent text-gray-300'
							: 'border-transparent text-gray-500 hover:text-gray-700')}
			on:click={() => handleTabClick(tab)}
			disabled={tab.disabled}
		>
			{#if tab.isIcon}
				<ChartNoAxesColumn class={mobile ? 'h-4 w-4' : 'stroke-3'} />
			{:else}
				{tab.label}
			{/if}
		</button>
	{/each}
</nav>
