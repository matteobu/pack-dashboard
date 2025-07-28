<script lang="ts">
	import { onMount } from 'svelte';
	import { Chart, registerables } from 'chart.js';
	import { mockData } from '$lib/data/mock';

	// Register Chart.js components
	Chart.register(...registerables);

	const { timeSeriesData } = mockData;

	let canvas: HTMLCanvasElement;
	let chart: Chart;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Prepare data
		const labels = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];

		// Sample data that matches your SVG lines
		const uploadedData = [10, 15, 20, 25, 30, 35, 30, 25, 30, 40, 50, 60];
		const usageData = [20, 25, 30, 35, 40, 45, 40, 35, 45, 55, 60, 70];

		chart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: labels,
				datasets: [
					{
						label: 'Uploaded Content',
						data: uploadedData,
						borderColor: '#60A5FA', // Blue
						backgroundColor: 'rgba(96, 165, 250, 0.1)',
						borderWidth: 2,
						fill: false,
						tension: 0.3, // Smooth curves
						pointRadius: 0, // Hide points
						pointHoverRadius: 4
					},
					{
						label: 'Usage',
						data: usageData,
						borderColor: '#FB923C', // Orange
						backgroundColor: 'rgba(251, 146, 60, 0.1)',
						borderWidth: 2,
						fill: false,
						tension: 0.3, // Smooth curves
						pointRadius: 0, // Hide points
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
						display: false // We'll add custom legend if needed
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
						display: false, // Hide x-axis (we'll show custom labels below)
						grid: {
							display: false
						}
					},
					y: {
						display: false, // Hide y-axis
						grid: {
							display: true,
							color: '#f3f4f6',
							lineWidth: 1
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
	<h3 class="mb-4 text-lg font-medium text-gray-300">Uploaded content vs Usage over time</h3>
	<div class="mb-4 h-48">
		<canvas bind:this={canvas} class="h-full w-full"></canvas>
	</div>
	<div class="flex justify-between text-xs text-gray-500">
		<span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span
		><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span
		>
	</div>
</div>
