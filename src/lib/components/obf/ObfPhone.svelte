<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		prefix: string;
		suffix: string;
		delimiter?: string;
		label?: string;
	}

	let { prefix, suffix, delimiter = ' ', label = '' }: Props = $props();
	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<span class="obf-phone" aria-hidden={!visible}>
	{#if visible}
		{@const phone = `${prefix}${delimiter}${suffix}`}
		{#if label}
			<a href="tel:{prefix}{suffix}">{label}</a>
		{:else}
			<a href="tel:{prefix}{suffix}">{phone}</a>
		{/if}
	{/if}
</span>
