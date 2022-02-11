<script lang="ts">
  export let title: string = '';
</script>

<style lang="scss">
  section {
    background-color: $color-foreground;
    border-radius: $-radius-3;
    box-shadow: $shadow-1;
    margin: 0 0 $space-4 0;
    padding: $space-4;
  }
  h2 {
    font-size: $font-size-3;
  }
</style>

<markup>
  <section>
    <h2>{title}</h2>
    <slot />
  </section>
</markup>
