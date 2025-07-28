<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header/Header.svelte';
	import LayoutWrapper from '$lib/components/LayoutWrapper.svelte';
</script>

<Header />

<LayoutWrapper>
	<slot />
</LayoutWrapper>
