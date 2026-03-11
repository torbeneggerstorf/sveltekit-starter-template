<script lang="ts">
	import * as CookieConsent from 'vanilla-cookieconsent';

	const year = new Date().getFullYear();
	const buildVersion = __BUILD_VERSION__;
</script>

<footer class="border-t border-surface-200 bg-surface-100">
	<div class="mx-auto max-w-5xl px-6 py-12">
		<div class="grid gap-8 md:grid-cols-3">
			<!-- Brand -->
			<div>
				<!-- TODO: Replace with your brand info -->
				<p class="text-lg font-bold text-surface-900">Projektname</p>
				<p class="mt-2 text-sm text-surface-500">Kurze Beschreibung des Projekts.</p>
			</div>

			<!-- Links -->
			<div>
				<p class="mb-3 text-sm font-semibold text-surface-900">Links</p>
				<ul class="space-y-2">
					<li><a href="/impressum" class="text-sm text-surface-500 transition-colors hover:text-primary">Impressum</a></li>
					<li><a href="/datenschutz" class="text-sm text-surface-500 transition-colors hover:text-primary">Datenschutz</a></li>
				</ul>
			</div>

			<!-- Tools -->
			<div>
				<p class="mb-3 text-sm font-semibold text-surface-900">Einstellungen</p>
				<ul class="space-y-2">
					<li>
						<button onclick={() => CookieConsent.showPreferences()} class="text-sm text-surface-500 transition-colors hover:text-primary">Cookie-Einstellungen</button>
					</li>
				</ul>
			</div>
		</div>

		<!-- Bottom Bar -->
		<div class="mt-10 flex flex-col items-center justify-between gap-2 border-t border-surface-200 pt-6 text-xs text-surface-400 md:flex-row">
			<p>&copy; {year} Projektname. Alle Rechte vorbehalten.</p>
			<p>Build {buildVersion}</p>
		</div>
	</div>
</footer>
