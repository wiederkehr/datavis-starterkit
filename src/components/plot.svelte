<script>
  import * as Plot from "@observablehq/plot";
  const data = [
    { name: 'Tollak', height: 50},
    { name: 'Anna', height: 165},
    { name: 'Benji', height: 175},
  ];
  // const chart = Plot.plot({
  //   marks: [
  //     Plot.barX(data, {x: "height", y: "name"})
  //   ]
  // });
</script>

<template>
  <div id='chart'>
  </div>
</template>

<style lang='scss'>
  #chart {
    background-color: $c-gray8;
    padding: $space-xl;
  }
</style>