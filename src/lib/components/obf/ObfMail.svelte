<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		user: string;
		domain: string;
		label?: string;
	}

	let { user, domain, label = '' }: Props = $props();
	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<span class="obf-mail" aria-hidden={!visible}>
	{#if visible}
		{@const mail = `${user}@${domain}`}
		{#if label}
			<a href="mailto:{mail}">{label}</a>
		{:else}
			<a href="mailto:{mail}">{mail}</a>
		{/if}
	{/if}
</span>
