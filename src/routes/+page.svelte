<script lang="ts">
	import CurveViewer from '$lib/CurveViewer.svelte';
	import ControlPanel from '$lib/ControlPanel.svelte';
	import { Canvas } from '@threlte/core';
</script>

<div
	class="flex flex-col items-center justify-center min-h-screen min-w-full bg-base-100 space-y-2"
>
	<div class="text-center">
		<h1 class="text text-3xl font-semibold">
			ME6104 Final Project: Bézier Curve and Surface Explorer
		</h1>
		<p>By Alexander Bustos and Darren Kosen</p>
	</div>
	<div class="flex flex-row space-x-2">
		<div class="border border-black rounded-md drop-shadow-md bg-base-100">
			<Canvas>
				<CurveViewer />
			</Canvas>
		</div>

		<div class="border border-black rounded-md drop-shadow-md bg-base-100">
			<ControlPanel />
		</div>
	</div>
</div>
