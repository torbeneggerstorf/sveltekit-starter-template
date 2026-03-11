<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { initTheme } from '$lib/stores/theme.svelte';
	import { toastStore } from '$lib/stores/toast.svelte';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Toast from '$lib/components/Toast.svelte';
	import CookieConsent from '$lib/components/CookieConsent.svelte';
	import Matomo from '$lib/components/Matomo.svelte';

	let { children } = $props();

	onMount(() => {
		initTheme();
	});
</script>

<svelte:head>
	<link rel="icon" href="/favicon/favicon.svg" type="image/svg+xml" />
</svelte:head>

<div class="flex min-h-screen flex-col">
	<Navigation />
	<main id="main-content" tabindex="-1" class="flex-1">
		{@render children()}
	</main>
	<Footer />
</div>

{#each toastStore.toasts as toast (toast.id)}
	<Toast message={toast.message} type={toast.type} duration={toast.duration} onClose={() => toastStore.remove(toast.id)} />
{/each}

<CookieConsent />
<Matomo />
