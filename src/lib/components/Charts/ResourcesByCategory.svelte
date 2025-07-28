<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';
	import { mockData } from '$lib/data/mock';
	import { extractCategoryData } from '../../../routes/resources/utils/helpers';

	Chart.register(...registerables);

	const { resources } = mockData;
	const categoryData = extractCategoryData(resources);

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		chart = new Chart(ctx, {
			type: 'pie',
			data: {
				labels: categoryData.map((item) => item.category),
				datasets: [
					{
						data: categoryData.map((item) => item.percentage),
						backgroundColor: categoryData.map((item) => item.color),
						borderWidth: 0
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: true,
				rotation: -90,
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						callbacks: {
							label: function (context) {
								return `${context.label}: ${context.parsed}%`;
							}
						}
					}
				},
				animation: {
					animateRotate: true,
					duration: 1000
				}
			}
		});

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});

	$: if (chart && chart.data.datasets[0]) {
		chart.data.labels = categoryData.map((item) => item.category);
		chart.data.datasets[0].data = categoryData.map((item) => item.percentage);
		chart.data.datasets[0].backgroundColor = categoryData.map((item) => item.color);
		chart.update('none');
	}
</script>

<div class="flex-1 rounded-lg bg-white p-6 shadow-sm">
	<h3 class="mb-4 text-lg font-medium  text-gray-300">Resources by category</h3>
	<div class="flex items-center gap-6">
		<div class="flex-shrink-0">
			<canvas bind:this={canvas} class="h-40 w-40" width="160" height="160"></canvas>
		</div>
		<div class="flex-1 space-y-2">
			{#each categoryData as item}
				<div class="flex items-center">
					<div class="mr-3 h-3 w-3 rounded-full" style="background-color: {item.color}"></div>
					<span class="text-sm text-gray-600">{item.percentage}% {item.category}</span>
				</div>
			{/each}
		</div>
	</div>
</div>
