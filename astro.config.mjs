import { defineConfig } from 'astro/config';
import { site } from './src/config';

export default defineConfig({
  site: site.url,
  base: '/',
  trailingSlash: 'always',
});
