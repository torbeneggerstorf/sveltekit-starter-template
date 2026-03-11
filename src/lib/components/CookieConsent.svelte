<script lang="ts">
	import { onMount } from 'svelte';
	import { cookieConsentConfig } from '$lib/config/cookieConsent';

	let CookieConsentLib = $state<typeof import('vanilla-cookieconsent') | null>(null);

	onMount(async () => {
		const [cc] = await Promise.all([import('vanilla-cookieconsent'), import('vanilla-cookieconsent/dist/cookieconsent.css'), import('$lib/styles/cookieConsent.css')]);

		CookieConsentLib = cc;
	});

	$effect(() => {
		if (CookieConsentLib) {
			CookieConsentLib.run(cookieConsentConfig);
		}
	});
</script>
