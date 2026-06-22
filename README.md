# Expeerly v3 Platform

**One repo, one schema, one product surface.**

## Why this exists

Expeerly grew across Bubble.io, separate API services, analytics pipelines, and the public player on expeerly.com. Each piece worked, but together they fragmented ownership, duplicated concepts, and made change slow and risky.

**v3 unifies that stack in one place:**

- **Bubble legacy data** — migrate and normalize the operational database that still powers campaigns, brands, reviewers, and reviews today, with a clear contract for how legacy IDs map into the new world (`contracts/schema.dbml`).
- **Campaign management** — take over end-to-end campaign workflows (company and admin surfaces) that currently live outside this codebase.
- **The expeerly.com player** — bring the public review experience into the same application shell, routing, and design system.
- **API repos** — consolidate scattered backend capabilities so product behavior is defined once, not reimplemented per service.
- **Community reviews** — extend the product surface for public discovery, categories, brands, and individual review pages.
- **Reviewer onboarding** — redesign how reviewers enter, qualify, and move through campaigns so the funnel is clearer and more maintainable.

This is a **full platform consolidation**: data, product surfaces, APIs, and public experience moving onto a single technical foundation. For engineering, that means replatforming across every layer — not a one-off ETL project. For the business, it means one place to evolve Expeerly instead of coordinating changes across disconnected systems.

## What success looks like

Delivery is phased. Each phase depends on each other.

| Foundation | Why it matters |
|------------|----------------|
| **Schema contract** (`contracts/schema.dbml`) | One agreed model for entities, IDs, and relationships before implementation diverges |
| **Clickable prototypes** | Real routes and components, wired to the contract database where possible — not static mockups |

These are the inputs to a deliberate **foundation sign-off** — a fixed cutoff after which the program executes against an agreed baseline.

## Foundation sign-off

v3 has two modes:

1. **Foundation** — schema, sitemap, roles, and clickable prototypes are refined, reviewed, and debated. This is the window to get the model and product flows right.
2. **Build** — implementation, data migration, and rollout proceed on top of what was signed off.

At **foundation sign-off**, product and engineering formally accept the schema contract and prototype scope. From that point:

- The schema is the build target. Migrations and application code assume it; reopening entity design or ID strategy is a **change request**, not a side conversation.
- The prototype is the UX contract. Routes, flows, and key interactions are fixed for v3 launch; new ideas ship as follow-on work unless they block migration.
- There is **no going back** to redesign fundamentals mid-build. Late changes compound across data, APIs, and every surface in this monorepo.

The cutoff exists so the team can commit to execution with confidence. Sign-off is the handoff from “what are we building?” to “we are building it.”

See `contracts/prototyping-approach.md` for how we sequence design system, sitemap, i18n, and data wiring during the foundation phase.

## Principles

1. **Contract first** — before sign-off, schema and prototypes are living documents; after sign-off, they are the baseline. Changes go through explicit review, not feature-branch drift.
2. **Prototype in production shape** — thin shells, composed UI from the design system, locales for all user-facing copy, Supabase against the v3 project — not a parallel throwaway stack.
3. **Incremental delivery** — one route or behavior at a time; validate against v2 and Bubble parity before moving on.
4. **One design system** — atoms → molecules → composites; no ad-hoc UI on product screens (`app/bnd/designsystem/` documents the system).
5. **Monorepo, shared visibility** — company portal, reviewer workspace, admin (BDN), public video reviews, and shared infrastructure live together so cross-cutting changes stay traceable.

## Repository map (high level)

| Area | Purpose |
|------|---------|
| `app/` | Next.js routes — public player, company, reviewer, admin |
| `components/` | Shared UI (atomic design) |
| `contracts/` | Schema contract, design tokens, layout and prototyping docs |
| `locales/` | User-facing copy (no inline strings in product UI) |
| `scripts/` | Data pulls, sync jobs, operational tooling |
| `supabase/` | Migrations and local Supabase config (human-gated; see `AGENTS.md`) |

Contributor and agent conventions: **`AGENTS.md`**.

## Status

Active development — currently in the **foundation** phase. Routes and UI shells exist to support clickable prototypes and schema validation ahead of sign-off. Backend parity and data migration at scale begin once the foundation is signed off.
