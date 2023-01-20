import adapter from '@sveltejs/adapter-auto';
import autoprefixer from 'autoprefixer';
import sveltePreprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', ...mdsvexConfig.extensions],
  kit: {
    adapter: adapter(),
    alias: {
      $actions: './src/actions',
      $components: './src/components',
      $data: './src/data',
      $functions: './src/functions',
      $stores: './src/stores',
      $styles: './src/styles',
    },
  },
  preprocess: [
    sveltePreprocess({
      // Rename the default name of the markup tag from <template> to <markup>
      markupTagName: 'markup',
      postcss: {
        plugins: [autoprefixer],
      },
      scss: {
        // Import the SCSS constants file at the top every SCSS style definition
        prependData: `@import 'src/styles/constants.scss';`,
      },
    }),
    mdsvex(mdsvexConfig),
  ],
};

export default config;
