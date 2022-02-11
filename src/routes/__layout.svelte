<script>
  import Header from '$components/Header.svelte';
  import Body from '$components/Body.svelte';
  import Footer from '$components/Footer.svelte';
  import '$styles/app.scss';
</script>

<markup>
  <Header />
  <Body>
    <slot />
  </Body>
  <Footer />
</markup>
