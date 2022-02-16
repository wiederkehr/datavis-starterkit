<script>
  import { downloadSVG, downloadPNG } from '$functions/download';
  import { colors } from '$styles/constants.js';
</script>

<style lang="scss">
  .buttons {
    margin: $space-1 0;
  }
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
  <div class="svg">
    <svg height="100" width="250" viewBox="0 0 250 100" id="svg-to-download">
      <circle cx="50" cy="50" r="50" style={`fill: ${colors.accent}`} />
      <rect x="150" height="100" width="100" style={`fill: ${colors.accent}`} />
    </svg>
  </div>
  <div class="buttons">
    <button on:click={() => downloadSVG('#svg-to-download')}
      >Download SVG</button
    >
    <button on:click={() => downloadPNG('#svg-to-download')}
      >Download PNG</button
    >
  </div>
</markup>
