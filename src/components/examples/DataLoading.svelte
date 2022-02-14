<script>
  import data from '$data/womens-hockey-teams-gamescores.csv';
  const teams = data
    .map(team => team.NAT)
    .filter((value, index, self) => self.indexOf(value) === index);
</script>

<style lang="scss">
  code {
    font-family: $font-family-mono;
    word-break: break-word;
  }
</style>

<markup><code>Teams: {teams}</code></markup>
