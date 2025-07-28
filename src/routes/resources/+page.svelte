<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		// Default to metrics (icon tab)
		goto('/resources/metrics', { replaceState: true });
	});
</script>
