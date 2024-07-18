<script lang="ts">
	import { T, TransformControls, Three, InteractiveObject } from '@threlte/core';
	import type { BezierSurface } from '$lib/geometry';
	import { Line, Mesh, MeshStandardMaterial, DoubleSide, Vector3 } from 'three';
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

	let indicator = new Vector3();

	$: {
		surfaceMesh.geometry = surface.generate();
		surface.computeControlPolygon();
		surfaceMesh.material.wireframe = $settings.surface.wireframe.value;
		indicator = surface.evaluate($settings.u, $settings.w);
	}
</script>

<T.Group visible={$settings.curveActive !== 0}>
	{#if $settings.toggles.indicatorActive.value}
		<T.Group>
			<T.Mesh position.x={indicator.x} position.y={indicator.y} position.z={indicator.z}>
				<T.SphereGeometry args={[0.1]} />
				<T.MeshStandardMaterial color="#0000FF" />
			</T.Mesh>
		</T.Group>
	{/if}
	<!-- control points -->
	{#each surface.points as row}
		{#each row as point}
			<T.Group visible={$settings.toggles.pointsActive.value}>
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
						translationSnap={$settings.toggles.snapActive.value ? 1 : 0}
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
	{#each surface.controlPolygon as polygon}
		<Three type={Line} bind:ref={polygon} visible={$settings.toggles.controlPolygonActive.value}>
			<T.LineDashedMaterial color="#000000" dashSize={0.1} gapSize={0.1} transparent={true} />
		</Three>
	{/each}

	<!-- the actual surface -->
	<Three type={Mesh} bind:ref={surfaceMesh} castShadow />
</T.Group>
