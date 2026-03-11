<script lang="ts">
	import { onMount } from 'svelte';
	import { dev } from '$app/environment';

	// TODO: Replace with your Matomo instance URL and site ID
	const MATOMO_URL = 'https://analytics.tedlab.de';
	const MATOMO_SITE_ID = '1';

	function handleConsentChange() {
		import('vanilla-cookieconsent').then((cc) => {
			const _paq: unknown[][] = ((window as Window & { _paq?: unknown[][] })._paq ??= []);
			if (cc.acceptedCategory('analytics')) {
				_paq.push(['setConsentGiven']);
			} else {
				_paq.push(['forgetConsentGiven']);
			}
		});
	}

	onMount(() => {
		if (dev) return;
		const _paq: unknown[][] = ((window as Window & { _paq?: unknown[][] })._paq ??= []);

		_paq.push(['requireConsent']);
		_paq.push(['trackPageView']);
		_paq.push(['enableLinkTracking']);
		_paq.push(['setTrackerUrl', `${MATOMO_URL}/matomo.php`]);
		_paq.push(['setSiteId', MATOMO_SITE_ID]);

		const script = document.createElement('script');
		script.async = true;
		script.src = `${MATOMO_URL}/matomo.js`;
		document.head.appendChild(script);

		window.addEventListener('cc:onConsent', handleConsentChange);
		window.addEventListener('cc:onChange', handleConsentChange);

		return () => {
			window.removeEventListener('cc:onConsent', handleConsentChange);
			window.removeEventListener('cc:onChange', handleConsentChange);
		};
	});
</script>
