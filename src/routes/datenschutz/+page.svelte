<script lang="ts">
	import ObfMail from '$lib/components/obf/ObfMail.svelte';
	import ObfHoneypot from '$lib/components/obf/ObfHoneypot.svelte';

	function openCookieSettings() {
		(window as Record<string, unknown>).CookieConsentApi?.showPreferences?.();
	}
</script>

<svelte:head>
	<title>Datenschutz - Projektname</title>
	<meta name="description" content="Datenschutzerklaerung und Informationen zur Datenverarbeitung." />
</svelte:head>

<section class="mx-auto max-w-3xl px-6 py-16">
	<a href="/" class="mb-8 inline-block text-sm text-surface-500 transition-colors hover:text-primary">&larr; Zurueck</a>

	<h1 class="text-3xl font-bold text-surface-900">Datenschutzerklaerung</h1>

	<div class="mt-8 space-y-8 text-surface-600">
		<div>
			<h2 class="text-lg font-semibold text-surface-900">1. Datenschutz auf einen Blick</h2>
			<p class="mt-2">
				Die folgenden Hinweise geben einen einfachen Ueberblick darueber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">2. Verantwortliche Stelle</h2>
			<p class="mt-2">
				<!-- TODO: Replace with actual info -->
				Verantwortlich fuer die Datenverarbeitung auf dieser Website ist:<br />
				Vorname Nachname<br />
				E-Mail: <ObfMail user="mail" domain="example.com" />
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">3. Hosting</h2>
			<p class="mt-2">
				Diese Website wird bei Cloudflare Pages gehostet. Details zum Umgang mit Ihren Daten entnehmen Sie der Datenschutzerklaerung von Cloudflare.
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">4. Cookies</h2>
			<p class="mt-2">
				Diese Website verwendet Cookies. Sie koennen Ihre Cookie-Einstellungen jederzeit anpassen:
			</p>
			<button onclick={openCookieSettings} class="mt-3 rounded-lg border border-surface-300 px-4 py-2 text-sm font-semibold text-surface-700 transition-colors hover:bg-surface-100">
				Cookie-Einstellungen oeffnen
			</button>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">5. Analyse-Tools</h2>
			<p class="mt-2">
				<!-- TODO: Adapt to your analytics setup -->
				Wir verwenden Matomo zur Analyse der Websitenutzung. Die Daten werden anonymisiert erhoben und nur mit Ihrer Einwilligung verarbeitet.
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">6. Ihre Rechte</h2>
			<p class="mt-2">
				Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Loeschung und Einschraenkung der Verarbeitung Ihrer personenbezogenen Daten.
				Wenden Sie sich hierzu an die oben genannte verantwortliche Stelle.
			</p>
		</div>
	</div>

	<ObfHoneypot text="contact@example.com datenschutz privacy data" />
</section>
