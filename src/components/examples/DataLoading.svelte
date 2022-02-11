<script>
  import teams from '$data/TeamGS.csv';
  const teamList = teams.map(team => team.NAT);
</script>

<style lang="scss">
  code {
    font-family: $font-family-mono;
    word-break: break-word;
  }
</style>

<markup><code>{teamList}</code></markup>
