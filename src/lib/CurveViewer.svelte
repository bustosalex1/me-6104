<script lang="ts">
	import { OrbitControls, T, TransformControls, Three, InteractiveObject } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import { BezierCurve, range } from './geometry';
	import { Vector3, BufferGeometry, Line } from 'three';
	let curve = new BezierCurve();
	curve.addPoint(new Vector3(0, 0, 0));
	curve.addPoint(new Vector3(1, 2, 3));
	curve.addPoint(new Vector3(4, 7, 3));
	curve.addPoint(new Vector3(8, 5, 5));
	let resolution = 100;
	let displayPoints: Vector3[] = [];
	let controlPolygonPoints: Vector3[] = [];
	let line = new Line();
	let controlPolygon = new Line();

	$: {
		displayPoints = [];
		for (const index of range(0, resolution + 1)) {
			let u = index / resolution;
			displayPoints.push(curve.line(u));
		}
		line.geometry.setFromPoints(displayPoints);
	}

	$: {
		controlPolygonPoints = [];
		for (const { vector } of curve.points) {
			controlPolygonPoints.push(vector);
		}
		controlPolygon.geometry.setFromPoints(controlPolygonPoints);
        controlPolygon.computeLineDistances()
	}
</script>

<div>
	<T.PerspectiveCamera makeDefault position={[10, 10, 10]} fov={24}>
		<OrbitControls maxPolarAngle={degToRad(80)} enableZoom={true} target={{ y: 0.5 }} />
	</T.PerspectiveCamera>

	<T.DirectionalLight castShadow position={[3, 10, 10]} />
	<T.DirectionalLight position={[-10, 10, -10]} intensity={0.2} />
	<T.AmbientLight intensity={0.2} />
	{#each curve.points as point}
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
					on:objectChange={(_) => {
						point.vector.x = ref.position.x;
						point.vector.y = ref.position.y;
						point.vector.z = ref.position.z;
					}}
					showX={point.enabled}
					showY={point.enabled}
					showZ={point.enabled}
				/>

				<InteractiveObject
					object={ref}
					interactive
					on:pointerenter={() => (point.enabled = true)}
					on:pointerdown={() => (point.enabled = true)}
					on:pointerup={() => (point.enabled = false)}
				/>
			</T.Mesh>
		</T.Group>
	{/each}
	<Three type={Line} bind:ref={line}>
		<T.LineBasicMaterial color="#FF0000" />
	</Three>

	<Three type={Line} bind:ref={controlPolygon}>
		<T.LineDashedMaterial color="#000000" dashSize={0.1} gapSize={0.1} transparent={true} />
	</Three>

	<!-- Cube -->
	<!-- <T.Group scale={$scale}> -->
	<!-- 	<T.Mesh position.y={0.5} castShadow let:ref> -->
	<!-- 		<!-- Add interaction --> -->
	<!-- 		<InteractiveObject -->
	<!-- 			object={ref} -->
	<!-- 			interactive -->
	<!-- 			on:pointerenter={() => ($scale = 2)} -->
	<!-- 			on:pointerleave={() => ($scale = 1)} -->
	<!-- 		/> -->
	<!---->
	<!-- 		<T.BoxGeometry /> -->
	<!-- 		<T.MeshStandardMaterial color="#FF0000" /> -->
	<!-- 	</T.Mesh> -->
	<!-- </T.Group> -->

	<T.Group>
		<T.GridHelper />
	</T.Group>
</div>

<style>
	div {
		height: 500px;
		width: 800px;
	}
</style>
