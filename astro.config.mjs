import { defineConfig } from 'astro/config';
import { site } from './src/config';

const pages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: pages ? 'https://uds-potsdam-innovation-lab.github.io' : site.url || undefined,
  base: pages ? '/csge-website' : '/',
  trailingSlash: 'always',
});
