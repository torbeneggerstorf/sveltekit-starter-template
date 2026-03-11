import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { execSync } from 'node:child_process';
import { defineConfig } from 'vite';

function getBuildInfo(): string {
	try {
		const hash = execSync('git rev-parse --short HEAD').toString().trim();
		const pkg = JSON.parse(
			execSync('cat package.json').toString()
		) as { version: string };
		return `v${pkg.version}#${hash}`;
	} catch {
		return 'dev';
	}
}

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	define: {
		__BUILD_VERSION__: JSON.stringify(getBuildInfo())
	}
});
