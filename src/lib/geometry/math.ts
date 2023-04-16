import { combinations } from 'mathjs'

export const bersteinPolynomial = (index: number, order: number) => {
	return (u: number) =>
		combinations(order, index) * Math.pow(u, index) * Math.pow(1 - u, order - index)
}
