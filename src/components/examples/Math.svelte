<script>
  import { atan2, e, evaluate, pi, round } from 'mathjs';
</script>

<style lang="scss">
  code {
    font-family: $font-family-mono;
  }
  .muted {
    color: var(--color-muted);
  }
</style>

<markup>
  <code>
    <span class="muted">// functions</span><br />
    round(e, 3) // {round(e, 3)}<br />
    atan2(3, -3) / pi // {atan2(3, -3) / pi}<br />
    <br />
    <span class="muted">// expressions</span><br />
    evaluate('12 / (2.3 + 0.7)') // {evaluate('12 / (2.3 + 0.7)')}<br />
    evaluate('12.7 cm to inch') // {evaluate('12.7 cm to inch')}<br />
  </code>
</markup>
