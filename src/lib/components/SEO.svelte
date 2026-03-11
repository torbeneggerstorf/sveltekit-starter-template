<script lang="ts">
	import { page } from '$app/state';
	import { browser } from '$app/environment';

	interface Props {
		title: string;
		description: string;
		siteName?: string;
		image?: string;
		type?: 'website' | 'article';
		canonical?: string;
		noindex?: boolean;
		jsonLd?: Record<string, unknown>;
		keywords?: string[];
	}

	let { title, description, siteName = 'Projektname', image = '/og-image.png', type = 'website', canonical, noindex = false, jsonLd, keywords }: Props = $props();

	const fullUrl = $derived(browser ? (canonical || page.url.href) : (canonical || ''));
	const baseUrl = $derived(browser ? page.url.origin : '');
	const fullImageUrl = $derived(image.startsWith('http') ? image : baseUrl ? `${baseUrl}${image}` : image);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if keywords?.length}
		<meta name="keywords" content={keywords.join(', ')} />
	{/if}
	<link rel="canonical" href={fullUrl} />

	<meta property="og:type" content={type} />
	<meta property="og:url" content={fullUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={fullImageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:locale" content="de_DE" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content={fullUrl} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={fullImageUrl} />

	<meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`}
	{/if}
</svelte:head>
