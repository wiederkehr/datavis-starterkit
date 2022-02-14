<script>
  import downloadCSV from '$utilities/downloadCSV';
  import downloadJSON from '$utilities/downloadJSON';
  import data from '$data/womens-hockey-teams-gamescores.csv';
  import { groupBy } from 'lodash';
  const csv = data;
  const json = groupBy(data, 'NAT');
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
  <button on:click={() => downloadCSV(csv)}>Download CSV</button>
  <button on:click={() => downloadJSON(json)}>Download JSON</button>
</markup>
