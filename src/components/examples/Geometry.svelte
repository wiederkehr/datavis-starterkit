<script>
  import { onMount } from 'svelte';
  import * as d3 from 'd3';
  import * as geometric from 'geometric';
  import { colors } from '$styles/constants.js';

  let chart;
  let width = 100;
  let height = 100;
  let polygon = geometric.polygonRegular(4, 10000, [50, 50]);

  onMount(() => {
    d3.select(chart)
      .append('polygon')
      .attr('points', polygon)
      .style('fill', colors.accent);
  });
</script>

<markup>
  <svg
    bind:this={chart}
    class="chart"
    {width}
    {height}
    viewBox={`0 0 ${width} ${height}`}
  />
</markup>
