// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thegreyhavens.co.uk',
  integrations: [sitemap({
    filter: (page) => !page.includes('/gallery/') && !page.includes('/reviews/')
  })],
});
