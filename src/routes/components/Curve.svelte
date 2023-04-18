<script lang="ts">
	import { T, TransformControls, Three, InteractiveObject } from '@threlte/core';
	import type { BezierCurve } from '$lib/geometry';
	import { Line } from 'three';
	import { settings } from '$lib/stores';
	export let curve: BezierCurve;
	let line = new Line();

	$: {
		line.geometry.setFromPoints(curve.generate());
		curve.computeControlPolygon();
	}
</script>

<T.Group visible={$settings.curveActive === 0}>
	{#each curve.points as point}
		<!-- control points -->
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
				{#if $settings.curveActive === 0}
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

	<!-- the actual curve -->
	<Three type={Line} bind:ref={line}>
		<T.LineBasicMaterial color="#FF0000" />
	</Three>

	<!-- control polygon -->
	<Three
		type={Line}
		bind:ref={curve.controlPolygon}
		visible={$settings.toggles.controlPolygonActive.value}
	>
		<T.LineDashedMaterial color="#000000" dashSize={0.1} gapSize={0.1} transparent={true} />
	</Three>
</T.Group>
