<script lang="ts">
	import { OrbitControls, T, TransformControls, Three, InteractiveObject } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import { BezierCurve, BezierSurface } from '$lib/geometry';
	import { Line, Mesh, MeshStandardMaterial, DoubleSide } from 'three';

	let curve = new BezierCurve();
	let surface = new BezierSurface();

	let planeMesh = new Mesh(
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

	let line = new Line();

	$: {
		planeMesh.geometry = surface.generate();
		line.geometry.setFromPoints(curve.generate());
	}

	$: {
		curve.computeControlPolygon();
		surface.computeControlPolygon();
	}
</script>

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
				on:objectChange={() => {
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
				on:pointerleave={() => (point.enabled = false)}
			/>
		</T.Mesh>
	</T.Group>
{/each}

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

				<InteractiveObject
					object={ref}
					interactive
					on:pointerenter={() => (point.enabled = true)}
					on:pointerleave={() => (point.enabled = false)}
				/>
			</T.Mesh>
		</T.Group>
	{/each}
{/each}

<Three type={Line} bind:ref={line}>
	<T.LineBasicMaterial color="#FF0000" />
</Three>

<Three type={Line} bind:ref={curve.controlPolygon}>
	<T.LineDashedMaterial color="#000000" dashSize={0.1} gapSize={0.1} transparent={true} />
</Three>

{#each surface.controlPolygon as polygon}
	<Three type={Line} bind:ref={polygon}>
		<T.LineDashedMaterial color="#0000FF" dashSize={0.1} gapSize={0.1} transparent={true} />
	</Three>
{/each}

<Three type={Mesh} bind:ref={planeMesh} castShadow />

<T.Group>
	<T.GridHelper />
</T.Group>
