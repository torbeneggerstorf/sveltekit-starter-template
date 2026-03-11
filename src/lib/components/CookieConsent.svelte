<script lang="ts">
	import { onMount } from 'svelte';
	import { cookieConsentConfig } from '$lib/config/cookieConsent';

	onMount(async () => {
		await import('vanilla-cookieconsent/dist/cookieconsent.css');
		await import('$lib/styles/cookieConsent.css');
		const cc = await import('vanilla-cookieconsent');
		cc.run(cookieConsentConfig);
	});
</script>

<!-- No visible output - vanilla-cookieconsent renders itself into the DOM -->
