<script lang="ts">
	import type { BezierCurve, BezierSurface } from '$lib/geometry';
	import { Vector3 } from 'three';
	import { settings } from '$lib/stores';
	export let curve: BezierCurve;
	export let surface: BezierSurface;

	let tabs = ['Curve', 'Surface'];
</script>

<div class="p-2">
	<h1 class="text text-xl font-semibold text-center">Control Panel</h1>
	<div class="tabs justify-center">
		{#each tabs as tab, index}
			<button
				class="tab"
				class:tab-active={$settings.curveActive == index}
				class:italic={$settings.curveActive == index}
				on:click={() => {
					settings.update((settings) => {
						return { ...settings, curveActive: index };
					});
				}}
			>
				{tab}
			</button>
		{/each}
	</div>

	<div class:hidden={$settings.curveActive != 0}>
		<button
			class="btn btn-outline btn-sm"
			on:click={() => {
				curve.addPoint(new Vector3(0, 0, 0));
				curve = curve;
			}}>Add Control Point</button
		>

		<button
			class="btn btn-outline btn-sm"
			on:click={() => {
				curve.removePoint();
				curve = curve;
			}}>Remove Control Point</button
		>
	</div>

	<div class:hidden={$settings.curveActive != 1}>
		<div class="form-control">
			<label class="label cursor-pointer justify-start space-x-2">
				<input
					type="checkbox"
					class="toggle toggle-sm"
					checked={$settings.controlPolygonActive}
					on:input={() => {
						settings.update((settings) => {
							return { ...settings, controlPolygonActive: !settings.controlPolygonActive };
						});
					}}
				/>
				<span class="text-left">Control Polygon</span>
			</label>
		</div>
	</div>
</div>
