import { writable } from 'svelte/store'
import type { Settings } from '$lib/types'

const createSettings = () => {
	const defaultSettings: Settings = {
		curveActive: 0,
		u: 0.5,
		w: 0.5,
		toggles: {
			controlPolygonActive: {
				value: false,
				label: 'Control Polygon'
			},
			pointsActive: {
				value: true,
				label: 'Control Points'
			},
			snapActive: {
				value: false,
				label: 'Snap to Move'
			},
			indicatorActive: {
				value: false,
				label: 'Indicator'
			}
		},
		curve: {},
		surface: {
			wireframe: {
				value: false,
				label: 'Wireframe'
			}
		}
	}

	const { subscribe, set, update } = writable(defaultSettings)

	return {
		subscribe,
		update,
		set
	}
}

export const settings = createSettings()
