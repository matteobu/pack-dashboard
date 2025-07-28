<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';
	import { mockTimeSeriesData } from '$lib/data/mock/charts';

	Chart.register(...registerables);

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		const labels = mockTimeSeriesData.map((item) => {
			const date = new Date(item.date);
			return date.getDate().toString();
		});

		const uploadedData = mockTimeSeriesData.map((item) => item.uploaded);
		const usageData = mockTimeSeriesData.map((item) => item.usage);

		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Uploaded Content',
						data: uploadedData,
						borderColor: '#60A5FA',
						backgroundColor: 'rgba(96, 165, 250, 0.1)',
						borderWidth: 2,
						fill: false,
						tension: 0.3,
						pointRadius: 0,
						pointHoverRadius: 4
					},
					{
						label: 'Usage',
						data: usageData,
						borderColor: '#FB923C',
						backgroundColor: 'rgba(251, 146, 60, 0.1)',
						borderWidth: 2,
						fill: false,
						tension: 0.3,
						pointRadius: 0,
						pointHoverRadius: 4
					}
				]
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				interaction: {
					intersect: false,
					mode: 'index'
				},
				plugins: {
					legend: {
						display: false
					},
					tooltip: {
						backgroundColor: 'rgba(0, 0, 0, 0.8)',
						titleColor: 'white',
						bodyColor: 'white',
						cornerRadius: 6
					}
				},
				scales: {
					x: {
						display: false,
						grid: {
							display: false
						}
					},
					y: {
						display: true,
						min: 0,
						max: 150,
						ticks: {
							stepSize: 15,
							color: '#D1D5DB',
							font: {
								size: 8
							}
						},
						grid: {
							display: true,
							color: '#E5E7EB',
							lineWidth: 1
						},
						border: {
							display: false
						}
					}
				},
				elements: {
					line: {
						borderCapStyle: 'round',
						borderJoinStyle: 'round'
					}
				},
				animation: {
					duration: 1000,
					easing: 'easeInOutQuart'
				}
			}
		});

		return () => {
			if (chart) {
				chart.destroy();
			}
		};
	});
</script>

<div class="flex-1 rounded-lg bg-white p-6 shadow-sm">
	<h3 class="text-md mb-4 text-center font-medium text-gray-300">
		Uploaded content vs Usage over time
	</h3>
	<div class="mb-4 h-48">
		<canvas bind:this={canvas} class="h-full w-full"></canvas>
	</div>
	<div class="flex justify-between text-xs text-gray-500">
		<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span
		><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span
		>
	</div>
</div>
