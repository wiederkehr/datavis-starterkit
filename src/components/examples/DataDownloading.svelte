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
    font-family: $font-family-mono;
    background: $color-foreground;
    border: 2px solid $color-base;
    padding: $space-1;
    border-radius: $radius-2;
    cursor: pointer;
    &:hover {
      background: $color-background;
    }
  }
</style>

<markup>
  <button on:click={() => downloadCSV(csv)}>Download CSV</button>
  <button on:click={() => downloadJSON(json)}>Download JSON</button>
</markup>
