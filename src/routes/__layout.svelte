<script>
  import { browser } from '$app/env';
  import theme from '$stores/theme.js';
  import Theme from '$components/helpers/Theme.svelte';
  import Header from '$components/Header.svelte';
  import Main from '$components/Main.svelte';
  import Footer from '$components/Footer.svelte';
  import '$styles/app.scss';

  const toggleTheme = () => ($theme = $theme === 'dark' ? 'light' : 'dark');

  $: if (browser) document.body.className = $theme;
</script>

<markup>
  <Theme bind:theme={$theme} />
  <Header />
  <button on:click={toggleTheme}>Toggle theme</button>
  <Main>
    <slot />
  </Main>
  <Footer />
</markup>
