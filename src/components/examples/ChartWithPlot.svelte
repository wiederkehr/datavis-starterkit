<script>
  import { onMount } from 'svelte';
  import * as Plot from '@observablehq/plot';

  const data = [
    { name: 'Tollak', height: 100 },
    { name: 'Anna', height: 165 },
    { name: 'Benji', height: 175 },
  ];

  let chart;

  onMount(() => {
    chart = Plot.plot({
      marks: [Plot.barX(data, { x: 'height', y: 'name' })],
    }).outerHTML;
  });
</script>

<style lang="scss">
  .chart {
    background-color: $color-white;
    padding: $space-4;
  }
</style>

<markup>
  <div class="chart">{@html chart}</div>
</markup>
