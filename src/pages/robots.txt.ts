import type { APIRoute } from 'astro';
import { absoluteUrl, site } from '../config';

export const GET: APIRoute = () => {
  const lines = site.noindex
    ? ['User-agent: *', 'Disallow: /']
    : ['User-agent: *', 'Allow: /', ...(site.url ? [`Sitemap: ${absoluteUrl('/sitemap.xml')}`] : [])];

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
