# Agent instructions — v3-platform

**Governance:** Do **not** change, append, reorder, or remove content in `AGENTS.md` without **explicit permission from the CPO**. If updates are needed, flag that in chat and wait for CPO approval before editing this file.

## Next.js

This app targets **Next.js 16.x** (`next` in `package.json`). Training data may be stale: APIs, conventions, and layout can differ from older Next releases.

Before adding or changing Next-specific code (routing, config, data fetching, middleware), read the in-tree docs under `node_modules/next/dist/docs/` for the installed version and follow deprecation notices there.

## Repository layout

- **App:** `app/`, shared UI in `components/`, utilities in `lib/`.
- **Scripts:** long-running or scheduled pulls/sync live under `scripts/` (see `package.json` `scripts` entries for entry points).
- **Data / contracts:** `data/`, `contracts/` as used by the codebase—prefer extending existing patterns over new parallel structures.

## Copy and localization

All user-facing **copy** for this platform is driven by **locale files** (the repo’s i18n / messages layer—follow whatever structure exists under e.g. `messages/`, `locales/`, or the established convention once introduced).

- **Never** add user-visible strings inline in components, pages, or other UI code.
- **Always** add or extend entries in the locale files first, then wire the UI to those keys.

Technical exceptions (e.g. purely internal labels, logs, or third-party API constants) should remain non-user-facing; when in doubt, treat text as user-facing and put it in locale.

## Atomic design and UI

The UI follows **atomic design**. Do **not** invent or add any component or element—including **plain text**—that is not grounded in this stack, in order:

1. **Tailwind config** (design tokens, theme, and shared styles as defined in the project).
2. **Atoms** → **molecules** → **composites** (use and compose existing pieces only; match the repo’s folder/naming conventions).

**No ad-hoc UI:** Do not introduce one-off primitives (raw semantic HTML plus arbitrary Tailwind classes, new visual patterns, or “temporary” components) to satisfy a feature when the right atom/molecule/composite or token does not exist yet.

**Missing pieces:** If you are asked to deliver UI but something required is **not** available in Tailwind config or the atom → molecule → composite layers, **stop and flag the gap**. Ask for an **atomic design extension** (new token, atom, molecule, or composite—whichever is appropriate) **before** implementing a workaround. Do not silently improvise.

**Designer collaboration:** A **designer with limited code experience** contributes through this design system. When instructions or mockups conflict with atomic design—skipping layers, embedding primitives where a composed component should exist, or bypassing tokens—**always flag the conflict** in your response: say what breaks the rules and what the correct hierarchy would be (which atom/molecule/composite or token is missing or should be used). Do not implement the anti-pattern to “match the ask.”

**Hierarchy (non‑negotiable):** Respect strict composition—for example, a **dropdown chevron inside a field** must not appear as a loose graphic or inline SVG; it belongs on the **UI icon atom** (or a field molecule that already composes that atom). Parent UI cannot invent child visuals that skip the atom layer.

## Cursor rules in this repo

Workspace rules live in `.cursor/rules/`. Shorthand the user may type:

- `crs` — check, report, suggest; do not implement unless asked.
- `rt pl` — return an implementation plan (planning-style).
- `iml` — implement the last suggested plan.

## Supabase and database work

The project uses Supabase client libraries (`@supabase/*` in dependencies). **v3 runs on a new Supabase database** (its own project), not the legacy analytics stack by default.

**Bootstrap schema:** Bring over the **full existing migration history** from the legacy project so this repo can recreate the same baseline on the new database. Legacy project (reference only for copying migrations, not for day‑to‑day targets): `abwvxbcxzrszhtjnhchr` — [Supabase dashboard](https://supabase.com/dashboard/project/abwvxbcxzrszhtjnhchr).

**After bootstrap:** **New** migrations and schema changes apply **only** to the **new** v3 Supabase project and this repository. Do **not** push or assume sync of future migrations to `abwvxbcxzrszhtjnhchr` until an explicit **go‑live / cutover** when that is requested.

**Migrations — human gate:** Do **not** create, edit, or write migration files (`supabase/migrations/**/*.sql` or equivalent) on your own. Propose SQL or plans in chat; migration files may be added or changed **only after explicit user approval** of the exact contents.

Do **not** assume the same project ref or migration sync rules as `billing` or `analytics-v2` in the sibling `CodeExpeerly` folder unless a separate policy is documented. Add a dedicated `.cursor/rules` entry for **this** repo’s Supabase project ref and CLI habits once `supabase/` is wired up.

For local env and pushes, follow `.cursor/rules` here when present; otherwise use documented env vars and avoid hardcoding secrets.

## General

Match existing naming, types, and import style. Prefer small, focused changes tied to the task; avoid drive-by refactors and unrelated file churn.
