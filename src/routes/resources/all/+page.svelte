<script lang="ts">
	import { mockData } from '$lib/data/mock';

	const { resources } = mockData;

	$: sortedResources = [...resources].sort((a, b) => b.viewCountByYear - a.viewCountByYear);

	function formatDate(date: Date): string {
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
	}

	function getTypeColor(type: string): string {
		switch (type) {
			case 'Video':
				return 'bg-purple-100 text-purple-800';
			case 'Document':
				return 'bg-green-100 text-green-800';
			case 'Lesson':
				return 'bg-indigo-100 text-indigo-800';
			default:
				return 'bg-gray-100 text-gray-800';
		}
	}
</script>

<div class="space-y-6">
	<!-- Resources Table -->
	<div class="rounded-lg bg-white">
		<table class="w-full table-fixed divide-y divide-gray-200">
			<thead class="bg-white">
				<tr>
					<th class="w-1/3 px-6 py-3 text-left text-xs font-bold tracking-wider text-black">
						Content Title
					</th>
					<th class="w-1/6 px-6 py-3 text-left text-xs font-bold tracking-wider text-black">
						Path
					</th>
					<th class="w-1/8 px-6 py-3 text-left text-xs font-bold tracking-wider text-black">
						View Count
					</th>
					<th class="w-1/6 px-6 py-3 text-left text-xs font-bold tracking-wider text-black">
						Uploaded By
					</th>
					<th class="w-1/8 px-6 py-3 text-left text-xs font-bold tracking-wider text-black">
						Provider
					</th>
					<th class="w-1/8 px-6 py-3 text-left text-xs font-bold tracking-wider text-black">
						Type
					</th>
				</tr>
			</thead>
			<tbody class="divide-y divide-gray-200 bg-white">
				{#each sortedResources as resource}
					<tr class="transition-colors hover:bg-gray-50">
						<td class="px-6 py-4">
							<div class="flex flex-col">
								<div class="truncate text-sm font-medium text-gray-900">
									{resource.title}
								</div>
								<div class="truncate text-xs text-gray-500">
									{resource.description}
								</div>
							</div>
						</td>
						<td class="px-6 py-4">
							<div class="truncate text-sm text-gray-900">{resource.path}</div>
							<div class="truncate text-xs text-gray-500">{resource.category}</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<div class="text-sm font-medium text-gray-900">
								{resource.viewCountByYear.toLocaleString()}
							</div>
							<div class="text-xs text-gray-500">
								{resource.viewCountByMonth} this month
							</div>
						</td>
						<td class="px-6 py-4">
							<div class="truncate text-sm text-gray-900">{resource.uploadedBy}</div>
							<div class="text-xs text-gray-500">
								{formatDate(resource.uploadedAt)}
							</div>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="inline-flex rounded-full px-2 py-1 text-xs font-semibold {resource.provider ===
								'Pack'
									? 'bg-orange-100 text-orange-800'
									: 'bg-blue-100 text-blue-800'}"
							>
								{resource.provider}
							</span>
						</td>
						<td class="px-6 py-4 whitespace-nowrap">
							<span
								class="inline-flex rounded-full px-2 py-1 text-xs font-semibold {getTypeColor(
									resource.type
								)}"
							>
								{resource.type}
							</span>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<!-- Table Footer with Summary -->
		<div class="border-t border-gray-200 bg-gray-50 px-6 py-3">
			<div class="flex items-center justify-between text-sm text-gray-500">
				<div>
					Total: {sortedResources.length} resources
				</div>
				<div class="flex space-x-4">
					<span>Videos: {sortedResources.filter((r) => r.type === 'Video').length}</span>
					<span>Documents: {sortedResources.filter((r) => r.type === 'Document').length}</span>
					<span>Lessons: {sortedResources.filter((r) => r.type === 'Lesson').length}</span>
				</div>
			</div>
		</div>
	</div>
</div>
