import type { RequestHandler } from './$types';

export const prerender = true;

// TODO: Replace with your actual domain
const BASE_URL = 'https://example.com';

const staticRoutes = [
	{ path: '', priority: '1.0', changefreq: 'weekly' },
	{ path: '/datenschutz', priority: '0.3', changefreq: 'yearly' },
	{ path: '/impressum', priority: '0.3', changefreq: 'yearly' }
];

export const GET: RequestHandler = () => {
	// TODO: Add dynamic routes here (blog posts, case studies, etc.)
	// Example:
	// const blogPosts = getAllBlogPosts();
	// const dynamicUrls = blogPosts.map(post => ({
	//   path: `/blog/${post.slug}`,
	//   priority: '0.7',
	//   changefreq: 'monthly',
	//   lastmod: new Date(post.date).toISOString().split('T')[0]
	// }));

	const urls = staticRoutes
		.map(
			(route) => `
	<url>
		<loc>${BASE_URL}${route.path}</loc>
		<changefreq>${route.changefreq}</changefreq>
		<priority>${route.priority}</priority>
	</url>`
		)
		.join('');

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
