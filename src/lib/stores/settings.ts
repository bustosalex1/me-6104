import { writable } from 'svelte/store'
import type { Settings } from '$lib/types'

const createSettings = () => {
	const defaultSettings: Settings = {
		curveActive: 0,
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