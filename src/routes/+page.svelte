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

<div class="flex flex-col min-h-screen w-5/6 mx-auto space-x-2 space-y-6 justify-center">
	<div class="text-center flex flex-col justify-end bg-base-100">
		<h1 class="text text-3xl font-semibold">
			ME6104 Final Project: Bézier Curve and Surface Explorer
		</h1>
		<p>By Alexander Bustos and Darren Kosen</p>
	</div>
	<div class="flex flex-col space-y-2 justify-center lg:flex-row lg:space-x-2 lg:space-y-0 h-full">
		<div
			class="border border-black rounded-md drop-shadow-md bg-base-100 w-full lg:w-3/4 aspect-video"
		>
			<Viewer bind:curve bind:surface />
		</div>

		<div class="border border-black rounded-md drop-shadow-md bg-base-100 w-full lg:w-1/4">
			<ControlPanel bind:curve bind:surface />
		</div>
	</div>
</div>
