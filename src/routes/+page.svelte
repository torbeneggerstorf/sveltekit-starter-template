<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Card from '$lib/components/Card.svelte';
	import Section from '$lib/components/Section.svelte';
</script>

<svelte:head>
	<title>Projektname</title>
	<meta name="description" content="Beschreibung des Projekts." />
</svelte:head>

<!-- Hero -->
<section class="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
	<Badge variant="primary">Starter Template</Badge>
	<h1 class="mt-6 text-4xl font-bold tracking-tight text-surface-900 md:text-6xl">
		Dein naechstes Projekt<br />
		<span class="text-primary">startet hier.</span>
	</h1>
	<p class="mx-auto mt-6 max-w-2xl text-lg text-surface-500">
		SvelteKit 5 + TailwindCSS 4 + TypeScript. Alle Konventionen vorbereitet, alle Basics eingebaut. Einfach loslegen.
	</p>
	<div class="mt-10 flex flex-wrap justify-center gap-4">
		<Button href="#features">Features entdecken</Button>
		<Button variant="secondary" href="#components">Komponenten</Button>
	</div>
</section>

<!-- Features -->
<Section id="features" title="Was ist drin?" subtitle="Alles was du fuer den Start brauchst — nichts was du nicht brauchst.">
	<div class="grid gap-6 md:grid-cols-3">
		<Card variant="bordered" hover>
			<div class="text-2xl">&#9881;</div>
			<h3 class="mt-4 text-lg font-semibold text-surface-900">Konfiguration</h3>
			<p class="mt-2 text-sm text-surface-500">Prettier, ESLint, TypeScript strict, TailwindCSS — alles identisch zu deinen bestehenden Projekten.</p>
		</Card>

		<Card variant="bordered" hover>
			<div class="text-2xl">&#128274;</div>
			<h3 class="mt-4 text-lg font-semibold text-surface-900">Datenschutz</h3>
			<p class="mt-2 text-sm text-surface-500">Cookie-Consent, Matomo-Integration, Kontakt-Obfuscation und DSGVO-konforme Legal Pages.</p>
		</Card>

		<Card variant="bordered" hover>
			<div class="text-2xl">&#128640;</div>
			<h3 class="mt-4 text-lg font-semibold text-surface-900">Deployment</h3>
			<p class="mt-2 text-sm text-surface-500">Cloudflare Pages Adapter, Sitemap, robots.txt und Build-Versionierung out of the box.</p>
		</Card>
	</div>
</Section>

<!-- Components -->
<Section id="components" title="Komponenten" subtitle="Wiederverwendbare UI-Bausteine, die dem gemeinsamen Pattern folgen." class="bg-surface-100">
	<div class="space-y-8">
		<!-- Buttons -->
		<Card variant="elevated" padding="lg">
			<h3 class="mb-4 text-lg font-semibold text-surface-900">Button</h3>
			<div class="flex flex-wrap gap-3">
				<Button>Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="ghost">Ghost</Button>
				<Button size="sm">Small</Button>
				<Button size="lg">Large</Button>
				<Button disabled>Disabled</Button>
			</div>
		</Card>

		<!-- Badges -->
		<Card variant="elevated" padding="lg">
			<h3 class="mb-4 text-lg font-semibold text-surface-900">Badge</h3>
			<div class="flex flex-wrap gap-3">
				<Badge>Default</Badge>
				<Badge variant="primary">Primary</Badge>
				<Badge variant="accent">Accent</Badge>
			</div>
		</Card>

		<!-- Cards -->
		<Card variant="elevated" padding="lg">
			<h3 class="mb-4 text-lg font-semibold text-surface-900">Card</h3>
			<div class="grid gap-4 md:grid-cols-3">
				<Card variant="default" padding="sm">
					<p class="text-sm text-surface-600">Default Card</p>
				</Card>
				<Card variant="bordered" padding="sm">
					<p class="text-sm text-surface-600">Bordered Card</p>
				</Card>
				<Card variant="elevated" padding="sm">
					<p class="text-sm text-surface-600">Elevated Card</p>
				</Card>
			</div>
		</Card>
	</div>
</Section>

<!-- CTA -->
<section class="px-6 py-24 text-center">
	<div class="mx-auto max-w-2xl">
		<h2 class="text-3xl font-bold tracking-tight text-surface-900">Bereit loszulegen?</h2>
		<p class="mt-4 text-lg text-surface-500">Ersetze diesen Inhalt, passe die Farben in app.css an, und bau dein Projekt.</p>
		<div class="mt-8">
			<Button size="lg" href="/">Los geht's</Button>
		</div>
	</div>
</section>
