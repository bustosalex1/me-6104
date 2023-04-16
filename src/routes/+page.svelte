<script lang="ts">
	import ControlPanel from './components/ControlPanel.svelte';
	import { BezierCurve, BezierSurface } from '$lib/geometry';
	import Viewer from './components/Viewer.svelte';

	let curve = new BezierCurve();
	let surface = new BezierSurface();
</script>

<div class="grid grid-cols-4 grid-rows-4 gap-2 min-h-screen w-3/4 mx-auto">
	<div
		class="col-start-1 col-span-full row-start-1 row-end-1 text-center flex flex-col justify-end"
	>
		<h1 class="text text-3xl font-semibold">
			ME6104 Final Project: Bézier Curve and Surface Explorer
		</h1>
		<p>By Alexander Bustos and Darren Kosen</p>
	</div>
	<div
		class="border border-black rounded-md drop-shadow-md bg-base-100 row-start-2 row-span-2 col-start-1 col-span-3"
	>
		<Viewer bind:curve bind:surface />
	</div>

	<div
		class="border border-black rounded-md drop-shadow-md bg-base-100 col-start-4 col-span-1 row-start-2 row-span-2"
	>
		<ControlPanel bind:curve bind:surface />
	</div>
</div>
