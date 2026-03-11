<script lang="ts">
	import { page } from '$app/state';

	// TODO: Replace with your navigation items
	const navItems = [
		{ href: '/', label: 'Start' },
		{ href: '/impressum', label: 'Impressum' },
		{ href: '/datenschutz', label: 'Datenschutz' }
	];

	let mobileMenuOpen = $state(false);

	function isActive(href: string): boolean {
		if (href === '/') return page.url.pathname === '/';
		return page.url.pathname.startsWith(href);
	}
</script>

<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:font-semibold">Zum Inhalt springen</a>

<header class="sticky top-0 z-50 border-b border-surface-200 bg-surface-50/95 backdrop-blur-sm">
	<nav class="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
		<!-- Logo -->
		<a href="/" class="text-xl font-bold text-surface-900">
			<!-- TODO: Replace with your logo/brand -->
			Logo
		</a>

		<!-- Desktop Nav -->
		<ul class="hidden items-center gap-6 md:flex">
			{#each navItems as item}
				<li>
					<a href={item.href} class="text-sm transition-colors hover:text-primary {isActive(item.href) ? 'font-semibold text-primary' : 'text-surface-600'}">
						{item.label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Mobile Toggle -->
		<button class="text-surface-600 md:hidden" onclick={() => (mobileMenuOpen = !mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Menu schliessen' : 'Menu oeffnen'}>
			<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				{#if mobileMenuOpen}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				{:else}
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				{/if}
			</svg>
		</button>
	</nav>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="border-t border-surface-200 bg-surface-50 md:hidden">
			<ul class="mx-auto max-w-5xl px-6 py-4">
				{#each navItems as item}
					<li>
						<a href={item.href} class="block py-2 text-sm transition-colors hover:text-primary {isActive(item.href) ? 'font-semibold text-primary' : 'text-surface-600'}" onclick={() => (mobileMenuOpen = false)}>
							{item.label}
						</a>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</header>
