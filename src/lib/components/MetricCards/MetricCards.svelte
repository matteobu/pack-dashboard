<script lang="ts">
	import { mockData } from '$lib/data/mock';
	import {
		CopyPlus,
		Folders,
		ChartNoAxesColumn,
		TrendingUp,
		TrendingDown
	} from '@lucide/svelte/icons';
	import {
		getTotalUploadedResources,
		getCompletionRateResources,
		getUniqueAccessResources
	} from '../../../../src/routes/resources/utils/helpers';

	const { resources } = mockData;
	const resourcesUploaded = getTotalUploadedResources(resources);
	const completionRate = getCompletionRateResources(resources);
	const uniqueAccesses = getUniqueAccessResources(resources);

	// Format large numbers for better display
	function formatNumber(num: number): string {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(1) + 'M';
		}
		if (num >= 1000) {
			return (num / 1000).toFixed(1) + 'K';
		}
		return num.toString();
	}
</script>

<div class="rounded-lg bg-white p-4 shadow-sm sm:p-6">
	<!-- Mobile Layout: Stacked -->
	<div class="block sm:hidden">
		<div class="space-y-4">
			<div class="rounded-md bg-gray-50 p-4">
				<p class="mb-2 flex items-center gap-1 text-xs text-gray-500">
					<Folders size={12} />
					Resources Uploaded
				</p>
				<div class="flex flex-col gap-1">
					<span class="text-xl font-bold">{formatNumber(resourcesUploaded)}</span>
					<span class="flex items-center gap-1 text-sm text-green-500">
						<TrendingUp class="h-4 w-4" />
						+4%
					</span>
				</div>
			</div>

			<div class="rounded-md bg-gray-50 p-4">
				<p class="mb-2 flex items-center gap-1 text-xs text-gray-500">
					<CopyPlus size={12} />
					Completion Rate
				</p>
				<div class="flex flex-col gap-1">
					<span class="text-xl font-bold">{completionRate * 10}%</span>
					<span class="flex items-center gap-1 text-sm text-red-500">
						<TrendingDown class="h-4 w-4" />
						-10%
					</span>
				</div>
			</div>

			<div class="rounded-md bg-gray-50 p-4">
				<p class="mb-2 flex items-center gap-1 text-xs text-gray-500">
					<ChartNoAxesColumn size={12} />
					Unique Accesses
				</p>
				<div class="flex flex-col gap-1">
					<span class="text-xl font-bold">
						{formatNumber(Math.round(uniqueAccesses * 0.2))}/{formatNumber(
							Math.round(uniqueAccesses * 0.4)
						)}
					</span>
					<span class="flex items-center gap-1 text-sm text-green-500">
						<TrendingUp class="h-4 w-4" />
						+6%
					</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Desktop Layout: Grid -->
	<div class="hidden sm:block">
		<div class="grid grid-cols-3 divide-x divide-gray-200">
			<div class="pr-6">
				<div class="flex items-center justify-between">
					<div class="min-w-0 flex-1">
						<p class="flex items-center gap-1 text-xs text-gray-500">
							<Folders size={12} />
							Resources Uploaded
						</p>
						<div class="mt-1 flex flex-col gap-1">
							<span class="truncate text-2xl font-bold">{formatNumber(resourcesUploaded)}</span>
							<span class="flex items-center gap-1 text-sm text-green-500">
								<TrendingUp class="h-4 w-4" />
								+4%
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="px-6">
				<div class="flex items-center justify-between">
					<div class="min-w-0 flex-1">
						<p class="flex items-center gap-1 text-xs text-gray-500">
							<CopyPlus size={12} />
							Completion Rate
						</p>
						<div class="mt-1 flex flex-col gap-1">
							<span class="truncate text-2xl font-bold">{completionRate * 10}%</span>
							<span class="flex items-center gap-1 text-sm text-red-500">
								<TrendingDown class="h-4 w-4" />
								-10%
							</span>
						</div>
					</div>
				</div>
			</div>

			<div class="pl-6">
				<div class="flex items-center justify-between">
					<div class="min-w-0 flex-1">
						<p class="flex items-center gap-1 text-xs text-gray-500">
							<ChartNoAxesColumn size={12} />
							Unique Accesses
						</p>
						<div class="mt-1 flex flex-col gap-1">
							<span class="truncate text-2xl font-bold">
								{formatNumber(Math.round(uniqueAccesses * 0.2))}/{formatNumber(
									Math.round(uniqueAccesses * 0.4)
								)}
							</span>
							<span class="flex items-center gap-1 text-sm text-green-500">
								<TrendingUp class="h-4 w-4" />
								+6%
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
