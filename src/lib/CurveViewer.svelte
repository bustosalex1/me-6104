<script lang="ts">
	import { OrbitControls, T, TransformControls, Three, InteractiveObject } from '@threlte/core';
	import { degToRad } from 'three/src/math/MathUtils';
	import { BezierCurve, BezierSurface, range } from './geometry';
	import {
		Vector3,
		Line,
		PlaneGeometry,
		Mesh,
		BufferGeometry,
		MeshBasicMaterial,
		BufferAttribute,
		MeshStandardMaterial,
		DoubleSide
	} from 'three';
	let curve = new BezierCurve();
	let surface = new BezierSurface();
	surface.addRow([
		new Vector3(0, 0, 0),
		new Vector3(1, 0, 0),
		new Vector3(2, 0, 0),
		new Vector3(3, 0, 0)
	]);

	surface.addRow([
		new Vector3(0, 1, 0),
		new Vector3(1, 1, 0),
		new Vector3(2, 1, 0),
		new Vector3(3, 1, 0)
	]);

	surface.addRow([
		new Vector3(0, 2, 0),
		new Vector3(1, 2, 0),
		new Vector3(2, 2, 0),
		new Vector3(3, 2, 0)
	]);

	surface.addRow([
		new Vector3(0, 3, 0),
		new Vector3(1, 3, 0),
		new Vector3(2, 3.2, 0.5),
		new Vector3(3, 3, 0)
	]);

	let resolution = 100;

	curve.addPoint(new Vector3(0, 0, 0));
	curve.addPoint(new Vector3(1, 2, 3));
	curve.addPoint(new Vector3(4, 7, 3));
	curve.addPoint(new Vector3(8, 5, 5));

	let displayPoints: Vector3[] = [];
	let controlPolygonPoints: Vector3[] = [];
	let planeMesh = new Mesh();
	let plane = new PlaneGeometry(3, 3, 3, 3);
	let line = new Line();
	let controlPolygon = new Line();

	planeMesh = new Mesh();
	console.log(planeMesh.geometry);

	// LOL
	$: {
		const width = 20;
		const height = 20;

		const surfacePoints: Vector3[][] = [];

		for (let row = 0; row < width + 1; row++) {
			let newRow: Vector3[] = [];
			for (let col = 0; col < height + 1; col++) {
				newRow.push(surface.evaluate(row / width, col / height));
			}
			surfacePoints.push(newRow);
		}

		// Create vertices and indices arrays for the BufferGeometry
		const vertices = new Float32Array(width * height * 3 * 6);
		const indices = new Uint32Array(width * height * 6);

		for (let i = 0, vIdx = 0, idx = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				// Add two triangles for each grid cell
				const p1 = surfacePoints[j][i];
				const p2 = surfacePoints[j + 1][i];
				const p3 = surfacePoints[j + 1][i + 1];
				const p4 = surfacePoints[j][i + 1];

				vertices.set([p1.x, p1.y, p1.z], vIdx);
				vertices.set([p2.x, p2.y, p2.z], vIdx + 3);
				vertices.set([p4.x, p4.y, p4.z], vIdx + 6);
				vertices.set([p2.x, p2.y, p2.z], vIdx + 9);
				vertices.set([p3.x, p3.y, p3.z], vIdx + 12);
				vertices.set([p4.x, p4.y, p4.z], vIdx + 15);

				indices.set([vIdx / 3, vIdx / 3 + 1, vIdx / 3 + 2], idx);
				indices.set([vIdx / 3 + 3, vIdx / 3 + 4, vIdx / 3 + 5], idx + 3);

				vIdx += 18;
				idx += 6;
			}
		}

		// Create the BufferGeometry
		const geometry = new BufferGeometry();
		geometry.setAttribute('position', new BufferAttribute(vertices, 3));
		geometry.setIndex(new BufferAttribute(indices, 1));
		geometry.computeVertexNormals();

		// Create a material
		const material = new MeshStandardMaterial({
			color: '#FF0000',
			side: DoubleSide,
			flatShading: false
		});

		// Create a mesh and add it to the scene
		planeMesh = new Mesh(geometry, material);
	}
	$: {
		displayPoints = [];
		for (const index of range(0, resolution + 1)) {
			let u = index / resolution;
			displayPoints.push(curve.evaluate(u));
		}
		line.geometry.setFromPoints(displayPoints);
	}

	$: {
		controlPolygonPoints = [];
		for (const { vector } of curve.points) {
			controlPolygonPoints.push(vector);
		}
		controlPolygon.geometry.setFromPoints(controlPolygonPoints);
		controlPolygon.computeLineDistances();
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

<Three type={Line} bind:ref={controlPolygon}>
	<T.LineDashedMaterial color="#000000" dashSize={0.1} gapSize={0.1} transparent={true} />
</Three>

<Three type={Mesh} bind:ref={planeMesh} />

<T.Group>
	<T.GridHelper />
</T.Group>
