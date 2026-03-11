<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'default' | 'elevated' | 'bordered';
		padding?: 'sm' | 'md' | 'lg';
		hover?: boolean;
		children: Snippet;
		class?: string;
	}

	let { variant = 'default', padding = 'md', hover = false, children, class: className = '' }: Props = $props();

	const variantClasses = {
		default: 'bg-white',
		elevated: 'bg-white shadow-lg',
		bordered: 'bg-white border border-surface-200'
	};

	const paddingClasses = {
		sm: 'p-4',
		md: 'p-6',
		lg: 'p-8'
	};

	const hoverClass = $derived(hover ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg' : '');
	const classes = $derived(`rounded-xl ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClass} ${className}`);
</script>

<div class={classes}>
	{@render children()}
</div>
