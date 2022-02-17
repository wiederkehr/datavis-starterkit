<script>
  import dayjs from 'dayjs';
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
    <span class="muted">// parse</span><br />
    {dayjs('1999-12-31', 'YYYY-MM-DD').toString()}<br />
    <br />
    <span class="muted">// display</span><br />
    {dayjs().format('DD MMMM YYYY')}<br />
    <br />
    <span class="muted">// manipulate</span><br />
    {dayjs().subtract(1, 'year').add(1, 'day').toString()}<br />
  </code>
</markup>
