import { writable } from 'svelte/store'
import type { Settings } from '$lib/types'

const createSettings = () => {
	const defaultSettings: Settings = {
		curveActive: 0,
		surface: {
			controlPolygonActive: false,
			pointsActive: true
		},
		curve: {
			controlPolygonActive: false,
			pointsActive: true
		},
		controlPolygonActive: false
	}

	const { subscribe, set, update } = writable(defaultSettings)

	return {
		subscribe,
		update,
		set
	}
}

export const settings = createSettings()
