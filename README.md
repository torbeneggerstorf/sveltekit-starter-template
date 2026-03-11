# SvelteKit Starter Template

A production-ready SvelteKit starter template with Svelte 5, TailwindCSS 4, TypeScript, and everything you need to ship a DSGVO-compliant website.

## What's included

- **Svelte 5** with runes (`$state`, `$derived`, `$effect`, `$props`)
- **TailwindCSS 4** via Vite plugin
- **TypeScript** in strict mode
- **Cookie Consent** (vanilla-cookieconsent) with German translations
- **Matomo Analytics** – consent-aware, only loads after opt-in
- **Contact Obfuscation** – email, phone, and address components that render client-side to prevent scraping
- **SEO Component** – meta tags, Open Graph, Twitter Cards, JSON-LD
- **Dark/Light Theme** with localStorage persistence
- **Sitemap** – auto-generated at `/sitemap.xml`
- **Toast Notifications**
- **Legal Pages** – Impressum & Datenschutz templates (German)
- **Skip-to-Content** accessibility link
- **Cloudflare Pages** deployment adapter
- **Build Versioning** – git hash + package version in the footer

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Type-check
npm run check

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── app.css                        # Tailwind theme & colors
├── app.html                       # HTML shell
├── lib/
│   ├── components/
│   │   ├── Navigation.svelte      # Sticky header + mobile menu
│   │   ├── Footer.svelte          # Legal links + build version
│   │   ├── SEO.svelte             # Meta tags
│   │   ├── CookieConsent.svelte   # Cookie banner (lazy-loaded)
│   │   ├── Matomo.svelte          # Analytics
│   │   ├── Button.svelte          # Primary/secondary/ghost variants
│   │   ├── Badge.svelte           # Status indicators
│   │   ├── Card.svelte            # Content cards
│   │   ├── Section.svelte         # Page section wrapper
│   │   ├── Toast.svelte           # Notification popups
│   │   └── obf/                   # Contact obfuscation
│   │       ├── ObfMail.svelte
│   │       ├── ObfPhone.svelte
│   │       ├── ObfAddr.svelte
│   │       └── ObfHoneypot.svelte
│   ├── config/
│   │   └── cookieConsent.ts       # Cookie consent config & i18n
│   ├── stores/
│   │   ├── theme.svelte.ts        # Dark/light mode
│   │   └── toast.svelte.ts        # Toast notifications
│   ├── styles/
│   │   └── cookieConsent.css
│   ├── utils/
│   └── types/
└── routes/
    ├── +layout.svelte             # Root layout
    ├── +page.svelte               # Homepage (component showcase)
    ├── +error.svelte              # Error page
    ├── impressum/+page.svelte     # Imprint
    ├── datenschutz/+page.svelte   # Privacy policy
    └── sitemap.xml/+server.ts     # Sitemap generator
```

## Customizing

1. **Colors & Theme** – Edit the `@theme` block in `src/app.css`
2. **Navigation** – Update links and logo in `Navigation.svelte`
3. **Legal Pages** – Replace placeholder content in `impressum/` and `datenschutz/`
4. **Analytics** – Set your Matomo URL and site ID in `Matomo.svelte`
5. **SEO** – Pass `title`, `description`, and `image` props to the `<SEO>` component per page
6. **Cookie Consent** – Adjust categories and translations in `lib/config/cookieConsent.ts`

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run check` | Type-check with svelte-check |
| `npm run lint` | Check formatting & linting |
| `npm run format` | Auto-format code |
| `npm run test` | Run tests |

## Deployment

Pre-configured for **Cloudflare Pages**. All routes are prerendered as static HTML.

To deploy elsewhere, swap the adapter in `svelte.config.js` – see the [SvelteKit adapters docs](https://svelte.dev/docs/kit/adapters).

## Tech Stack

| | |
|---|---|
| Framework | SvelteKit 2 + Svelte 5 |
| Styling | TailwindCSS 4 |
| Language | TypeScript (strict) |
| Build | Vite 7 |
| Testing | Vitest |
| Linting | ESLint + Prettier |
| Deployment | Cloudflare Pages |
