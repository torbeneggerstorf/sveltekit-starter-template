<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		href?: string;
		disabled?: boolean;
		type?: 'button' | 'submit' | 'reset';
		onclick?: () => void;
		children: Snippet;
		class?: string;
	}

	let { variant = 'primary', size = 'md', href, disabled = false, type = 'button', onclick, children, class: className = '' }: Props = $props();

	const baseClasses = 'rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center';

	const variantClasses = {
		primary: 'bg-primary text-white hover:bg-primary-hover',
		secondary: 'border border-surface-300 text-surface-700 hover:bg-surface-100',
		ghost: 'text-surface-600 hover:text-primary hover:bg-surface-100'
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3 text-sm',
		lg: 'px-8 py-4 text-base'
	};

	const classes = $derived(`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${className}`);
</script>

{#if href}
	<a {href} class={classes}>
		{@render children()}
	</a>
{:else}
	<button {type} {disabled} {onclick} class={classes}>
		{@render children()}
	</button>
{/if}
