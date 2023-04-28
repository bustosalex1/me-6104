<script lang="ts">
	import ControlPanel from './components/ControlPanel.svelte';
	import { BezierCurve, BezierSurface } from '$lib/geometry';
	import Viewer from './components/Viewer.svelte';

	let curve = new BezierCurve();
	let surface = new BezierSurface();
</script>

<svelte:head>
	<title>ME 6104 Final Project</title>
</svelte:head>

<div
	class="grid grid-rows-auto py-5 grid-cols-1 lg:grid-cols-6 px-5 lg:px-20 min-h-screen w-full gap-2"
>
	<div
		class="text-center flex flex-col justify-end bg-base-100 col-start-1 col-span-full row-start-1 row-span-1"
	>
		<h1 class="text text-3xl font-semibold">
			ME6104 Final Project: Bézier Curve and Surface Explorer
		</h1>
		<p>By Alexander Bustos and Darren Kosen</p>
	</div>
	<div class="row-start-2 row-span-1 lg:row-span-3 col-start-1 col-span-full lg:col-span-4">
		<div class="border border-black rounded-md drop-shadow-md bg-base-100 h-full viewer">
			<Viewer bind:curve bind:surface />
		</div>
	</div>

	<div
		class="row-start-3 lg:row-start-2 row-span-1 lg:row-span-3 col-start-1 lg:col-start-5 col-span-1 lg:col-span-2"
	>
		<div class="border border-black rounded-md drop-shadow-md bg-base-100 w-full h-full">
			<ControlPanel bind:curve bind:surface />
		</div>
	</div>
</div>

<style>
	.viewer {
		min-height: 500px;
	}
</style>
