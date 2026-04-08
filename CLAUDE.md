# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Next.js dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run built app
- `npm run lint` / `npm run lint:fix` — ESLint (Next + TS config)
- `npm run format` — Prettier across the repo

There is no test runner configured in this project.

## Environment

Two env vars drive content/data:
- `NEXT_PUBLIC_BASE_URL` — used for `metadataBase`, `sitemap.ts`, `robots.ts`. Defaults to `http://localhost:3000`.
- `NEXT_PUBLIC_STRAPI_API_URL` — base URL of the Strapi backend (defaults to `http://localhost:1337`). The `/api` suffix is appended in code.
- `NEXT_PUBLIC_STRAPI_API_TOKEN` — bearer token injected by an axios request interceptor in `src/api/index.ts`.

## Current state

The repository was intentionally stripped of all marketing/brand content to serve as a base for a new landing. All route folders, providers, shared primitives, theme, hooks, utils, the Strapi axios client and section component shells (`components/blog`, `components/faq`, `components/get-a-demo`, `components/become-an-early-adopter`) are preserved unchanged. What was emptied: every `src/app/*/page.tsx` body (now placeholder `<section><h1>...</h1></section>`), associated `style.module.css` files (reduced to a `.page` stub), `Navbar`/`Footer`/`Toolbar` content (empty `NAV_LINKS`, "Logo" text placeholder, `#` hrefs), root layout `metadata` (Sprouter keywords/openGraph removed), `src/constants/constants.ts` (all `*_FAQS` are empty arrays). Many section components in `components/blog/*` and `components/faq/*` are now orphaned (no importer); they remain as code-style references for the new landing build.

## Architecture

Next.js 15 App Router (React 19, TypeScript strict). Path alias: `@/*` → `src/*`.

- `src/app/` — App Router routes. Root `layout.tsx` mounts global `Navbar`/`Footer` inside `Providers`. The marketing home page lives under the `(root)` route group. Other top-level routes: `about-us`, `become-an-early-adopter`, `blog` (with `[slug]` and `most-popular`), `faq`, `get-a-demo`, `thanks-for-message`. `sitemap.ts` and `robots.ts` are generated dynamically.
- `src/providers/index.tsx` — single client-side provider tree: `LenisProvider` (smooth scroll via `lenis`) wrapping Chakra UI v3 (`ChakraProvider` with `defaultSystem`). Add new providers here, not in `layout.tsx`.
- `src/api/` — single `Api` axios wrapper class targeting Strapi. Exposes generic `get/post/delete` plus Strapi-specific helpers (`getBlogPostsPopulated`, `getBlogPostBySlugPopulated`, `getBlogTagsPopulated`) that build Strapi-style `filters`/`populate`/`pagination` query params. A singleton `api` is exported and consumed across blog pages. `requests.ts` and `responses.ts` hold the request/response types.
- `src/components/` — page-section components grouped by route (`blog/`, `faq/`, `get-a-demo/`, `become-an-early-adopter/`) plus `core/` for shared chrome (`Navbar`, `Footer`, `MarkdownViewer`, `ReactLenis`, `Reveal`, `Toolbar`).
- `src/shared/` — reusable design-system primitives (`Button`, `Input`, `Select`, `Accordion`, `Menu`, `Image`, `Link`, etc.). Re-exported from `src/shared/index.ts`. These are the building blocks; prefer them over raw Chakra components.
- `src/theme/` — global CSS (`globals.css`, `reset.css`, `variables.css`, `colors.css`) plus the `onest` font loader in `fonts.ts`. Styling is CSS Modules + global CSS variables, not Chakra's theming layer.
- `src/hooks/`, `src/utils/`, `src/constants/`, `src/types/` — co-located cross-cutting code.
- Markdown rendering for blog posts goes through `remark` + `remark-html` via the `MarkdownViewer` component.
- Animations use `motion` (Framer Motion successor); the `Reveal` component is the standard scroll-reveal wrapper.

## Conventions (from README + ESLint config)

- File and folder names: kebab-case. Use **named exports** (no default exports for components, except where Next.js requires them like `page.tsx`/`layout.tsx`).
- Imports must be sorted by `simple-import-sort` with the group order defined in `eslint.config.mjs` — run `lint:fix` rather than ordering manually.
- `no-cyrillic-string/no-cyrillic-string` is **error**: never put Cyrillic characters in source strings (UI copy is English only). The README itself contains Russian, but code must not.
- Branches: `<lastname>/<task-id>` (e.g. `neshchadimov/servicedev-123`).
- Commits follow Conventional Commits with the task key in brackets: `feature(auth): [SERVICEDEV-123] add remember-me checkbox`.
- Husky + lint-staged run `eslint --fix` and `prettier --write` on staged files pre-commit.
