/**
 * A point in either a Bezier curve or surface. Consists of a vector describing the point's location
 * in space, a coefficient, which is a function that can be used when evaluating the curve/surface at
 * a particular value of u or (u, v), and a boolean to indicate whether the point is enabled, which
 * is useful for conditionally rendering things, like a coordinate frame when you mouse over the
 * point.
 */
export interface Point<T> {
	vector: Vector3
	coefficient: T
	enabled: boolean
}

export interface Bezier {
	generate: () => Vector3[]
	computeControlPolygon: () => void
}

/**
 * A coefficient used for Bezier curves. Accepts a single parameter, u, and evaluates a Bernstein
 * polynomial at u.
 */
export type CurveCoefficient = (u: number) => number

/**
 * A coefficient used for Bezier surfaces. Accepts two parameters, u and w, and evaluates a product
 * of Bernstein polynomials at u and w.
 */
export type SurfaceCoefficient = (u: number, w: number) => number
