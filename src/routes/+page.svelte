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

<div class="flex flex-col space-y-2 lg:h-screen p-8 bg-base-100">
	<!--title text-->
	<div class="text-center text-3xl font-semibold">
		ME6104 Final Project: Bézier Curve and Surface Explorer
	</div>

	<!--div that changes size to fill the rest of the page and contains all the stuff.-->
	<div class="flex flex-col gap-2 flex-1 lg:flex-row lg:overflow-hidden">
		<!--Threlte viewer-->
		<div
			class="border border-black h-[50vh] lg:h-full lg:min-h-0 rounded-md drop-shadow-md bg-base-100 lg:w-3/4"
		>
			<Viewer bind:curve bind:surface />
		</div>

		<!--Control Panel-->
		<div class="border border-black rounded-md drop-shadow-md bg-base-100 lg:w-1/4 overflow-y-auto">
			<ControlPanel bind:curve bind:surface />
		</div>
	</div>
</div>
