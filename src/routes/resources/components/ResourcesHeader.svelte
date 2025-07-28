<script lang="ts">
	import ResourcesNavigationBar from './ResourcesNavigationBar.svelte';
	let searchQuery: string = '';
	export let onUpload: () => void;

	let mobileSearchOpen = false;

	function toggleMobileSearch() {
		mobileSearchOpen = !mobileSearchOpen;
	}
</script>

<div class="rounded-lg">
	<!-- Mobile Layout -->
	<div class="block md:hidden">
		<!-- Top row: Navigation and mobile controls -->
		<div class="flex items-center justify-between border-b border-gray-200 p-4">
			<div class="flex-1">
				<ResourcesNavigationBar mobile={true} />
			</div>
			<div class="ml-4 flex items-center gap-2">
				<button
					on:click={toggleMobileSearch}
					class="flex h-10 w-10 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100"
					aria-label="Toggle search"
				>
					<svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						></path>
					</svg>
				</button>
				<button
					on:click={onUpload}
					class="rounded-md bg-orange-500 px-3 py-2 text-sm font-medium text-white hover:bg-orange-600"
				>
					Upload
				</button>
			</div>
		</div>

		<!-- Mobile search (collapsible) -->
		{#if mobileSearchOpen}
			<div class="bg-gray-50 p-4">
				<div class="relative">
					<input
						type="text"
						placeholder="Search resources..."
						bind:value={searchQuery}
						readonly
						on:click={() =>
							alert(
								'🔍 Search Feature Status: "Loading..." 🔍\n\nETA: When I figure out how to search through imaginary data! 😅\n\nFor now, just scroll and enjoy the view! 👀✨'
							)}
						class="w-full cursor-pointer rounded-md border border-gray-300 py-2 pr-4 pl-10 text-sm hover:bg-gray-50"
					/>
					<svg
						class="absolute top-2.5 left-3 h-4 w-4 text-gray-400"
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
			</div>
		{/if}
	</div>

	<!-- Desktop Layout -->
	<div class="hidden md:block">
		<div class="flex items-center justify-between p-6">
			<div class="flex items-center gap-8 border-b border-gray-300">
				<ResourcesNavigationBar mobile={false} />
			</div>

			<div class="flex items-center space-x-4">
				<div class="relative">
					<input
						type="text"
						placeholder="Search resources..."
						bind:value={searchQuery}
						readonly
						on:click={() =>
							alert(
								'🔍 Search Feature Status: "Loading..." 🔍\n\nETA: When I figure out how to search through imaginary data! 😅\n\nFor now, just scroll and enjoy the view! 👀✨'
							)}
						class="w-full cursor-pointer rounded-md border border-gray-300 py-2 pr-4 pl-10 text-sm hover:bg-gray-50"
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
</div>
