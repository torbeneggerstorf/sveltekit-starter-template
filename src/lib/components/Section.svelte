<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		id?: string;
		title?: string;
		subtitle?: string;
		maxWidth?: 'sm' | 'md' | 'lg' | 'xl';
		children: Snippet;
		class?: string;
	}

	let { id, title, subtitle, maxWidth = 'lg', children, class: className = '' }: Props = $props();

	const maxWidthClasses = {
		sm: 'max-w-2xl',
		md: 'max-w-3xl',
		lg: 'max-w-5xl',
		xl: 'max-w-7xl'
	};
</script>

<section {id} class="px-6 py-16 md:py-24 {className}">
	<div class="mx-auto {maxWidthClasses[maxWidth]}">
		{#if title}
			<div class="mb-12 text-center">
				<h2 class="text-3xl font-bold tracking-tight text-surface-900 md:text-4xl">{title}</h2>
				{#if subtitle}
					<p class="mx-auto mt-4 max-w-2xl text-lg text-surface-500">{subtitle}</p>
				{/if}
			</div>
		{/if}

		{@render children()}
	</div>
</section>
