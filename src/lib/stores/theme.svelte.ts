type Theme = 'light' | 'dark';

let current = $state<Theme>('light');

export function getTheme(): Theme {
	return current;
}

export function initTheme() {
	if (typeof window === 'undefined') return;

	const saved = (localStorage.getItem('theme') as Theme) || 'light';
	current = saved;
	document.documentElement.classList.add(saved);
}

export function toggleTheme() {
	const next: Theme = current === 'dark' ? 'light' : 'dark';
	current = next;
	document.documentElement.classList.remove('light', 'dark');
	document.documentElement.classList.add(next);
	localStorage.setItem('theme', next);
}
