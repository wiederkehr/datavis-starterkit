<script>
  import Header from '$components/interface/Header.svelte';
  import Main from '$components/interface/Main.svelte';
  import Footer from '$components/interface/Footer.svelte';
  import '$styles/app.scss';
</script>

<style lang="scss">
  .layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }
</style>

<markup>
  <div class="layout">
    <Header />
    <Main>
      <slot />
    </Main>
    <Footer />
  </div>
</markup>
