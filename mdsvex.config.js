import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeWrap from 'rehype-wrap';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool',
  },

  remarkPlugins: [],
  rehypePlugins: [
    // Wrap Markdown content in div with class .markdown
    [rehypeWrap, { wrapper: 'div.markdown' }],
  ],
});

export default config;
