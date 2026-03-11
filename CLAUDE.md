# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

## Svelte Version

This project uses **Svelte 5** exclusively. Always use Svelte 5 syntax:

### Props
```svelte
// Correct (Svelte 5)
let { data }: { data: PageData } = $props();

// Wrong (Svelte 4)
export let data: PageData;
```

### Event Handlers
```svelte
// Correct (Svelte 5)
<button onclick={handleClick}>Click</button>

// Wrong (Svelte 4)
<button on:click={handleClick}>Click</button>
```

### Reactivity
```svelte
// Correct (Svelte 5)
let count = $state(0);
let doubled = $derived(count * 2);

$effect(() => {
  console.log(count);
});

// Wrong (Svelte 4)
let count = 0;
$: doubled = count * 2;
$: console.log(count);
```

### Slots/Children
```svelte
// Correct (Svelte 5)
let { children } = $props();
{@render children()}

// Wrong (Svelte 4)
<slot />
```

### Two-Way Binding
```svelte
// Correct (Svelte 5)
let { value = $bindable('') }: Props = $props();
```

## Tech Stack

- SvelteKit 2 (adapter-cloudflare)
- TypeScript (strict mode)
- TailwindCSS 4 (via @tailwindcss/vite)
- Vite 7
- vanilla-cookieconsent (cookie banner)
- Matomo (analytics)

## Project Structure

```
src/
├── app.css                     Global styles + Tailwind @theme
├── app.html                    HTML shell
├── app.d.ts                    Global type declarations
├── hooks.server.ts             Server middleware
├── lib/
│   ├── components/             Svelte components (PascalCase)
│   │   └── obf/                Contact info obfuscation
│   ├── config/                 Configuration (cookieConsent.ts)
│   ├── stores/                 Reactive stores (.svelte.ts)
│   ├── styles/                 CSS overrides (cookieConsent.css)
│   ├── types/                  TypeScript interfaces
│   ├── utils/                  Helper functions
│   └── index.ts                Barrel exports
├── routes/
│   ├── +layout.svelte          Root layout (Nav + Footer + Cookie + Matomo)
│   ├── +layout.ts              Prerender config
│   ├── +page.svelte            Home page
│   ├── +error.svelte           Error page (404 conditional)
│   ├── impressum/              Legal imprint
│   ├── datenschutz/            Privacy policy
│   └── sitemap.xml/            Dynamic sitemap (+server.ts)
└── static/
    ├── favicon/                Multi-format favicons
    └── robots.txt
```

## Naming Conventions

| Category           | Pattern      | Examples                                    |
|--------------------|-------------|---------------------------------------------|
| Components         | PascalCase  | `Navigation.svelte`, `Footer.svelte`        |
| Routes             | kebab-case  | `datenschutz/`, `case-studies/`              |
| Utilities          | camelCase   | `formatDate.ts`, `categories.ts`            |
| Stores             | camelCase + `.svelte.ts` | `theme.svelte.ts`, `toast.svelte.ts` |
| Configs            | camelCase   | `cookieConsent.ts`                          |
| CSS files          | camelCase   | `cookieConsent.css`                         |
| Type files         | camelCase   | `article.ts`, `audit.ts`                    |
| Obf components     | PascalCase + Obf prefix | `ObfMail.svelte`, `ObfPhone.svelte` |

## Component Architecture

### Script Block Order
Every component follows this structure:
```svelte
<script lang="ts">
  // 1. Imports (svelte, $app, $lib)
  // 2. Interface Props { ... }
  // 3. let { ... } = $props()
  // 4. let x = $state(...)
  // 5. let x = $derived(...)
  // 6. $effect(() => { ... })
  // 7. Functions
</script>

<!-- Template -->

<style> /* optional scoped styles */ </style>
```

### Props Pattern
Always define a Props interface for components with multiple props:
```svelte
<script lang="ts">
  interface Props {
    title: string;
    subtitle?: string;
    children: Snippet;
  }

  let { title, subtitle = '', children }: Props = $props();
</script>
```

### Import Style
- Use `$lib/` alias exclusively (no relative paths across directories)
- Import order: Svelte core -> SvelteKit ($app) -> $lib -> Relative (./$types)
- Use barrel exports (index.ts) when a folder has >5 exports

## Shared Components

These components exist across all projects with identical interfaces:

### Obfuscation Components (`lib/components/obf/`)
Contact info protection — renders only client-side:
- `ObfMail` — `{ user, domain, label? }`
- `ObfPhone` — `{ prefix, suffix, delimiter?, label? }`
- `ObfAddr` — `{ parts: string[] }`
- `ObfHoneypot` — `{ text }` (invisible honeypot field)

### Infrastructure Components
- `CookieConsent` — vanilla-cookieconsent wrapper (lazy-loaded)
- `Matomo` — Analytics (skipped in dev, consent-aware)
- `Navigation` — Sticky header with mobile hamburger
- `Footer` — Links, legal, cookie settings, build version

## Recurring Page Patterns

### Legal Pages (impressum, datenschutz)
- Always use Obf components for contact info
- Include ObfHoneypot at the bottom
- Back link at the top
- `<svelte:head>` with title + description

### Error Page (+error.svelte)
- Use `page` from `$app/state`
- Conditional: 404 vs generic error
- Link back to home

### Layout (+layout.svelte)
- Structure: Navigation -> main (children) -> Footer -> CookieConsent -> Matomo
- `flex min-h-screen flex-col` for sticky footer

### Sitemap (sitemap.xml/+server.ts)
- `export const prerender = true`
- Static page list with priorities
- Returns XML response

## Configuration Standards

### Prettier
- Tabs (not spaces)
- Single quotes
- No trailing commas
- printWidth: 500
- Plugins: prettier-plugin-svelte, prettier-plugin-tailwindcss

### TypeScript
- Strict mode enabled
- Module resolution: bundler
- No `any` types

### Deployment
- Adapter: adapter-cloudflare with nodejs_compat
- Full SSG (prerender: true)
- Build version injected via Vite define (__BUILD_VERSION__)

## Optional: Paraglide i18n

To add multi-language support:

1. Install: `npm i @inlang/paraglide-js`
2. Add to vite.config.ts:
```ts
import { paraglideVitePlugin } from '@inlang/paraglide-js';

plugins: [
  paraglideVitePlugin({
    project: './project.inlang',
    outdir: './src/lib/paraglide',
    strategy: ['url', 'cookie', 'preferredLanguage', 'baseLocale'],
  }),
  tailwindcss(),
  sveltekit()
]
```
3. Create `project.inlang/settings.json` and `messages/` directory
4. Update hooks.server.ts with Paraglide middleware
5. Add LanguageSwitcher component

## SEO Checklist

For each page, include in `<svelte:head>`:
- `<title>` with site name suffix
- `<meta name="description">`
- Open Graph tags (og:title, og:description, og:url, og:type)
- Canonical URL where applicable
- JSON-LD structured data for key pages

## Do NOT

- Use Svelte 4 syntax (export let, on:click, $:, slot)
- Use relative imports across directory boundaries
- Use `any` types
- Skip the Props interface for multi-prop components
- Add Umlauts (ae/oe/ue in code strings is fine, but avoid in identifiers)
- Create README.md or documentation files unless explicitly asked
