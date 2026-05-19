# LayoutShell & PageCanvas

**Code:** `components/layout/LayoutShell.tsx`, `components/layout/PageCanvas.tsx`

## PageCanvas

Single enforcement point for **page layout behavior**.

- Pages pass **fully declared** layout options as props.
- Validates options; forwards result to `LayoutShell`.
- **No structure, no chrome, no content.**

## LayoutShell

Single enforcement point for **global layout structure**.

- Renders chrome + `<main>` only.
- Applies layout parameters from `PageCanvas`; does not infer route or page meaning.
- **No page-specific layout decisions.**

## Wiring

```text
app/layout.tsx → LayoutShell → routes
app pages → PageCanvas → blocks/content
```

- Root: `LayoutShell` once in `app/layout.tsx`.
- Product pages: wrap in `PageCanvas`; layout options live there, not scattered in wrappers.
- `app/bnd/designsystem/`: own segment layout; **no** `PageCanvas`.

## Related

[prototyping-approach.md](./prototyping-approach.md)
