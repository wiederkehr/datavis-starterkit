<script>
  import { get, writable } from 'svelte/store';
  // import StoreToUrl from '$components/utilities/StoreToUrl.svelte';
  import StoreToUrl from '$components/utilities/StoreToUrl2.svelte';
  import Button from '$components/interface/Button.svelte';

  const booleanStore = writable(true);
  const numberStore = writable(0);
  const stringStore = writable('String');
  const arrayStore = writable(['A', 'B', 'C']);
  const collectionStore = writable({ a: 'A', b: 'B', c: 'C' });

  const stores = [
    { key: 'booleanStore', value: booleanStore, type: 'boolean' },
    { key: 'numberStore', value: numberStore, type: 'number' },
    { key: 'stringStore', value: stringStore, type: 'string' },
    { key: 'arrayStore', value: arrayStore, type: 'array' },
    { key: 'collectionStore', value: collectionStore, type: 'collection' },
  ];
  const increment = () => numberStore.set($numberStore + 1);
  console.log($numberStore);
</script>

<markup>
  <StoreToUrl {stores} />
  <code>
    {#each stores as store}
      {store.key}: {get(store.value)}<br />
    {/each}
  </code>
  <Button on:click={increment}>Increment</Button>
</markup>
