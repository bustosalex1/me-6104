<script lang="ts">
	import { T, TransformControls, Three, InteractiveObject } from '@threlte/core';
	import type { BezierSurface } from '$lib/geometry';
	import { Line, Mesh, MeshStandardMaterial, DoubleSide } from 'three';
	import { settings } from '$lib/stores';
	export let surface: BezierSurface;

	let surfaceMesh = new Mesh(
		surface.generate(),
		new MeshStandardMaterial({
			color: '#FF0000',
			side: DoubleSide,
			flatShading: false,
			wireframe: false,
			transparent: true,
			opacity: 0.5
		})
	);

	$: {
		surfaceMesh.geometry = surface.generate();
		surface.computeControlPolygon();
	}
</script>

<T.Group visible={$settings.curveActive !== 0}>
	<!-- control points -->
	{#each surface.points as row}
		{#each row as point}
			<T.Group>
				<T.Mesh
					position.x={point.vector.x}
					position.y={point.vector.y}
					position.z={point.vector.z}
					let:ref
				>
					<T.SphereGeometry args={[0.1]} />
					<T.MeshStandardMaterial color="#FF0000" />
					<TransformControls
						on:objectChange={() => {
							point.vector.x = ref.position.x;
							point.vector.y = ref.position.y;
							point.vector.z = ref.position.z;
						}}
						showX={point.enabled}
						showY={point.enabled}
						showZ={point.enabled}
					/>

					{#if $settings.curveActive === 1}
						<InteractiveObject
							object={ref}
							interactive
							on:pointerenter={() => (point.enabled = true)}
							on:pointerleave={() => (point.enabled = false)}
						/>
					{/if}
				</T.Mesh>
			</T.Group>
		{/each}
	{/each}

	<!-- the control polygon -->
	{#if $settings.controlPolygonActive}
		{#each surface.controlPolygon as polygon}
			<Three type={Line} bind:ref={polygon}>
				<T.LineDashedMaterial color="#0000FF" dashSize={0.1} gapSize={0.1} transparent={true} />
			</Three>
		{/each}
	{/if}

	<!-- the actual surface -->
	<Three type={Mesh} bind:ref={surfaceMesh} castShadow />
</T.Group>
