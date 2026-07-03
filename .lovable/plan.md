## Goal

Make every page and section render cleanly from 320px → 1920px without touching the approved desktop design (≥1280px stays pixel-identical).

## Approach

Work section-by-section, page-by-page. For each, audit at 320 / 375 / 414 / 768 / 1024 with Playwright screenshots, then patch Tailwind classes to add mobile-first scaling that only takes effect below `lg:`/`xl:`. Desktop classes stay untouched — new rules are additive at `sm:`/`md:` breakpoints and reset at `lg:` back to current values.

## Scope (pages/components)

Homepage (`src/routes/index.tsx`) — hero, video showcase, solutions, roadmap, meet-platform, buildings, scenes, connected, partners, ready CTA
About (`src/routes/about.tsx`) — waves scene + card grid
Clients (`src/routes/clients.tsx`) — swipeable gallery, GDPR badge, stats
Solutions (`src/routes/solutions.tsx`)
Contact (`src/routes/contact.tsx`) — form + map
Video (`src/routes/video.tsx`)
Shared: `SiteNav`, `SiteFooter`, `FeatureRoadmap`, `MeetPlatform`, buildings/scenes hotspot maps

## Key changes

1. **Nav** — replace inline mobile fallback with a premium animated slide-in drawer (`SiteNav`): full-height overlay, staggered link reveal, backdrop blur, language switcher inside. Desktop nav unchanged at `lg:`.
2. **Typography** — clamp large display headings (`text-4xl sm:text-5xl md:text-6xl lg:*existing*`) so nothing clips at 320px. Line-heights tightened on mobile only.
3. **Grids** — collapse multi-column grids to 1 col (or 2 for icon cards) below `md:`; keep desktop `lg:grid-cols-N` intact.
4. **Gallery (clients)** — turn the current row into a horizontal snap-scroll carousel below `md:` with dots + swipe; desktop grid unchanged.
5. **Roadmap** — under `md:` render as a vertical timeline (single column, connecting line on the left, same animations, same icons). Desktop SVG roadmap unchanged at `md:`.
6. **Buildings / Scenes hotspot maps** — clamp map image to `max-w-full`, scale hotspot coordinates proportionally, enlarge tap targets to ≥44px on touch.
7. **Contact map** — ensure `w-full` and `min-h-[320px]` on mobile, controls repositioned for thumb reach.
8. **Stats / animated numbers** — 2-col grid on mobile instead of 4, spacing tightened, counters keep animating.
9. **Cards** — reduce padding (`p-5 md:p-6 lg:p-8` where desktop is `p-8`), rounded radii kept, hover states preserved.
10. **Images** — add `loading="lazy"` and `decoding="async"` to non-LCP `<img>`; add `w-full h-auto object-cover` guards to prevent overflow.
11. **Overflow guards** — add `overflow-x-hidden` to `<body>`/root layout wrappers to eliminate any accidental horizontal scroll.
12. **Spacing** — section paddings scale: `py-16 sm:py-20 md:py-24 lg:py-32` (desktop `lg:` untouched where already 32).
13. **Footer** — stack columns on mobile, keep 4-col at `md:`.

## Verification

For each page, drive Playwright at 320, 375, 414, 768, 1024, 1440 viewports; screenshot; inspect for:
- horizontal scroll (document width > viewport)
- clipped text (element scrollWidth > offsetWidth on headings)
- overflowing images
- tap target size on nav / buttons
- LCP image renders

Fix issues in the same pass before moving to the next page.

## What stays exactly the same

Any class at `lg:` and `xl:` breakpoints, all color tokens, all fonts, all animations/keyframes, all interaction handlers, route structure, i18n keys, roadmap SVG on desktop, hotspot positions on desktop, hero video, and all copy.

## Out of scope

No new content, no new sections, no design-token changes, no font swaps, no route additions.
