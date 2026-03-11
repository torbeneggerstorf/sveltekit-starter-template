<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	// TODO: Replace with your Matomo instance URL and site ID
	const MATOMO_URL = 'https://analytics.example.com';
	const SITE_ID = '1';

	onMount(() => {
		if (dev) return;

		const script = document.createElement('script');
		script.async = true;
		script.src = `${MATOMO_URL}/matomo.js`;
		document.head.appendChild(script);

		const _paq = ((window as unknown as Record<string, unknown>)._paq ??= []) as unknown[][];
		_paq.push(['setTrackerUrl', `${MATOMO_URL}/matomo.php`]);
		_paq.push(['setSiteId', SITE_ID]);
		_paq.push(['trackPageView']);
		_paq.push(['enableLinkTracking']);
	});
</script>
