# Design system — atomic design audit & remediation checklist

**Status:** Open (post–designer handoff, pre–strict merge to `main`)  
**Branch audited:** `Allison-Design-Updates` (and current `components/ui` on that branch)  
**Governance:** [AGENTS.md](../AGENTS.md) — atoms → molecules → composites; tokens in Tailwind; copy in locale files.

This document records gaps found when comparing `components/ui` to strict atomic design, plus a ordered checklist to reach “good to go” before product features depend on these primitives.

---

## Executive summary

| Area | State |
|------|--------|
| Folder layout (`atoms` / `molecules` / `composites`) | Present and mostly consistent |
| Strict composition (tokens → atoms → molecules → composites) | **Not met** — widespread Lucide usage, layer inversion, ad-hoc triggers |
| Locale / i18n | **No locale layer in repo yet** — hardcoded English in several library components |
| Design-system showcases | Demo copy inline (acceptable short-term; localize if DS must be translated) |

**Approx. scope:** ~28 of ~45 files under `components/ui` need changes; **9** library files contain baked-in English strings.

---

## Missing foundation (blockers)

These must exist before other fixes stick.

| # | Item | Why |
|---|------|-----|
| F1 | **`Icon` atom** (`components/ui/atoms/Icon.tsx` or equivalent) | AGENTS.md: chevrons, search, calendar, close, etc. must not be loose Lucide imports in molecules/composites |
| F2 | **Locale layer** (e.g. `locales/en.ts` + wiring convention) | AGENTS.md: no user-facing strings inline; `aria-label`, placeholders, and defaults count |
| F3 | **Typography atoms** (optional but recommended) | Today: raw `<h3>`, `<p>`, `<span>` + `text-body-*` in composites — consider `Text`, `Heading` atoms using token classes |

---

## Findings — atomic design violations

### Mostly compliant (minor follow-ups)

| Component | Path | Notes |
|-----------|------|--------|
| InputField | `molecules/InputField.tsx` | Label + Input + HintText |
| TextareaField | `molecules/TextareaField.tsx` | Same pattern |
| CheckboxField | `molecules/CheckboxField.tsx` | Uses `<p>` for hint — prefer `HintText` |
| RadioGroupField | `molecules/RadioGroupField.tsx` | Uses `<p>` for option hints — prefer `HintText` |
| ToggleField | `molecules/ToggleField.tsx` | Uses `<p>` for hint — prefer `HintText` |
| AddNewButton | `molecules/AddNewButton.tsx` | Composes `PrimaryPink`; icon still Lucide |
| SelectItem | `molecules/select/SelectItem.tsx` | OK; icons from caller |
| SearchResultItem / SearchResults | `molecules/search/*` | OK structure |
| AvatarGroup | `composites/AvatarGroup.tsx` | Atoms only |
| Popover / Tooltip | `composites/Popover.tsx`, `Tooltip.tsx` | Radix primitives (acceptable composite base) |
| Carousel / DataTable | `composites/Carousel.tsx`, `DataTable.tsx` | Layout/structure primitives |
| Button atoms | `atoms/button/*` | BaseButton hierarchy correct |

### Violation type A — Direct `lucide-react` (needs Icon atom)

- [ ] `atoms/Checkbox.tsx`
- [ ] `atoms/Tag.tsx`
- [ ] `molecules/select/SelectField.tsx`
- [ ] `molecules/search/SearchField.tsx`
- [ ] `molecules/DateField.tsx`
- [ ] `molecules/DateRangeField.tsx`
- [ ] `molecules/FileUploadField.tsx`
- [ ] `molecules/navigation/Breadcrumbs.tsx`
- [ ] `molecules/Pagination.tsx`
- [ ] `molecules/feedback/toast.tsx`
- [ ] `molecules/AddNewButton.tsx`
- [ ] `composites/Accordion.tsx`
- [ ] `composites/CalendarPicker.tsx`
- [ ] `composites/DialogWindow.tsx`
- [ ] `composites/InPageAlert.tsx`
- [ ] `composites/TabbedNavigationMenuItem.tsx`
- [ ] `composites/VerticalNavigationMenuItem.tsx`

### Violation type B — Layer inversion (molecule → composite)

Molecules must not import composites.

| File | Imports | Remediation |
|------|---------|-------------|
| `molecules/DateField.tsx` | `CalendarPicker`, `Popover` | Promote to composite (e.g. `DateFieldComposite`) or split: trigger molecule + calendar composite |
| `molecules/DateRangeField.tsx` | `CalendarPicker`, `Popover` | Same as above |

- [ ] Refactor `DateField` / `DateRangeField` to correct layer
- [ ] Update `components/ui/index.ts` exports
- [ ] Update design-system showcases using these components

### Violation type C — Ad-hoc triggers / navigation (skip button/input atoms)

| File | Issue |
|------|--------|
| `molecules/select/SelectField.tsx` | Custom Radix trigger; not built on `Input` atom |
| `molecules/DateField.tsx` | Raw `<input>` styling; not `Input` atom |
| `molecules/DateRangeField.tsx` | Raw `<button>` + duplicated field styles |
| `molecules/Pagination.tsx` | Raw `<button>`; should use `IconButton` / button atoms |
| `molecules/navigation/TabbedNavigation.tsx` | Raw `Link` + Tailwind tab styles |
| `molecules/navigation/VerticalNavigation.tsx` | Raw `Link` + sidebar styles |
| `molecules/navigation/Breadcrumbs.tsx` | Raw `Link` + Lucide chevron |
| `composites/Accordion.tsx` | Raw `<button>` for trigger |
| `composites/TabbedNavigationMenuItem.tsx` | Raw `<button>` |
| `composites/VerticalNavigationMenuItem.tsx` | Raw `<button>` |
| `atoms/Tag.tsx` | Remove control is raw `<button>`; use `IconButton` + Icon atom |

- [ ] Introduce shared **field trigger** molecule or compose `Input` + `IconButton` where applicable
- [ ] Introduce **nav link/tab atoms** or compose existing button/link atoms for navigation molecules

### Violation type D — Composites do not compose molecules

Composites should assemble molecules (and atoms), not only Radix + inline typography.

| File | Issue |
|------|--------|
| `composites/Card.tsx` | Raw `CardTitle` / `CardDescription` typography |
| `composites/ContentListItem.tsx` | Raw `h3` / `p` |
| `composites/EmptyState.tsx` | Raw `h3` / `p` |
| `composites/FilterPanel.tsx` | Raw `h3` / `p` |
| `composites/InfoBox.tsx` | Raw `h3` / `p` + ad-hoc bullet dot (not a tokenized atom) |
| `composites/InPageAlert.tsx` | Icons + `IconButton`; no molecule layout |
| `composites/DialogWindow.tsx` | Radix shell; footer/actions not composed from button row molecule |

- [ ] Add typography atoms or dedicated header/body molecules
- [ ] Refactor listed composites to compose lower layers

### Violation type E — Duplication / parallel patterns

| File | Issue |
|------|--------|
| `molecules/search/MapListSearchField.tsx` | Reimplements result rows; should use `SearchResultItem` |
| `molecules/feedback/IndeterminateBar.tsx` | Overlaps `ProgressBar`; consolidate or document distinct use cases |

- [ ] Deduplicate `MapListSearchField` with `SearchResultItem`
- [ ] Merge or clearly split `IndeterminateBar` vs `ProgressBar`

---

## Findings — copy not in locale files

**Repo state:** No `locales/`, `messages/`, or `locale.ts` exists yet. All strings below must move into the locale layer once introduced, then be referenced from components (no inline defaults for user-facing text).

### Baked into library components (`components/ui`)

| File | Hardcoded strings |
|------|-------------------|
| `molecules/navigation/Breadcrumbs.tsx` | Default `aria-label`: `"Breadcrumb"` |
| `molecules/DateField.tsx` | `"Open calendar"`; default placeholder `"YYYY-MM-DD"` |
| `molecules/FileUploadField.tsx` | `"Uploading"`; `"Tap to upload or drag and drop"`; `"Select one or more files."` / `"Select one file."`; dynamic `"Accepted: …"`, `"Max size: …"` |
| `molecules/ProgressBar.tsx` | Fallback `aria-label`: `"Progress"` |
| `molecules/Pagination.tsx` | `"Pagination"`, `"Previous page"`, `"Next page"`, `` `Page ${n}` `` |
| `composites/CalendarPicker.tsx` | `"Previous month"`, `"Next month"` |
| `composites/DialogWindow.tsx` | `"Close dialog"` |
| `composites/InPageAlert.tsx` | Default `closeAriaLabel`: `"Close alert"` |
| `atoms/Tag.tsx` | Default `` `Remove ${label}` `` for `removeAriaLabel` |

- [ ] Create locale file(s) and key namespace (e.g. `ui.breadcrumbs.ariaLabel`, `ui.dateField.openCalendar`, …)
- [ ] Replace defaults in the nine files above with locale lookups (or require callers to pass localized props with no English fallback)
- [ ] Audit prop-only copy at **call sites** once app pages exist (showcases today pass English `label` / `hint` / `title` inline)

### Design-system UI (demo / docs — lower priority)

Inline English in:

- `components/designsystem/DesignSystemHeader.tsx`
- `components/designsystem/DesignSystemComponentsNav.tsx`
- `components/designsystem/showcase/*.tsx`
- `app/designsystem/**`

- [ ] Decide: localize design system or keep English-only internal docs
- [ ] If localized, move nav labels and showcase demo strings to locale files

---

## Remediation checklist (recommended order)

Use this sequence for the strict atomic rework PR before merging to `main`.

### Phase 1 — Foundation

- [ ] **F1** Add `Icon` atom (name → Lucide mapping internal to atom only)
- [ ] **F2** Add `locales/en.ts` (or project convention) + document import pattern for UI
- [ ] **F3** (Optional) Add typography atoms (`Heading`, `Text`, …) mapped to Tailwind `text-*` tokens

### Phase 2 — Icons & layer fixes

- [ ] Replace all `lucide-react` imports in `components/ui` (except inside `Icon` atom) — see [Violation type A](#violation-type-a--direct-lucide-react-needs-icon-atom)
- [ ] Fix **DateField** / **DateRangeField** layer inversion — see [Violation type B](#violation-type-b--layer-inversion-molecule--composite)
- [ ] Move hardcoded strings from library components to locale — see [Baked into library components](#baked-into-library-components-componentsui)

### Phase 3 — Composition

- [ ] Unify field triggers (`SelectField`, date fields) on `Input` / shared trigger molecule
- [ ] Refactor **Pagination**, **navigation** molecules to use button/link atoms
- [ ] Refactor **Accordion** and nav menu composites to use `IconButton` + Icon atom
- [ ] Refactor composites (Card, EmptyState, FilterPanel, etc.) to compose molecules/typography atoms
- [ ] Deduplicate **MapListSearchField** / **IndeterminateBar**

### Phase 4 — Verification

- [ ] `components/ui/index.ts` exports match new names/layers
- [ ] Design-system showcases still render; update imports after renames
- [ ] No `lucide-react` in `molecules/` or `composites/` (grep CI check optional)
- [ ] No `from "../composites"` in `molecules/` (grep CI check optional)
- [ ] Grep for remaining English defaults in `components/ui` (`aria-label=`, placeholder defaults)
- [ ] Review against [AGENTS.md](../AGENTS.md) atomic design section

### Phase 5 — Merge gate

- [ ] Designer sign-off on visual parity after refactors
- [ ] Merge atomic cleanup + locale to `main`
- [ ] Block new product UI from importing pre-refactor patterns (document in PR template or rule)

---

## “Good to go” definition

Merge to `main` when all of the following are true:

1. **Icon atom** is the only place that imports `lucide-react` for UI icons (except iconography showcase if documented as exception).
2. **No molecule** imports from `composites/`.
3. **Field and nav patterns** compose from atoms (buttons, input, icon button), not one-off triggers.
4. **Library components** have no hardcoded English; strings come from locale or required localized props.
5. **Composites** compose molecules/atoms for typography and actions where applicable.
6. Design-system pages still document the canonical components.

---

## References

- [AGENTS.md](../AGENTS.md) — Atomic design and UI, copy/localization
- Component barrel: `components/ui/index.ts`
- Token sources: `tailwind.config.mjs`, `lib/semantic-color-tokens.ts`, `lib/designsystem-typography-data.ts`

---

*Last updated: 2026-05-19 — audit from branch review conversation.*
