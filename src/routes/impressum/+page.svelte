<script lang="ts">
	import SEO from '$lib/components/SEO.svelte';
	import ObfAddr from '$lib/components/obf/ObfAddr.svelte';
	import ObfMail from '$lib/components/obf/ObfMail.svelte';
	import ObfPhone from '$lib/components/obf/ObfPhone.svelte';
	import ObfHoneypot from '$lib/components/obf/ObfHoneypot.svelte';
</script>

<SEO title="Impressum - Projektname" description="Impressum und rechtliche Angaben." noindex />

<section class="mx-auto max-w-3xl px-6 py-16">
	<a href="/" class="mb-8 inline-block text-sm text-surface-500 transition-colors hover:text-primary">&larr; Zurueck</a>

	<h1 class="text-3xl font-bold text-surface-900">Impressum</h1>

	<div class="mt-8 space-y-8 text-surface-600">
		<div>
			<h2 class="text-lg font-semibold text-surface-900">Angaben gemaess &sect; 5 TMG</h2>
			<p class="mt-2">
				<!-- TODO: Replace with actual contact info -->
				<ObfAddr parts={['Vorname Nachname', 'Strasse 123', '12345 Stadt']} />
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">Kontakt</h2>
			<p class="mt-2">
				Telefon: <ObfPhone prefix="+49123" suffix="4567890" /><br />
				E-Mail: <ObfMail user="mail" domain="example.com" />
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">Verantwortlich fuer den Inhalt</h2>
			<p class="mt-2">
				<!-- TODO: Replace -->
				Vorname Nachname<br />
				Adresse wie oben
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">Streitschlichtung</h2>
			<p class="mt-2">
				Die Europaeische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit.
				Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
			</p>
		</div>

		<div>
			<h2 class="text-lg font-semibold text-surface-900">Haftungsausschluss</h2>
			<p class="mt-2">
				Trotz sorgfaeltiger inhaltlicher Kontrolle uebernehmen wir keine Haftung fuer die Inhalte externer Links. Fuer den Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber verantwortlich.
			</p>
		</div>
	</div>

	<ObfHoneypot text="contact@example.com +491234567890 Strasse 123 12345 Stadt" />
</section>
