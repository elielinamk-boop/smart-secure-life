# Multilingual system (EN / RU / AR / EL) with RTL for Arabic

## Scope

Add a full i18n system that translates every visible string on every page (home, about, solutions, clients, contact, video, nav, footer, forms, buttons, meta), with instant language switching (no reload) and full RTL layout for Arabic. Design, spacing, typography, colors and animations stay exactly as they are.

## Stack

- `i18next` + `react-i18next` (industry standard, works cleanly with TanStack Start, no reload needed).
- `i18next-browser-languagedetector` to persist choice in `localStorage`.
- Translations as static JSON, imported at bundle time (SSR-safe, no async loader complications on Cloudflare Workers).

## File additions

```
src/i18n/
  index.ts            # i18next init, resources, language list
  useDir.ts           # hook: sets <html lang> + dir, toggles body class
  locales/
    en.json
    ru.json
    ar.json
    el.json
src/components/
  LanguageSwitcher.tsx  # globe icon + dropdown (EN / RU / AR / EL)
```

## File edits

- `src/routes/__root.tsx` — import `@/i18n`, mount `useDir()` in `RootComponent`, dynamic `<html lang dir>` via head, keep existing structure.
- `src/components/SiteNav.tsx` — replace hardcoded nav labels with `t(...)`, add `<LanguageSwitcher />` at the end of the nav.
- `src/components/SiteFooter.tsx` — replace text with `t(...)`.
- `src/routes/index.tsx` (large) — replace every hardcoded string (hero, features, connected experience cards, partners, about, testimonials, CTA, etc.) with `t(...)`. Data arrays like `CX_FEATURES`, testimonials, stats become key references (`{ id, titleKey, descKey }`) resolved inside components.
- `src/routes/about.tsx`, `solutions.tsx`, `clients.tsx`, `contact.tsx`, `video.tsx` — same treatment: extract copy, form labels, placeholders, validation messages, buttons, page `head()` title/description/OG.
- Each route's `head()` reads `i18n.t('meta.<page>.title'|'.description')` so titles/OG update per language.

## Translation JSON shape

Namespaced by page/section for maintainability:

```json
{
  "nav": { "home": "...", "solutions": "...", "about": "...", "clients": "...", "contact": "..." },
  "footer": { "rights": "...", "tagline": "..." },
  "meta": { "home": { "title": "...", "description": "..." }, "about": {...}, ... },
  "home": {
    "hero": { "eyebrow": "...", "title": "...", "subtitle": "...", "ctaPrimary": "...", "ctaSecondary": "..." },
    "features": [...],
    "connected": { "eyebrow": "...", "title": "...", "cards": { "mobile": {...}, "telegram": {...}, "dashboard": {...}, "support": {...} } },
    "partners": {...}, "testimonials": [...], "cta": {...}
  },
  "about": {...}, "solutions": {...}, "clients": {...}, "contact": { "form": { "name": "...", "namePlaceholder": "...", "email": "...", "message": "...", "submit": "...", "success": "...", "error": "..." } }, "video": {...}
}
```

`en.json` is written first from the current copy on each page. `ru.json`, `ar.json`, `el.json` are produced by translating every leaf string of `en.json` (professional-tone translation, preserving punctuation, product names like "Talesso" untranslated, and interpolation placeholders `{{name}}` intact).

## RTL for Arabic

- `useDir()` sets `document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')` and `lang` attribute on language change.
- Rely on Tailwind's built-in logical properties already in use where possible; convert directional utilities in nav/footer/cards to logical variants:
  - `ml-*` -> `ms-*`, `mr-*` -> `me-*`
  - `pl-*` -> `ps-*`, `pr-*` -> `pe-*`
  - `left-*` -> `start-*`, `right-*` -> `end-*`
  - `text-left` -> `text-start`, `text-right` -> `text-end`
  - `space-x-*` kept (works with `dir`), `flex-row` mirrors naturally under `dir="rtl"`.
- Icons that imply direction (arrows in CTAs, chevrons) get `rtl:-scale-x-100` so they flip.
- Marquee/keyframe animations that translate on X get an `rtl:` variant reversing direction, so they still move "forward" visually in RTL.
- Wave/floating/scale animations are direction-agnostic and remain unchanged.

## Language switcher UX

- Globe icon in nav, opens a small dropdown listing: English, Русский, العربية, Ελληνικά.
- Click -> `i18n.changeLanguage(code)` -> React re-renders instantly, `useDir()` flips `dir`/`lang`, choice saved in `localStorage` under `talesso.lang`.
- Detector order on first visit: `localStorage` -> `navigator.language` -> fallback `en`.

## SSR / build safety

- i18n resources imported statically -> available during SSR prerender, no hydration mismatch.
- Detector runs client-only; SSR always renders `en`, then client rehydrates to persisted language on mount (standard i18next pattern, prevents flicker via a one-frame `useLayoutEffect` swap in `useDir`).

## Verification checklist (run after implementation)

1. Grep the codebase for stray English literals in JSX/`head()` outside `src/i18n/locales/en.json` — should return only brand names, dev-only strings, and code.
2. Manually walk each route in all four languages: nav, hero, section headings, cards, buttons, form placeholders, validation messages, toast text, footer, page `<title>` in the tab.
3. In Arabic: confirm `<html dir="rtl">`, nav mirrors, cards mirror, marquee moves the intended direction, hover-lift/float animations still play.

## Out of scope

- No copy rewrites in English (only extraction).
- No new pages, no design changes, no route changes.
- No translation management service — flat JSON only. Future translators can edit the four files directly.
