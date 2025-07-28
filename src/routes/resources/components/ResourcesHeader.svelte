<script lang="ts">
	import ResourcesNavigationBar from './ResourcesNavigationBar.svelte';
	let searchQuery: string = '';
	export let onUpload: () => void;
</script>

<div class="rounded-l">
	<div class="flex items-center justify-between p-6">
		<div class="flex items-center gap-8 border-b border-gray-300">
			<ResourcesNavigationBar />
		</div>

		<div class="flex items-center space-x-4">
			<div class="relative">
				<input
					type="text"
					placeholder="Field"
					bind:value={searchQuery}
					class="rounded-md border border-gray-300 py-2 pr-4 pl-10 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
				/>
				<svg
					class="absolute top-2.5 left-3 h-5 w-5 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					></path>
				</svg>
			</div>
			<button
				on:click={onUpload}
				class="rounded-md bg-orange-500 px-4 py-2 font-medium text-white hover:bg-orange-600"
			>
				Upload
			</button>
		</div>
	</div>
</div>
