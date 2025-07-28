<script lang="ts">
	import type { Resource } from '$lib/types';

	import { TrendingUp, TrendingDown } from '@lucide/svelte/icons';

	export let title: string;
	export let resources: Resource[];
</script>

<div class="rounded-lg bg-white p-6 shadow-sm">
	<h3 class="mb-4 text-sm font-medium text-gray-300">{title}</h3>
	<div class="space-y-3">
		{#each resources as resource (resource.id)}
			<div class="flex items-center justify-between">
				<div class="flex-1">
					<p class="text-sm font-medium text-gray-900 underline">{resource.title}</p>
				</div>
				<div class="ml-4">
					{#if resource.trending === 'up'}
						<TrendingUp class="h-4 w-4 text-green-500" />
					{:else}
						<TrendingDown class="h-4 w-4 text-red-500" />
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>

<style lang="postcss">
	@reference "tailwindcss";
</style>
