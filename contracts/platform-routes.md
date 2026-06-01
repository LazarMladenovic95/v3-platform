# Platform routes (app.expeerly.com prototype)

**Status:** Active  
**Related:** [layout-shell-page-canvas.md](./layout-shell-page-canvas.md), [i18n-locales.md](./i18n-locales.md), [public-routes.md](./public-routes.md)

Authenticated-style app surfaces for **companies**, **reviewers**, and **admin / BND**. Not part of the public www / player sitemap.

## App router

```text
app/(platform)/
  companies/**           → PageCanvas → AppContentContainer → screen
  reviewer/**            → PageCanvas → AppContentContainer → screen
  bnd/(admin)/**         → PageCanvas → AppContentContainer → stub (admin menu)
  bnd/designsystem/**    → own layout (no PageCanvas; ESLint-exempt showcases)
```

Route group `(platform)` does **not** appear in URLs (`/companies`, not `/platform/companies`).

## Canonical paths

### Companies

| Route | Role |
|-------|------|
| `/companies` | Company dashboard |
| `/companies/all-reviews` | Community vs campaign reviews (fixtures) |
| `/companies/campaigns` | Manage review campaigns (stub) |
| `/companies/brand-assets` | Brand assets & products (stub) |
| `/companies/analytics` | Distribution & analytics (stub) |
| `/companies/account-settings` | Account settings (stub) |
| `/companies/credits` | Credits (stub) |

### Reviewer

| Route | Role |
|-------|------|
| `/reviewer/onboarding` | Reviewer onboarding (post-verify prototype) |
| `/reviewer/myreviews` | Self-submitted vs campaign reviews (fixtures) |
| `/reviewer/campaigns` | Running campaigns (stub) |
| `/reviewer/account-settings` | Account settings (stub) |

### Admin / BND

| Route | Role |
|-------|------|
| `/bnd` | Redirects to `/bnd/dashboard` |
| `/bnd/dashboard` | Dashboard (stub) |
| `/bnd/brand-assets` | Manage brand assets (stub) |
| `/bnd/analytics` | Distribution & analytics (stub) |
| `/bnd/admin-portal` | Admin portal (stub) |
| `/bnd/account-settings` | Account settings (stub) |
| `/bnd/designsystem` | Design system hub + component showcases |

**Sign-in** (`/sign-in`) stays under `app/(public)/` — shared auth entry, also locale-exempt in URL routing.

## Screens

`components/screens/platform/*Screen` — compose `components/ui/` only; no feature UI in `app/(platform)/**` page files (except design system under `app/(platform)/bnd/designsystem/`).

## Locale URL policy

Platform paths are **exempt** from `/{locale}/` URL prefixes. See `LOCALE_EXEMPT_PATH_PREFIXES` in `lib/i18n-routing.ts`.

UI strings still use `t("app.*")` / `t("designsystem.*")` and locale files (runtime locale, not path segment).

## Data & nav

Prototype: fixtures + stubs; no Supabase. Nav: `lib/app-nav-config.ts` (`companiesNavItems`, `reviewerNavItems`, `bndNavItems` + `appNavDesignSystemChildren` on `/bnd/**`).
