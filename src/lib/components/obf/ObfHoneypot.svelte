<script lang="ts">
	interface Props {
		text: string;
	}

	let { text }: Props = $props();
</script>

<span class="absolute -left-[9999px] -top-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden="true">
	{text}
</span>
