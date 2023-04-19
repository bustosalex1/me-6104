<script lang="ts">
	import type { BezierCurve } from '$lib/geometry';
	import { scaleLinear } from 'd3-scale';
	import { settings } from '$lib/stores';

	export let curve: BezierCurve;

	const yTicks = [0, 0.25, 0.5, 0.75, 1.0];
	const padding = { top: 20, right: 0, bottom: 20, left: 25 };

	let width = 500;
	let height = 200;

	$: xScale = scaleLinear()
		.domain([0, curve.points.length])
		.range([padding.left, width - padding.right]);

	$: yScale = scaleLinear()
		.domain([0, 1])
		.range([height - padding.bottom, padding.top]);

	$: innerWidth = width - (padding.left + padding.right);
	$: barWidth = innerWidth / curve.points.length;
</script>

<div>
	<h2 class="text-center font-bold">Basis Function Values</h2>
	<div class="w-full my-2 mx-auto" bind:clientWidth={width} bind:clientHeight={height}>
		<svg class="w-full h-52">
			<!-- Y Axis -->
			<g>
				{#each yTicks as tick}
					<g class="text-xs" transform="translate(0, {yScale(tick)})">
						<line class="stroke-base-300" x2="100%" stroke-dasharray={5} stroke-width={0.75} />
						<text class="text-xs" y="-4">{tick}</text>
					</g>
				{/each}
			</g>

			<!-- X Axis -->
			<g>
				{#each curve.points as _, index}
					<g class="tick" transform="translate({xScale(index)},{height})">
						<text class="text-xs" x={barWidth / 2} y="-4">{index}</text>
					</g>
				{/each}
			</g>

			<!-- the actual bars -->
			<g>
				{#each curve.points as point, index}
					<g transform="translate({xScale(index) + 2}, {yScale(point.coefficient($settings.u))})">
						<rect
							class="fill-base-content"
							width={barWidth + 1}
							height={yScale(0) - yScale(point.coefficient($settings.u))}
						/>
					</g>
				{/each}
			</g>
		</svg>
	</div>
</div>
