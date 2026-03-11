<script lang="ts">
	import { fly, fade } from 'svelte/transition';

	interface Props {
		message: string;
		type?: 'success' | 'error' | 'info';
		duration?: number;
		onClose: () => void;
	}

	let { message, type = 'info', duration = 3000, onClose }: Props = $props();

	$effect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, duration);

		return () => clearTimeout(timer);
	});

	const icons = {
		success: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>`,
		error: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>`,
		info: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>`
	};

	const styles = {
		success: 'bg-green-600 text-white border-green-700',
		error: 'bg-red-600 text-white border-red-700',
		info: 'bg-surface-800 text-white border-surface-700'
	};
</script>

<div class="fixed bottom-6 right-6 z-50" transition:fly={{ y: 50, duration: 300 }}>
	<div class="flex min-w-[280px] items-center gap-3 rounded-xl border-2 px-5 py-3 shadow-lg {styles[type]}" transition:fade>
		<svg class="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
			{@html icons[type]}
		</svg>
		<p class="text-sm font-medium">{message}</p>
		<button onclick={onClose} class="ml-auto rounded-lg p-1 transition-colors hover:bg-white/20" aria-label="Schliessen">
			<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	</div>
</div>
