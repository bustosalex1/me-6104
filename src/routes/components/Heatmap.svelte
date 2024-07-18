<script lang="ts">
	import type { BezierSurface } from '$lib/geometry';
	import { scaleLinear } from 'd3-scale';
	import { settings } from '$lib/stores';

	export let surface: BezierSurface;

	const padding = { top: 25, right: 25, bottom: 25, left: 25 };

	let width = 500;
	let height = 500;

	$: xScale = scaleLinear()
		.domain([0, surface.rowOrder + 1])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, surface.colOrder + 1])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: innerHeight = height - (padding.top + padding.bottom);
	$: barWidth = innerWidth / (surface.rowOrder + 1);
	$: barHeight = innerHeight / (surface.colOrder + 1);
</script>

<div>
	<h2 class="text-center font-bold">Basis Function Values</h2>
	<div class="w-52 h-52 my-2 mx-auto" bind:clientWidth={width} bind:clientHeight={height}>
		<svg class="w-52 h-52">
			<rect {width} {height} class="fill-none stroke-black" />
			<!-- Y Axis -->
			<g>
				{#each surface.points as _, index}
					<g class="text-xs" transform="translate(0, {yScale(index)})">
						<line class="stroke-base-300" x2="100%" stroke-width={0.75} />
						<text class="text-xs" y="-4">{index}</text>
					</g>
				{/each}
			</g>

			<!-- X Axis -->
			<g>
				{#each surface.points as _, index}
					<g class="tick" transform="translate({xScale(index)},{height})">
						<line class="stroke-base-300" y1="100%" y2="0%" stroke-width={0.75} />
						<text class="text-xs" x={barWidth / 2} y="-4">{index}</text>
					</g>
				{/each}
			</g>

			<!-- the actual bars -->
			<g>
				{#each surface.points as row, rowIndex}
					{#each row as point, colIndex}
						<g
							transform="translate({xScale(rowIndex) - barWidth / 2}, {yScale(colIndex) -
								barHeight / 2})"
						>
							<rect
								class="fill-base-content aspect-square"
								width={barWidth}
								height={barHeight}
								opacity={point.coefficient($settings.u, $settings.w)}
							/>
						</g>
					{/each}
				{/each}
			</g>
		</svg>
	</div>
</div>
