<script lang="ts">
	import CurveViewer from '$lib/CurveViewer.svelte';
	import { Canvas } from '@threlte/core';
</script>

<div class="flex flex-col items-center justify-center min-h-screen min-w-full bg-base-100">
	<h1 class="text text-3xl font-semibold">
		ME6104 Final Project: Bézier Curve and Surface Explorer
	</h1>
	<p>By Alexander Bustos and Darren Kosen</p>
	<Canvas>
		<CurveViewer />
	</Canvas>
</div>
