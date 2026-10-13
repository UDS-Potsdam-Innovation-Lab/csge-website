import type { APIRoute } from 'astro';
import { absoluteUrl, site } from '../config';
import { withLang, type Lang } from '../i18n';

const routes = ['/', '/consultation/', '/imprint/', '/privacy/'];

const xhtmlLinks = (path: string) =>
  (['en', 'zh'] as Lang[])
    .map(
      (lang) =>
        `    <xhtml:link rel="alternate" hreflang="${lang === 'zh' ? 'zh-CN' : 'en'}" href="${absoluteUrl(withLang(lang, path))}" />`,
    )
    .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(path)}" />`)
    .join('\n');

export const GET: APIRoute = () => {
  if (!site.url) {
    return new Response(
      `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n`,
      { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
    );
  }

  const urls = routes
    .flatMap((path) =>
      (['en', 'zh'] as Lang[]).map((lang) => {
        const loc = withLang(lang, path);
        return `  <url>
    <loc>${absoluteUrl(loc)}</loc>
${xhtmlLinks(path)}
    <changefreq>${path === '/' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '/' ? '1.0' : '0.6'}</priority>
  </url>`;
      }),
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
