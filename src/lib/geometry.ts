import { Mesh, Vector3 } from 'three'
import { combinations } from 'mathjs'

interface Point {
	vector: Vector3
	coefficient: (u: number) => number
	enabled: boolean
}

// I guess JS doesn't have a range function??
export const range = (start: number, stop: number, step: number = 1) => {
	const result: number[] = []
	for (let i = start; i < stop; i += step) {
		result.push(i)
	}
	return result
}

const bersteinPolynomial = (index: number, order: number) => {
	return (u: number) =>
		combinations(order, index) * Math.pow(u, index) * Math.pow(1 - u, order - index)
}

export class BezierCurve {
	points: Point[] = []
	order: number = this.points.length
	constructor() {}

	line(u: number) {
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

	addPoint(point: Vector3) {
		this.points.push({
			vector: point,
			coefficient: bersteinPolynomial(this.order + 1, this.order + 1),
			enabled: false
		})
		this.recomputeCoeffients()
	}

	recomputeCoeffients() {
		this.order = this.points.length - 1
		this.points.forEach((item, index) => {
			item.coefficient = bersteinPolynomial(index, this.order)
		})
	}
}
