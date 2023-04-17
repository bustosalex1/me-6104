<script lang="ts">
	import type { BezierCurve, BezierSurface } from '$lib/geometry';
	import { T, OrbitControls, Canvas } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import { settings } from '$lib/stores';
	import Curve from './Curve.svelte';
	import Surface from './Surface.svelte';
	export let curve: BezierCurve;
	export let surface: BezierSurface;
</script>

<div class="w-full h-full">
	<Canvas>
		<!-- Environment stuff, lights, camera, and whatnot -->
		<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
			<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={{ y: 0.5 }} />
		</T.PerspectiveCamera>
		<T.DirectionalLight castShadow position={[3, 10, 10]} />
		<T.DirectionalLight position={[-10, 10, -10]} intensity={0.2} />
		<T.AmbientLight intensity={0.2} />

		<!-- Curve/Surface goes here -->
		<Curve bind:curve />
		<Surface bind:surface />

		<!-- grid at the bottom -->
		<T.Group>
			<T.GridHelper />
		</T.Group>
	</Canvas>
</div>
