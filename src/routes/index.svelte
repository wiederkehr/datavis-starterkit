<script>
  // Helper components
  import Meta from '$components/utilities/Meta.svelte';
  // Interface components
  import Card from '$components/interface/Card.svelte';
  // Example components
  import ChartWithD3 from '$components/examples/ChartWithD3.svelte';
  import ChartWithPlot from '$components/examples/ChartWithPlot.svelte';
  import ColorsWithChroma from '$components/examples/ColorsWithChroma.svelte';
  import ComponentClickOutside from '$components/examples/ComponentClickOutside.svelte';
  import ComponentInView from '$components/examples/ComponentInView.svelte';
  import DataDownloading from '$components/examples/DataDownloading.svelte';
  import DataLoading from '$components/examples/DataLoading.svelte';
  import DataWithTidy from '$components/examples/DataWithTidy.svelte';
  import SVGDownloading from '$components/examples/SVGDownloading.svelte';
  import SVGIcons from '$components/examples/SVGIcons.svelte';
  import SVGTextures from '$components/examples/SVGTextures.svelte';
  import ThemeToggle from '$components/examples/ThemeToggle.svelte';
</script>

<markup>
  <Meta title="Data Visualization Toolkit: Examples" />
  <Card title="Theme Toggle">
    <ThemeToggle />
  </Card>
  <Card title="Chart with D3">
    <ChartWithD3 />
  </Card>
  <Card title="Chart with Plot">
    <ChartWithPlot />
  </Card>
  <Card title="Data Loading">
    <DataLoading />
  </Card>
  <Card title="Data Downloading">
    <DataDownloading />
  </Card>
  <Card title="Data with Tidy">
    <DataWithTidy />
  </Card>
  <Card title="Colors with Chroma">
    <ColorsWithChroma />
  </Card>
  <Card title="Feather Icons">
    <SVGIcons />
  </Card>
  <Card title="Textured SVG">
    <SVGTextures />
  </Card>
  <Card title="SVG Downloading">
    <SVGDownloading />
  </Card>
  <Card title="Component in View">
    <ComponentInView />
  </Card>
  <Card title="Component click outside">
    <ComponentClickOutside />
  </Card>
</markup>
