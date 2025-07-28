<script lang="ts">
	import MostUsedCard from '$lib/components/MostUsedCard/MostUsedCard.svelte';
	import { mockData } from '$lib/data/mock';
	import { getMostUsedByYear, getMostUsedByMonth } from '../../utils/helpers';

	const { resources } = mockData;

	$: topByYear = getMostUsedByYear(resources, 3);

	$: topByMonth = getMostUsedByMonth(resources, 3);
</script>

<div class="grid grid-cols-1 gap-8 lg:grid-cols-2">
	<MostUsedCard title="Most Used resources (by year)" resources={topByYear} />
	<MostUsedCard title="Most Used resources (by month)" resources={topByMonth} />
</div>
