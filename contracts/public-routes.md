# Public routes (www / player prototype)

**Status:** Active  
**Related:** [platform-routes.md](./platform-routes.md), [prototyping-approach.md](./prototyping-approach.md), [layout-shell-page-canvas.md](./layout-shell-page-canvas.md), [schema.dbml](./schema.dbml)

## Canonical paths (sitemap parity)

| Route | Role |
|-------|------|
| `/` | Marketing landing |
| `/sign-in` | Login (prototype; mirrors [app.expeerly.com](https://app.expeerly.com/)) |
| `/sign-in?sign-up` | Sign up (role → reviewer email/password → 6-digit verify) |
| `/video-reviews` | Hub |
| `/video-reviews/brand/{brandSlug}` | Brand listing |
| `/video-reviews/{categorySlug}/{brandSlug}/{productSlug}/{reviewId}` | Single review player |

**Footer (global chrome):** Labels in `marketing.footer.*`. Contact → `mailto:hello@expeerly.com`. Legal/about → outbound `https://www.get.expeerly.com/...` (same targets as [www.expeerly.com](https://www.expeerly.com/)).

**Excluded:** `/video-reviews/reviewers/*` (not migrated).

**Platform (not public):** `/companies/**`, `/reviewer/**` — see [platform-routes.md](./platform-routes.md).

## Locale URL prefixes (future)

- Default `en`: no prefix (`https://www.expeerly.com/...`)
- `de`, `fr`, `it`: `/{locale}/...` on **public** paths only (middleware + `[locale]` — not implemented yet)
- **Exempt** (never prefixed): `/companies`, `/reviewer`, `/sign-in`, `/bnd` — see `lib/i18n-routing.ts`
- UI copy on all surfaces may still use `t()` / `locales/*.json` regardless of URL locale

## URL segments vs schema

| Segment | Source (when wired to DB) |
|---------|---------------------------|
| `reviewId` | `processed_videos.public_review_id` |
| `categorySlug` | `interest_categories.slug_{locale}` |
| `brandSlug` | `brands_analytics_v2.slug` |
| `productSlug` | `products.product_name_slug` |

Resolver must match **all** segments; wrong slug combo → 404 even if `reviewId` exists.

## Prototype data

- Fixtures: `lib/fixtures/video-reviews.ts` (+ `video-reviews-data.json`)
- Regenerate from CSV + live www metadata: `npm run fixtures:video-reviews` (see `scripts/build-video-review-fixtures.mjs`)
- Review copy (titles, FAQ, transcript): fixture JSON per lang — not `locales/*.json`
- UI chrome: `locales/{locale}.json` via `t("player.*")`, `t("marketing.*")`

## Fixture IDs (dev)

| Entity | Example |
|--------|---------|
| Brand | `miele` |
| Category | `home-kitchen` |
| Product | `triflex-perfomance` |
| Review | `100000001` |

## Layout

- `app/(public)/**`: thin route → `PageCanvas` → screen in `components/screens/public/`
- Screens compose `components/ui`; product video pieces live under `composites/video-reviews/` and `molecules/video-reviews/`
- Design system: `app/(platform)/bnd/designsystem/**` — see [platform-routes.md](./platform-routes.md)
- Shared `LayoutShell` + `AppHeader` at root
