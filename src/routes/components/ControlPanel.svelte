<script lang="ts">
	import type { BezierCurve, BezierSurface } from '$lib/geometry';
	import { Vector3 } from 'three';
	import { settings } from '$lib/stores';
	import BarGraph from './BarGraph.svelte';
	import Heatmap from './Heatmap.svelte';
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

	{#if $settings.curveActive === 0}
		<BarGraph {curve} />
	{:else}
		<!-- <Heatmap {surface} /> -->
	{/if}
	<label class="label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap">
		<input
			type="range"
			min="0"
			max="100"
			value="50"
			class="range"
			on:input={(e) => {
				$settings.u = +e.currentTarget.value / 100;
			}}
		/>
		<span class="text-left text-sm"> <b>U</b> {$settings.u.toFixed(2)}</span>
	</label>

	{#if $settings.curveActive === 1}
		<label class="label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap">
			<input
				type="range"
				min="0"
				max="100"
				value="50"
				class="range"
				on:input={(e) => {
					$settings.w = +e.currentTarget.value / 100;
				}}
			/>
			<span class="text-left text-sm"> <b>W</b> {$settings.w.toFixed(2)}</span>
		</label>
	{/if}

	<div class="form-control flex-row flex-wrap justify-evenly">
		{#each Object.entries($settings.toggles) as [name, setting]}
			<label class="label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap">
				<input
					type="checkbox"
					class="toggle toggle-sm"
					bind:checked={$settings.toggles[name].value}
				/>
				<span class="text-left text-sm">{setting.label}</span>
			</label>
		{/each}
		{#if $settings.curveActive === 1}
			{#each Object.entries($settings.surface) as [name, setting]}
				<label class="label cursor-pointer justify-start space-x-2 flex-1 whitespace-nowrap">
					<input
						type="checkbox"
						class="toggle toggle-sm"
						bind:checked={$settings.surface[name].value}
					/>
					<span class="text-left text-sm">{setting.label}</span>
				</label>
			{/each}
		{/if}
	</div>
	<div class:hidden={$settings.curveActive != 0}>
		<div class="flex flex-col justify-center space-y-2">
			<button
				class="btn btn-outline btn-xs"
				on:click={() => {
					const endpoint = new Vector3(0, 0, 0);
					if (curve.points.length > 0) {
						endpoint.x = curve.points[curve.points.length - 1].vector.x + 1;
					}
					curve.addPoint(endpoint);
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
									on:input={(e) => {
										vector.x = +e.currentTarget.value;
									}}
								/>
							</td>
							<td>
								<input
									type="number"
									class="input input-bordered input-xs w-full max-w-xs"
									value={vector.y.toFixed(2)}
									on:input={(e) => {
										vector.y = +e.currentTarget.value;
									}}
								/>
							</td>
							<td>
								<input
									type="number"
									class="input input-bordered input-xs w-full max-w-xs"
									value={vector.z.toFixed(2)}
									on:input={(e) => {
										vector.z = +e.currentTarget.value;
									}}
								/>
							</td>
						</tr>
					{/each}
				</table>
			</div>
		</div>
	</div>

	<div class:hidden={$settings.curveActive != 1}>
		<div class="flex flex-col justify-center space-y-2">
			<button
				class="btn btn-outline btn-xs"
				on:click={() => {
					let row = [];
					if (surface.points.length > 0) {
						console.log(surface.points);
						let endrow = surface.points.length - 1;
						for (let i = 0; i < surface.points[endrow].length; i++) {
							console.log(i);
							row.push(
								new Vector3(
									surface.points[endrow][i].vector.x,
									surface.points[endrow][i].vector.y,
									surface.points[endrow][i].vector.z + 1
								)
							);
						}
					} else {
						row = [
							new Vector3(0, 0, 0),
							new Vector3(1, 0, 0),
							new Vector3(2, 0, 0),
							new Vector3(3, 0, 0)
						];
					}
					surface.addRow(row);
					surface = surface;
				}}>Add Control Point Row</button
			>

			<button
				class="btn btn-outline btn-xs"
				on:click={() => {
					surface.removeRow();
					surface = surface;
				}}>Remove Control Point Row</button
			>
			<div class="h-80 overflow-auto">
				<table class="table table-compact w-full">
					<thead>
						<tr>
							<th>Index</th>
							<th class="text-center">X</th>
							<th class="text-center">Y</th>
							<th class="text-center">Z</th>
						</tr>
					</thead>
					{#each surface.points as row, rowIndex}
						{#each row as { vector }, colIndex}
							<tr>
								<th class="text-center">({rowIndex}, {colIndex})</th>
								<td>
									<input
										type="number"
										class="input input-bordered input-xs w-full max-w-xs"
										value={vector.x.toFixed(2)}
										on:input={(e) => {
											vector.x = +e.currentTarget.value;
										}}
									/>
								</td>
								<td>
									<input
										type="number"
										class="input input-bordered input-xs w-full max-w-xs"
										value={vector.y.toFixed(2)}
										on:input={(e) => {
											vector.y = +e.currentTarget.value;
										}}
									/>
								</td>
								<td>
									<input
										type="number"
										class="input input-bordered input-xs w-full max-w-xs"
										value={vector.z.toFixed(2)}
										on:input={(e) => {
											vector.z = +e.currentTarget.value;
										}}
									/>
								</td>
							</tr>
						{/each}
					{/each}
				</table>
			</div>
		</div>
	</div>
</div>
