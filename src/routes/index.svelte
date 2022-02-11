<script>
  import Meta from '$components/Meta.svelte';
  import Card from '$components/Card.svelte';
  import ChartWithPlot from '$components/examples/ChartWithPlot.svelte';
  import ChartWithD3 from '$components/examples/ChartWithD3.svelte';
  import ColorsWithChroma from '$components/examples/ColorsWithChroma.svelte';
  import DataLoading from '$components/examples/DataLoading.svelte';
</script>

<markup>
  <Meta title="Data Visualization Toolkit: Examples" />
  <Card title="Chart with D3">
    <ChartWithD3 />
  </Card>
  <Card title="Chart with Plot">
    <ChartWithPlot />
  </Card>
  <Card title="Data Loading</">
    <DataLoading />
  </Card>
  <Card title="Colors With Chroma">
    <ColorsWithChroma />
  </Card>
</markup>
