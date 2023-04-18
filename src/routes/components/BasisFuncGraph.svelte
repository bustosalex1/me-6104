<script lang="ts">
    import { onMount } from 'svelte';
    import { Vector3 } from 'three';
    import type { BezierCurve } from '$lib/geometry';
    import { settings } from '$lib/stores';
    import { bersteinPolynomial } from '$lib/geometry/math'

    export let curve: BezierCurve;
    export let resolution = 100;
  
    let points: Vector3[] = [];
  
    function generate() {
      points = [];
      for (let i = 0; i <= curve.order; i++) {
        const coefficient = bersteinPolynomial(i, curve.order);
        const point = new Vector3(0, 0, 0);
        for (let j = 0; j < resolution; j++) {
          const u = j / resolution;
          point.addScaledVector(curve.points[i].vector, coefficient(u));
        }
        points.push(point);
      }
    }
  
    onMount(generate);
  </script>
  
  <div class="border border-black rounded-md drop-shadow-md bg-base-100 w-full">
    <svg viewBox="0 0 100 100" class="w-full h-full">
      <path
        d={`
          M ${points[0].x} ${100 - points[0].y}
          ${points.map((p) => `L ${p.x} ${100 - p.y}`).join(' ')}
        `}
        stroke="blue"
        fill="none"
      />
    </svg>
  </div>
  