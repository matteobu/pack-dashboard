<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		goto('/resources', { replaceState: true });
	});
</script>

<div class="flex min-h-[50vh] items-center justify-center">
	<div class="text-gray-500">Loading...</div>
</div>
