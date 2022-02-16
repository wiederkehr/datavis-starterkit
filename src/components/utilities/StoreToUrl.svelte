<script context="module">
  import { forEach, trim } from 'lodash-es';

  export const getLocation = () => {
    const hashPosition = window.location.href.indexOf('#/');
    let location =
      hashPosition > -1 ? window.location.href.substr(hashPosition + 1) : '/';

    const qsPosition = location.indexOf('?');
    let querystring = '';
    if (qsPosition > -1) {
      querystring = location.substr(qsPosition + 1);
      location = location.substr(0, qsPosition);
    }
    return { location, querystring };
  };

  export const setLocation = location => {
    if (
      !location ||
      location.length < 1 ||
      (location.charAt(0) != '/' && location.indexOf('#/') !== 0)
    ) {
      throw Error('Invalid parameter location');
    }
    setTimeout(() => {
      window.location.hash = (location.charAt(0) == '#' ? '' : '#') + location;
    }, 0);
  };
</script>

<script>
  import { onMount } from 'svelte';
  import { get } from 'svelte/store';

  export let stores = [];

  const storesToString = () => {
    let urlString = '';
    if (stores.length > 0) {
      forEach(stores, store => {
        if (urlString !== '') {
          urlString += '/';
        }
        switch (store.type) {
          case 'collection':
            urlString += JSON.stringify(get(store.store));
            break;
          case 'array':
            urlString += get(store.store).join(',');
            break;
          case 'boolean':
            urlString += get(store.store) ? 'true' : 'false';
            break;
          case 'number':
            urlString += get(store.store);
            break;
          case 'string':
            urlString += get(store.store);
            break;
          default:
            urlString += get(store.store);
            break;
        }
      });
      if (urlString !== '') {
        setLocation('#/' + urlString);
      }
    }
  };

  const stringToStores = location => {
    if (location === '') {
      return;
    }
    if (location.charAt(0) === '/') {
      location = location.substring(1);
    }
    const locationValues = location.split('/');
    if (locationValues.length !== stores.length) {
      return;
    }
    for (let i = 0; i < locationValues.length; i++) {
      const store = stores[i];
      const value = locationValues[i];
      if (value === undefined || value.length === 0) {
        continue;
      }
      switch (store.type) {
        case 'collection':
          store.store.set(JSON.parse(decodeURI(value)));
          break;
        case 'array':
          store.store.set(trim(decodeURI(value)).split(','));
          break;
        case 'boolean':
          store.store.set(value === 'true');
          break;
        case 'number':
          store.store.set(+value);
          break;
        case 'string':
          store.store.set(decodeURI(value));
          break;
        default:
          store.store.set(decodeURI(value));
          break;
      }
    }
  };

  const hashchange = () => {
    stringToStores(getLocation().location);
  };

  onMount(() => {
    stringToStores(getLocation().location);
    stores.forEach(p => p.store.subscribe(storesToString));
  });
</script>

<svelte:window on:hashchange={hashchange} />
