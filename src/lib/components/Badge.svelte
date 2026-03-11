<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'primary' | 'accent';
		children: Snippet;
		class?: string;
	}

	let { variant = 'default', children, class: className = '' }: Props = $props();

	const variantClasses = {
		default: 'bg-surface-100 text-surface-600',
		primary: 'bg-primary/10 text-primary',
		accent: 'bg-accent/10 text-accent-hover'
	};

	const classes = $derived(`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${variantClasses[variant]} ${className}`);
</script>

<span class={classes}>
	{@render children()}
</span>
