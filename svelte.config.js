import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			platformProxy: {
				compatibility_flags: ['nodejs_compat']
			}
		}),
		prerender: {
			handleMissingId: 'warn',
			handleHttpError: ({ path, message }) => {
				// Ignore missing OG images during prerender
				if (path.includes('og-image')) return;
				throw new Error(message);
			}
		}
	}
};

export default config;
