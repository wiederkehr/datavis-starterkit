<script>
  import Header from '../components/header.svelte';
  import SectionTitle from '../components/sectionTitle.svelte';
  import Section from '../components/section.svelte';
  import Plot from '../components/plot.svelte';
</script>

<template>
  <Header />
  <Section>
    <SectionTitle>Lorem</SectionTitle>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </Section>
  <Section>
    <SectionTitle>Plot Example</SectionTitle>
    <Plot />
  </Section>
</template>

<style lang='scss'>
  
</style>