import adapter from '@sveltejs/adapter-auto';
import autoprefixer from 'autoprefixer';
import dsv from '@rollup/plugin-dsv';
import path from 'path';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */

const config = {
  kit: {
    adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $actions: path.resolve('./src/actions'),
          $components: path.resolve('./src/components'),
          $data: path.resolve('./src/data'),
          $stores: path.resolve('./src/stores'),
          $styles: path.resolve('./src/styles'),
          $utilities: path.resolve('./src/utilities'),
        },
      },
      plugins: [dsv()],
    },
  },
  preprocess: sveltePreprocess({
    markupTagName: 'markup',
    postcss: {
      plugins: [autoprefixer],
    },
    scss: {
      prependData: `@import 'src/styles/constants.scss';`,
    },
  }),
};

export default config;
