<script>
	import { mockData } from '$lib/data/mock';
	import { EllipsisVertical } from '@lucide/svelte/icons';
	import { formatDate } from '../../utils/helpers';

	const { contentAccess } = mockData;

	// Filter state
	let selectedProvider = '';
	let dateFrom = '';
	let dateTo = '';

	// Get unique providers for dropdown
	$: providers = [...new Set(contentAccess.map((access) => access.providerType))];

	// Filtered data
	$: filteredContentAccess = contentAccess.filter((access) => {
		// Provider filter
		if (selectedProvider && access.providerType !== selectedProvider) {
			return false;
		}

		// Date from filter
		if (dateFrom) {
			const fromDate = new Date(dateFrom);
			if (access.openedOn < fromDate) {
				return false;
			}
		}

		// Date to filter
		if (dateTo) {
			const toDate = new Date(dateTo);
			toDate.setHours(23, 59, 59, 999); // End of day
			if (access.openedOn > toDate) {
				return false;
			}
		}

		return true;
	});

	// Clear filters function
	function clearFilters() {
		selectedProvider = '';
		dateFrom = '';
		dateTo = '';
	}

	// Download function (mock)
	function handleDownload() {
		console.log('Downloading filtered data:', filteredContentAccess);
		alert(`Downloading ${filteredContentAccess.length} records`);
	}
</script>

<div class="rounded-lg bg-white shadow-sm">
	<div class="border-b px-6 py-4">
		<h3 class="text-lg font-medium">User Content Access</h3>
		<div class="mt-4 flex flex-wrap items-center gap-4">
			<select
				bind:value={selectedProvider}
				class="rounded-md border border-gray-300 px-3 py-2 text-sm"
			>
				<option value="">All Providers</option>
				{#each providers as provider}
					<option value={provider}>{provider}</option>
				{/each}
			</select>

			<div class="flex items-center space-x-2">
				<span class="text-sm text-gray-500">From</span>
				<input
					type="date"
					bind:value={dateFrom}
					class="rounded-md border border-gray-300 px-3 py-2 text-sm"
				/>
			</div>

			<div class="flex items-center space-x-2">
				<span class="text-sm text-gray-500">To</span>
				<input
					type="date"
					bind:value={dateTo}
					class="rounded-md border border-gray-300 px-3 py-2 text-sm"
				/>
			</div>

			<button
				on:click={handleDownload}
				class="rounded-md bg-orange-500 px-4 py-2 text-sm text-white hover:bg-orange-600"
			>
				Download ({filteredContentAccess.length})
			</button>

			{#if selectedProvider || dateFrom || dateTo}
				<button
					on:click={clearFilters}
					class="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-600 hover:bg-gray-200"
				>
					Clear Filters
				</button>
			{/if}
		</div>
	</div>

	<div class="overflow-hidden">
		<!-- Single table with scrollable tbody -->
		<div class="overflow-x-auto">
			<table class="min-w-full divide-y divide-gray-200">
				<thead class="sticky top-0 z-10 bg-gray-50">
					<tr>
						<th
							class="w-1/4 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>User</th
						>
						<th
							class="w-1/4 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Accessed Content</th
						>
						<th
							class="w-1/6 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Opened on</th
						>
						<th
							class="w-1/6 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Closed on</th
						>
						<th
							class="w-1/8 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
							>Provider</th
						>
						<th
							class="w-16 px-6 py-3 text-left text-xs font-medium tracking-wider text-gray-500 uppercase"
						></th>
					</tr>
				</thead>
			</table>
		</div>

		<!-- Scrollable tbody container -->
		<div class="max-h-80 overflow-y-auto">
			<table class="min-w-full">
				<tbody class="divide-y divide-gray-200 bg-white">
					{#each filteredContentAccess as access}
						<tr>
							<td class="w-1/4 px-6 py-4 whitespace-nowrap">
								<div class="flex items-center">
									<img
										class="h-8 w-8 rounded-full"
										src="https://i.pravatar.cc/32?u={access.user.id}"
										alt=""
									/>
									<div class="ml-3">
										<div class="text-sm font-medium text-gray-900">{access.user.name}</div>
										<div class="text-sm text-gray-500">{access.user.role}</div>
									</div>
								</div>
							</td>
							<td class="w-1/4 px-6 py-4 text-sm whitespace-nowrap text-gray-900">
								{access.accessedContent}
							</td>
							<td class="w-1/6 px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								{formatDate(access.openedOn)}
							</td>
							<td class="w-1/6 px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								{access.closedOn ? formatDate(access.closedOn) : '-'}
							</td>
							<td class="w-1/8 px-6 py-4 whitespace-nowrap">
								<span
									class="inline-flex rounded-full px-2 py-1 text-xs font-semibold {access.providerType ===
									'Pack'
										? 'bg-orange-100 text-orange-800'
										: 'bg-green-100 text-green-800'}"
								>
									{access.provider}
								</span>
							</td>
							<td class="w-16 px-6 py-4 text-sm whitespace-nowrap text-gray-500">
								<button class="text-gray-400 hover:text-gray-600" aria-label="More options">
									<EllipsisVertical />
								</button>
							</td>
						</tr>
					{/each}
					{#if filteredContentAccess.length === 0}
						<tr>
							<td colspan="6" class="px-6 py-8 text-center text-gray-500">
								No records found matching your filters
							</td>
						</tr>
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>
