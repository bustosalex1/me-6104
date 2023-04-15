import { Vector3 } from 'three'
import { combinations } from 'mathjs'

interface Point<T> {
	vector: Vector3
	coefficient: T
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
	points: Point<(u: number) => number>[] = []
	order: number = this.points.length

	constructor() {}

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

export class BezierSurface {
	points: Point<(u: number, w: number) => number>[][] = []
	row_order: number = 0
	col_order: number = 0

	constructor() {}

	evaluate(u: number, w: number) {
		let result = new Vector3(0, 0, 0)
		let intermediate = new Vector3(0, 0, 0)
		for (let row = 0; row < this.points.length; row++) {
			for (let col = 0; col < this.points[row].length; col++) {
				intermediate.x = this.points[row][col].vector.x
				intermediate.y = this.points[row][col].vector.y
				intermediate.z = this.points[row][col].vector.z

				result.add(intermediate.multiplyScalar(this.points[row][col].coefficient(u, w)))
			}
		}
		return result
	}

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

	recomputeCoeffients() {
		this.row_order = this.points[0].length - 1
		this.col_order = this.points.length - 1

		for (let row = 0; row < this.points.length; row++) {
			for (let col = 0; col < this.points[row].length; col++) {
				this.points[row][col].coefficient = (u: number, w: number) =>
					bersteinPolynomial(row, this.row_order)(u) *
					bersteinPolynomial(col, this.col_order)(w)
			}
		}
	}

	flattenPoints() {
		const flattenedPoints: Point<(u: number, w: number) => number>[] = []

		for (let row = 0; row < this.points.length; row++) {
			for (let col = 0; col < this.points[row].length; col++) {
				flattenedPoints.push(this.points[row][col])
			}
		}

		return flattenedPoints
	}
}
