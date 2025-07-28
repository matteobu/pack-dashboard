<!-- src/routes/[route]/+page.svelte -->
<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let countdown = 3;
	let intervalId: number;

	$: routeName = $page.params.route || $page.url.pathname.slice(1) || 'page';

	onMount(() => {
		// Start countdown
		intervalId = setInterval(() => {
			countdown--;
			if (countdown <= 0) {
				clearInterval(intervalId);
				goto('/resources');
			}
		}, 1000);

		// Cleanup on component destroy
		return () => {
			if (intervalId) {
				clearInterval(intervalId);
			}
		};
	});
</script>

<svelte:head>
	<title>{routeName} - Not Implemented</title>
</svelte:head>

<div class="flex min-h-screen items-center justify-center bg-gray-50 px-4">
	<div class="w-full max-w-md rounded-lg bg-white p-8 text-center shadow-lg">
		<!-- Icon -->
		<div class="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
			<svg class="h-8 w-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>

		<!-- Title -->
		<h1 class="mb-2 text-2xl font-bold text-gray-900 capitalize">
			{routeName} Page
		</h1>

		<!-- Message -->
		<p class="mb-6 text-gray-600">
			The <span class="font-semibold text-orange-500">/{routeName}</span> page is not yet implemented.
		</p>

		<!-- Countdown -->
		<div class="mb-6 rounded-lg bg-gray-50 p-4">
			<p class="mb-2 text-sm text-gray-600">You'll be redirected to Resources in:</p>
			<div class="text-3xl font-bold text-orange-500">
				{countdown}
			</div>
			<p class="mt-1 text-xs text-gray-500">
				second{countdown !== 1 ? 's' : ''}
			</p>
		</div>

		<!-- Footer -->
		<p class="mt-6 text-xs text-gray-400">This is a placeholder page for development purposes</p>
	</div>
</div>
