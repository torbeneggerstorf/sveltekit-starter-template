<script lang="ts">
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Fehler {page.status}</title>
</svelte:head>

<section class="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
	<p class="text-6xl font-bold text-primary">{page.status}</p>

	{#if page.status === 404}
		<h1 class="mt-4 text-2xl font-bold text-surface-900">Seite nicht gefunden</h1>
		<p class="mt-2 text-surface-500">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
	{:else}
		<h1 class="mt-4 text-2xl font-bold text-surface-900">Ein Fehler ist aufgetreten</h1>
		<p class="mt-2 text-surface-500">{page.error?.message ?? 'Unbekannter Fehler'}</p>
	{/if}

	<a href="/" class="mt-8 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover">
		Zur Startseite
	</a>
</section>
