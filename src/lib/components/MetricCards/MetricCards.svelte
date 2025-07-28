<script lang="ts">
	import { mockData } from '$lib/data/mock';
	import { CopyPlus, Folders, ChartNoAxesColumn } from '@lucide/svelte/icons';
	import {
		getTotalUploadedResources,
		getCompletionRateResources,
		getUniqueAccessResources
	} from '../../../../src/routes/resources/utils/helpers';

	const { resources } = mockData;
	const resourcesUploaded = getTotalUploadedResources(resources);
	const completionRate = getCompletionRateResources(resources);
	const uniqueAccesses = getUniqueAccessResources(resources);
</script>

<div class="rounded-lg bg-white p-6 shadow-sm">
	<div class="grid grid-cols-3 divide-x divide-gray-200">
		<div class="pr-6">
			<div class="flex items-center justify-between">
				<div>
					<p class="flex items-center gap-1 text-xs text-gray-500">
						<Folders size={12} />
						Resources Uploaded
					</p>
					<p class="text-2xl font-bold">
						{resourcesUploaded}<span class="ml-1 text-sm text-green-500">↗ +4%</span>
					</p>
				</div>
			</div>
		</div>
		<div class="px-6">
			<div class="flex items-center justify-between">
				<div>
					<p class="flex items-center gap-1 text-xs text-gray-500">
						<CopyPlus size={12} />
						Completion Rate
					</p>
					<p class="text-2xl font-bold">
						{completionRate * 10}%<span class="ml-1 text-sm text-red-500">↘ -10%</span>
					</p>
				</div>
			</div>
		</div>
		<div class="pl-6">
			<div class="flex items-center justify-between">
				<div>
					<p class="flex items-center gap-1 text-xs text-gray-500">
						<ChartNoAxesColumn size={12} />
						Unique Accesses
					</p>
					<p class="text-2xl font-bold">
						{Math.round(uniqueAccesses * 0.2)}/{Math.round(uniqueAccesses * 0.4)}<span
							class="ml-1 text-sm text-green-500">↗ +6%</span
						>
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
