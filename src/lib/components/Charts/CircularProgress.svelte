<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';

	Chart.register(...registerables);

	export let percentage: number = 0;
	export let label: string = '';
	export let color: string = '#60A5FA';

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		chart = new Chart(ctx, {
			type: 'doughnut',
			data: {
				datasets: [
					{
						data: [percentage, 100 - percentage],
						backgroundColor: [color, '#E5E7EB'],
						borderWidth: 0
					}
				]
			},
			options: {
				cutout: '85%',
				rotation: 225,
				circumference: 270,
				responsive: true,
				maintainAspectRatio: true,
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						enabled: false
					}
				},
				elements: {
					arc: {
						borderRadius: 4
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
		chart.data.datasets[0].data = [percentage, 100 - percentage];
		chart.update('none');
	}
</script>

<div class="rounded-lg bg-white p-6 shadow-sm">
	<div class="flex flex-col items-center">
		<div class="relative mb-4 h-24 w-24">
			<canvas bind:this={canvas} class="h-24 w-24" width="96" height="96"></canvas>

			<div class="absolute inset-0 flex items-center justify-center">
				<span class="text-2xl font-bold" style="color: {color}">
					{percentage}%
				</span>
			</div>
		</div>
		<h3 class="text-center text-sm font-medium text-gray-300">
			{@html label}
		</h3>
	</div>
</div>
