# v3 prototyping (migration)

## Order

1. **Design system** — finish tokens / atoms / molecules / composites before feature shells.
2. **Sitemap** — all routes and roles; no orphan pages.
3. **Modes** - setup prod/dev mode env for robots
3. **i18n** — keys first; no user-facing copy inline in components. Copy in basic principles from other project
4. **Pages** — compose **blocks** (content/layout pieces) per page; keep shells thin until blocks exist. Use Page Canvas and LayoutShell

## Data

- **Prefer real DB early** — this is a migration: wire Supabase reads/writes against the **contract** (`contracts/schema.dbml` + approved migrations on the v3 project). Avoid a parallel mock “source of truth.”
- **Minimal seeds** (or staging) — only the rows each template needs to render; not a full fake dataset.
- **Migrations** — no new/edited migration files without explicit approval; DB wiring assumes the schema that is actually applied.

## Agents / humans

- **Small slices** — one route or behavior per pass; human judges v2 deltas and parity.
