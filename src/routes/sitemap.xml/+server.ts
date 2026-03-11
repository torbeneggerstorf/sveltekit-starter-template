import type { RequestHandler } from './$types';

export const prerender = true;

const BASE_URL = 'https://example.com';

interface SitemapEntry {
	loc: string;
	changefreq: string;
	priority: number;
}

export const GET: RequestHandler = () => {
	const staticRoutes: SitemapEntry[] = [
		{ loc: '/', changefreq: 'weekly', priority: 1.0 },
		{ loc: '/impressum', changefreq: 'yearly', priority: 0.3 },
		{ loc: '/datenschutz', changefreq: 'yearly', priority: 0.3 }
	];

	const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
	.map(
		(route) => `  <url>
    <loc>${BASE_URL}${route.loc}</loc>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`;

	return new Response(xml, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
};
