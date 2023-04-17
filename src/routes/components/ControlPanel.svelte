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
		<div class="flex flex-col justify-center space-y-2">
			<button
				class="btn btn-outline btn-xs"
				on:click={() => {
					curve.addPoint(new Vector3(0, 0, 0));
					curve = curve;
				}}>Add Control Point</button
			>

			<button
				class="btn btn-outline btn-xs"
				on:click={() => {
					curve.removePoint();
					curve = curve;
				}}>Remove Control Point</button
			>
			<div class="h-52 overflow-auto">
				<table class="table table-compact w-full">
					<thead>
						<tr>
							<th>Index</th>
							<th class="text-center">X</th>
							<th class="text-center">Y</th>
							<th class="text-center">Z</th>
						</tr>
					</thead>
					{#each curve.points as { vector }, index}
						<tr>
							<th class="text-center">{index}</th>
							<td>
								<input
									type="number"
									class="input input-bordered input-xs w-full max-w-xs"
									value={vector.x.toFixed(2)}
								/>
							</td>
							<td>
								<input
									type="number"
									class="input input-bordered input-xs w-full max-w-xs"
									value={vector.y.toFixed(2)}
								/>
							</td>
							<td>
								<input
									type="number"
									class="input input-bordered input-xs w-full max-w-xs"
									value={vector.y.toFixed(2)}
								/>
							</td>
						</tr>
					{/each}
				</table>
			</div>
		</div>
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
