<script lang="ts">
	import type { BezierCurve } from '$lib/geometry';
	import { onMount } from 'svelte';

	export let curve: BezierCurve;

	let selectedPoint: { x: number; y: number } = { x: 0, y: 0 };
	let basisFunctions: number[] = [];

//need to fix evaluateBasisFunctions for the 3d coord vector
	onMount(() => {
		curve.evaluateBasisFunctions(0);
	});

	const handleMouseClick = (event: MouseEvent) => {
		const canvas = event.target as HTMLCanvasElement;
		const rect = canvas.getBoundingClientRect();
		const x = event.clientX - rect.left;
		const y = event.clientY - rect.top;
//fix pixel coord to point on curve coord (pull from control panel??)
		// Convert pixel coordinates to WebGL coordinates
		const [width, height] = [canvas.clientWidth, canvas.clientHeight];
		selectedPoint.x = (x / width) * 2 - 1;
		selectedPoint.y = -(y / height) * 2 + 1;

		curve.evaluateBasisFunctions(0);
	};

	const getBarHeight = (value: number) => {
		return (value / Math.max(...basisFunctions)) * 100;
	};

	const getBarColor = (value: number) => {
		const index = basisFunctions.indexOf(value);
		const color = `hsl(${(index / basisFunctions.length) * 360}, 70%, 50%)`;
		return color;
	};
</script>

<div class="w-full h-full">
	<canvas on:click={handleMouseClick}></canvas>
	{#if basisFunctions.length > 0}
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-2 p-2">
			{#each basisFunctions as value, i}
				<div
					class="relative bg-gray-100 rounded-sm overflow-hidden"
					style="height: {getBarHeight(value)}%; background-color: {getBarColor(value)};"
					title={`Basis Function ${i}`}
				>
					<div class="absolute bottom-0 left-0 p-1 text-xs">{value.toFixed(2)}</div>
				</div>
			{/each}
		</div>
	{:else}
		<p>No basis functions to display</p>
	{/if}
</div>
