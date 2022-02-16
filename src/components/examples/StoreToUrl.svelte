<script>
  import { writable } from 'svelte/store';
  import StoreToUrl from '$components/utilities/StoreToUrl.svelte';

  const booleanStore = writable(true);
  const stringStore = writable('String');
  const arrayStore = writable(['A', 'B', 'C']);
  const collectionStore = writable({ a: 'A', b: 'B', c: 'C' });

  const stores = [
    { store: booleanStore, type: 'boolean' },
    { store: stringStore, type: 'string' },
    { store: arrayStore, type: 'array' },
    { store: collectionStore, type: 'collection' },
  ];
</script>

<style lang="scss">
</style>

<markup><StoreToUrl {stores} /></markup>
