import { Vector3, Line } from 'three'
import type { Point, CurveCoefficient, Bezier } from '$lib/types'
import { bersteinPolynomial } from './math'

/**
 * Represents a Bezier curve defined by a variable number of control points. Also provides
 * functionality needed to render the curve with Three.js.
 */
export class BezierCurve implements Bezier {
	points: Point<CurveCoefficient>[] = []
	order: number = this.points.length
	resolution: number = 100
	controlPolygon: Line = new Line()

	constructor(
		points: Vector3[] = [
			new Vector3(0, 0, 0),
			new Vector3(1, 0, 0),
			new Vector3(2, 0, 0),
			new Vector3(3, 0, 0)
		]
	) {
		for (const point of points) {
			this.addPoint(point)
		}
	}

	evaluate(u: number) {
		let result = new Vector3(0, 0, 0)
		let intermediate = new Vector3(0, 0, 0)
		for (const { vector, coefficient } of this.points) {
			intermediate.x = vector.x
			intermediate.y = vector.y
			intermediate.z = vector.z
			result.add(intermediate.multiplyScalar(coefficient(u)))
		}

		return result
	}

	generate() {
		let points: Vector3[] = []
		for (let index = 0; index < this.resolution; index++) {
			let u = index / this.resolution
			points.push(this.evaluate(u))
		}

		return points
	}

	addPoint(point: Vector3) {
		this.points.push({
			vector: point,
			coefficient: bersteinPolynomial(this.order + 1, this.order + 1),
			enabled: false
		})
		this.recomputeCoeffients()
	}

	removePoint() {
		this.points.pop()
		this.recomputeCoeffients()
	}

	recomputeCoeffients() {
		this.order = this.points.length - 1
		this.points.forEach((item, index) => {
			item.coefficient = bersteinPolynomial(index, this.order)
		})
	}

	vectors() {
		return this.points.map((point) => point.vector)
	}

	computeControlPolygon() {
		this.controlPolygon.geometry.setFromPoints(this.vectors())
		this.controlPolygon.computeLineDistances()
	}
}
