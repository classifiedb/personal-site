// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://bensonjengela.com',
  integrations: [mdx(), sitemap()],
  // Emit CSS as files (not inline <style>) so the CSP can use style-src 'self'.
  build: { inlineStylesheets: 'never' },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
