<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		parts: string[];
	}

	let { parts }: Props = $props();
	let visible = $state(false);

	onMount(() => {
		visible = true;
	});
</script>

<span class="obf-addr" aria-hidden={!visible}>
	{#if visible}
		{#each parts as part, i}
			{part}{#if i < parts.length - 1}<br />{/if}
		{/each}
	{/if}
</span>
