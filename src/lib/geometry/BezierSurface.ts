import type { Point, SurfaceCoefficient } from '$lib/types'
import { BufferAttribute, BufferGeometry, Line, Vector3 } from 'three'
import { bersteinPolynomial } from './math'

/**
 * Represents a Bezier surface defined by a variable number of control points. Also provides
 * functionality needed to render the surface with Three.js.
 */
export class BezierSurface {
	/**
	 * A 2D array control points defining the Bezier surface.
	 */
	points: Point<SurfaceCoefficient>[][] = []

	/**
	 * The order of the row-wise curves of the surface.
	 */
	rowOrder: number = 0

	/**
	 * The order of the column-wise curves of the surface.
	 */
	colOrder: number = 0

	/**
	 * The number of subdivisions along each axis to create when rendering the surface.
	 */
	resolution: number = 20

	/**
	 * A list of Three.js Line objects representing the surface control polygon.
	 */
	controlPolygon: Line[] = []

	/**
	 * Creates a new BezierSurface, with a set of default control points creating a flat, 3x3 plane.
	 */
	constructor(
		points: Vector3[][] = [
			[
				new Vector3(0, 0, 0),
				new Vector3(1, 0, 0),
				new Vector3(2, 0, 0),
				new Vector3(3, 0, 0)
			],
			[
				new Vector3(0, 0, 1),
				new Vector3(1, 0, 1),
				new Vector3(2, 0, 1),
				new Vector3(3, 0, 1)
			],
			[
				new Vector3(0, 0, 2),
				new Vector3(1, 0, 2),
				new Vector3(2, 0, 2),
				new Vector3(3, 0, 2)
			],
			[
				new Vector3(0, 0, 3),
				new Vector3(1, 0, 3),
				new Vector3(2, 0, 3),
				new Vector3(3, 0, 3.0)
			]
		]
	) {
		// populate surface with initial control points
		for (const row of points) {
			this.addRow(row)
		}

		// create control polygon based on the number of rows/cols
		for (let i = 0; i < this.rowOrder + this.colOrder + 2; i++) {
			this.controlPolygon.push(new Line())
		}
	}

	/**
	 * Evaluates the Bezier surface at u and w, where u and w are both in the range [0, 1].
	 */
	evaluate(u: number, w: number) {
		// initialize a vector to store the result in
		let result = new Vector3(0, 0, 0)

		// also initialize an intermediate vector to temporarily store values in, so multiplyScalar
		// doesn't change the values of the actual control points.
		let intermediate = new Vector3(0, 0, 0)
		for (let row = 0; row < this.points.length; row++) {
			for (let col = 0; col < this.points[row].length; col++) {
				// copy values into the intermediate vector
				intermediate.x = this.points[row][col].vector.x
				intermediate.y = this.points[row][col].vector.y
				intermediate.z = this.points[row][col].vector.z

				result.add(intermediate.multiplyScalar(this.points[row][col].coefficient(u, w)))
			}
		}
		return result
	}

	/**
	 * Generates the geometry used to render the surface using Three.js.
	 */
	generate() {
		const width = this.resolution
		const height = this.resolution

		const surfacePoints: Vector3[][] = []

		for (let row = 0; row < width + 1; row++) {
			let newRow: Vector3[] = []
			for (let col = 0; col < height + 1; col++) {
				newRow.push(this.evaluate(row / width, col / height))
			}
			surfacePoints.push(newRow)
		}

		// Create vertices and indices arrays for the BufferGeometry
		const vertices = new Float32Array(width * height * 3 * 6)
		const indices = new Uint32Array(width * height * 6)

		for (let i = 0, vIdx = 0, idx = 0; i < height; i++) {
			for (let j = 0; j < width; j++) {
				// Add two triangles for each grid cell
				const p1 = surfacePoints[j][i]
				const p2 = surfacePoints[j + 1][i]
				const p3 = surfacePoints[j + 1][i + 1]
				const p4 = surfacePoints[j][i + 1]

				vertices.set([p1.x, p1.y, p1.z], vIdx)
				vertices.set([p2.x, p2.y, p2.z], vIdx + 3)
				vertices.set([p4.x, p4.y, p4.z], vIdx + 6)
				vertices.set([p2.x, p2.y, p2.z], vIdx + 9)
				vertices.set([p3.x, p3.y, p3.z], vIdx + 12)
				vertices.set([p4.x, p4.y, p4.z], vIdx + 15)

				indices.set([vIdx / 3, vIdx / 3 + 1, vIdx / 3 + 2], idx)
				indices.set([vIdx / 3 + 3, vIdx / 3 + 4, vIdx / 3 + 5], idx + 3)

				vIdx += 18
				idx += 6
			}
		}

		// Create the BufferGeometry
		const geometry = new BufferGeometry()

		geometry.setAttribute('position', new BufferAttribute(vertices, 3))
		geometry.setIndex(new BufferAttribute(indices, 1))
		geometry.computeVertexNormals()

		return geometry
	}

	/**
	 * Adds a row of control points to the surface.
	 */
	addRow(points: Vector3[]) {
		const buffer: Point<(u: number, w: number) => number>[] = []

		for (const point of points) {
			buffer.push({
				vector: point,
				coefficient: (u: number, w: number) => u + w,
				enabled: false
			})
		}

		this.points.push(buffer)
		this.recomputeCoeffients()
	}

	/**
	 * Removes the last row of control points from the surface.
	 */
	removeRow() {
		this.points.pop()
		this.recomputeCoeffients()
	}

	recomputeCoeffients() {
		// this is probably not very safe
		this.rowOrder = this.points[0].length - 1 ?? 0
		this.colOrder = this.points.length - 1 ?? 0

		for (let row = 0; row < this.points.length; row++) {
			for (let col = 0; col < this.points[row].length; col++) {
				this.points[row][col].coefficient = (u: number, w: number) =>
					bersteinPolynomial(row, this.rowOrder)(u) *
					bersteinPolynomial(col, this.colOrder)(w)
			}
		}
	}

	/**
	 * Returns a 2D array of Vector3's corresponding to the control points defining the surface
	 * (which are Points, so they have some more information which is sometimes unhelpful for certain
	 * operations).
	 */
	vectors() {
		return this.points.map((row) => row.map((point) => point.vector))
	}

	computeControlPolygon() {
		const vectors = this.vectors()
		const rowsAndColumns = this.rowOrder + this.colOrder + 2

		// make sure the number of lines in the control polygon matches the number of rows and
		// columns that make up the surface
		if (this.controlPolygon.length > rowsAndColumns) {
			while (this.controlPolygon.length > rowsAndColumns) {
				this.controlPolygon.pop()
			}
		} else if (this.controlPolygon.length < rowsAndColumns) {
			this.controlPolygon.push(new Line())
		}

		for (let i = 0; i < this.rowOrder + 1; i++) {
			this.controlPolygon[i].geometry.setFromPoints(vectors[i])
			this.controlPolygon[i].computeLineDistances()
		}

		for (let i = 0; i < this.colOrder + 1; i++) {
			this.controlPolygon[this.rowOrder + 1 + i].geometry.setFromPoints(
				vectors.map((row) => row[i])
			)
			this.controlPolygon[this.rowOrder + 1 + i].computeLineDistances()
		}
	}
}
