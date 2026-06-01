# i18n — locale files

**Status:** Active

## File layout

```text
locales/
  en.json | de.json | fr.json | it.json   # Product UI (ui, app, player, marketing)
  bnd/
    en.json | …                             # Design system only (designsystem.*)
```

One JSON file per language for product; design system copy is isolated under `bnd/`.

## `t()` namespaces

| Prefix | File | Use |
|--------|------|-----|
| `ui.*` | `{locale}.json` | Atoms, molecules, shared UI |
| `app.*` | `{locale}.json` | Shell, nav, app chrome |
| `player.*` | `{locale}.json` | Video review routes (labels, empty states) |
| `marketing.*` | `{locale}.json` | Landing |
| `designsystem.*` | `bnd/{locale}.json` | DS site only |

## Rules

- No user-facing copy inline in `app/`, `components/`, `lib/` (ESLint `i18next/no-literal-string`).
- Exception: `app/bnd/designsystem/ui/**` showcase demos.
- DB/CSV review content: `pickLocalized()` from `lib/i18n-content.ts` on fixture JSON — not locale files.

## Loading

`lib/i18n.ts` merges `{locale}.json` + `bnd/{locale}.json` for `getUiStrings()`. Non-`en` locales may stub until translated (fallback to `en`).

## URL locale vs message locale

- **Messages:** `t("…")` / `getLocale()` — all routes may use translated UI strings.
- **URL segment** (future middleware): only paths in `LOCALE_PREFIXED_PATH_PREFIXES` (`lib/i18n-routing.ts`) — typically `/` and `/video-reviews/**`.
- **Never URL-prefixed:** `/companies`, `/reviewer`, `/sign-in`, `/bnd` (`LOCALE_EXEMPT_PATH_PREFIXES`). Platform routes stay `/companies/...` even when www uses `/de/...`.

## Scripts

- `npm run tokens:check` — color manifest vs CSS
- `scripts/build-colors-manifest.mjs` — updates `locales/bnd/en.json` → `designsystem.tokens.colors`
