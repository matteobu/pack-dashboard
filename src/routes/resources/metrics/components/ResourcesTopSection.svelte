<script>
	import ResourcesByCategory from '$lib/components/Charts/ResourcesByCategory.svelte';
	import UploadedContent from '$lib/components/Charts/UploadedContent.svelte';
	import MetricCards from '$lib/components/MetricCards/MetricCards.svelte';
	import ResourcesCircularWrapper from './ResourcesCircularWrapper.svelte';
</script>

<div class="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
	<div class="flex flex-col space-y-6">
		<ResourcesCircularWrapper />
		<ResourcesByCategory />
	</div>
	<div class="flex flex-col space-y-6">
		<MetricCards />
		<UploadedContent />
	</div>
</div>
