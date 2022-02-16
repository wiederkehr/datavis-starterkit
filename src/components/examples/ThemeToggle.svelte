<script>
  import { browser } from '$app/env';
  import theme from '$stores/theme.js';
  import Theme from '$components/utilities/Theme.svelte';
  const toggleTheme = () => ($theme = $theme === 'dark' ? 'light' : 'dark');
  $: if (browser) document.body.className = $theme;
</script>

<style lang="scss">
  button {
    background: var(--color-foreground);
    border: 2px solid var(--color-base);
    border-radius: $radius-2;
    color: var(--color-base);
    cursor: pointer;
    font-family: $font-family-mono;
    padding: $space-1;
    &:hover {
      background: var(--color-background);
    }
  }
</style>

<markup>
  <Theme bind:theme={$theme} />
  <button on:click={toggleTheme}>Toggle theme</button>
</markup>
